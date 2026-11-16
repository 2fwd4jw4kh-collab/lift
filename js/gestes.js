// ===== Lift 2.3 : toucher et navigation façon iOS =====
(function(){
const R=document.documentElement;
// :active instantané sur iOS
document.addEventListener('touchstart',()=>{},{passive:true});
// --- vibrations (Android) / retour haptique (iPhone récent, via interrupteur natif) ---
const hl=document.createElement('label');hl.setAttribute('aria-hidden','true');hl.style.cssText='position:fixed;left:-200px;top:0;opacity:0;pointer-events:none';hl.innerHTML='<input type="checkbox" switch tabindex="-1">';document.body.appendChild(hl);
window.hap=function(){try{if(navigator.vibrate)navigator.vibrate(10);else hl.click()}catch(e){}};
// --- barre compacte au défilement ---
const cb=$('cbar'),top=document.querySelector('.top');let tk=false;
const TT={t:"Aujourd'hui",p:'Progression',s:'Séances',r:'Réglages'};
window.cbarSync=function(){$('cbt').textContent=TT[view]||'';$('cback').hidden=view!='r';$('cgear').hidden=view=='r';onScroll()};
function onScroll(){if(tk)return;tk=true;requestAnimationFrame(()=>{tk=false;const lim=top.offsetHeight-cb.offsetHeight+4;cb.classList.toggle('show',scrollY>Math.max(8,lim))})}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});
$('cgear').onclick=()=>$('gear').click();$('cback').onclick=()=>$('back').click();
cbarSync();
// --- feuilles : poignée, glisser pour fermer, toucher le fond pour fermer ---
const CLOSE={rapsheet:'rapx',mussheet:'musok',sheet:'no',psheet:'pno',msheet:'mno',bsheet:'bno',dsheet:'dno',prsheet:'prok',lxsheet:'lxok'};
const locked=s=>s.id=='live'||s.id=='wsheet'||(s.id=='osheet'&&!PF.ob);
function closeSheet(s){const p=s.querySelector('.panel');s.classList.remove('drag');p.style.transform='';s.style.backgroundColor='';const b=CLOSE[s.id]&&$(CLOSE[s.id]);if(b)b.click();else s.classList.remove('open')}
document.querySelectorAll('.sheet').forEach(s=>{const p=s.querySelector('.panel');if(!p)return;let g=null;
s.addEventListener('click',e=>{if(e.target===s&&!locked(s))closeSheet(s)});
p.addEventListener('touchstart',e=>{if(locked(s)||e.target.closest('input,textarea,select,.cats,.chips'))return;const sc=e.target.closest('.bt,#bkl')||p;if(sc.scrollTop>0||p.scrollTop>0)return;const t=e.touches[0];g={y:t.clientY,x:t.clientX,t:Date.now(),dy:0,on:false,h:p.offsetHeight}},{passive:true});
p.addEventListener('touchmove',e=>{if(!g)return;const t=e.touches[0],dy=t.clientY-g.y,dx=t.clientX-g.x;
if(!g.on){if(dy>8&&dy>Math.abs(dx)){g.on=true;s.classList.add('drag')}else if(Math.abs(dx)>8||dy<-8){g=null;return}else return}
e.preventDefault();const y=dy<0?dy*.2:dy;g.dy=dy;p.style.transform=`translateY(${y}px)`;s.style.backgroundColor=`rgba(20,22,26,${(.45*Math.max(0,1-dy/g.h)).toFixed(3)})`},{passive:false});
p.addEventListener('touchend',()=>{if(!g)return;const o=g;g=null;if(!o.on)return;const v=o.dy/Math.max(1,Date.now()-o.t);
if(o.dy>o.h*.28||v>.55){closeSheet(s)}else{s.classList.remove('drag');p.style.transform='';s.style.backgroundColor=''}});
p.addEventListener('touchcancel',()=>{if(g){g=null;s.classList.remove('drag');p.style.transform='';s.style.backgroundColor=''}})});
// --- retour par glissement depuis le bord gauche (page Réglages) ---
let ed=null;const app=document.querySelector('.app');
document.addEventListener('touchstart',e=>{if(view!='r'||document.querySelector('.sheet.open'))return;const t=e.touches[0];if(t.clientX>24)return;ed={x:t.clientX,y:t.clientY,t:Date.now(),dx:0,on:false}},{passive:true});
document.addEventListener('touchmove',e=>{if(!ed)return;const t=e.touches[0],dx=t.clientX-ed.x,dy=t.clientY-ed.y;if(!ed.on){if(dx>10&&dx>Math.abs(dy)){ed.on=true;app.style.transition='none'}else if(Math.abs(dy)>10){ed=null;return}else return}
e.preventDefault();ed.dx=Math.max(0,dx);app.style.transform=`translateX(${ed.dx}px)`;app.style.opacity=String(1-ed.dx/(innerWidth*1.6))},{passive:false});
document.addEventListener('touchend',()=>{if(!ed)return;const o=ed;ed=null;if(!o.on)return;const v=o.dx/Math.max(1,Date.now()-o.t);app.style.transition='transform 240ms var(--ease-out),opacity 240ms var(--ease-out)';
if(o.dx>innerWidth*.3||v>.5){app.style.transform=`translateX(${innerWidth}px)`;app.style.opacity='0';setTimeout(()=>{app.style.transition='none';app.style.transform='';app.style.opacity='';$('back').click();hap()},230)}else{app.style.transform='';app.style.opacity=''}});
// --- appui long sur + / − : répétition ---
let LP=null,LPd=null;
const stopLP=()=>{if(!LP)return;clearTimeout(LP.t);if(LP.n){LPd=1;setTimeout(()=>LPd=null,450)}LP=null};
document.addEventListener('pointerdown',e=>{const b=e.target.closest('.st button');if(!b)return;const box=b.closest('[id]'),q='button'+[...b.attributes].filter(a=>a.name.startsWith('data-')).map(a=>`[${a.name}="${a.value}"]`).join('');if(q=='button'||!box)return;
LP={n:0,x:e.clientX,y:e.clientY,t:setTimeout(function rep(){const x=box.querySelector(q);if(!x){stopLP();return}LPd=null;x.click();if(!LP)return;LP.n++;if(LP.n%4==1)hap();LP.t=setTimeout(rep,LP.n<6?120:60)},420)}},{passive:true});
document.addEventListener('pointermove',e=>{if(LP&&Math.hypot(e.clientX-LP.x,e.clientY-LP.y)>12)stopLP()},{passive:true});
['pointerup','pointercancel'].forEach(t=>document.addEventListener(t,stopLP,{passive:true}));
document.addEventListener('click',e=>{if(LPd&&e.isTrusted&&e.target.closest('.st button')){LPd=null;e.stopPropagation();e.preventDefault()}},true);
// --- champs numériques : tout sélectionner, « OK » ferme le clavier ---
document.addEventListener('focusin',e=>{const t=e.target;if(t.matches('.setr input,input.num'))setTimeout(()=>{try{t.select()}catch(x){}},0)});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.matches('.setr input,input.num'))e.target.blur()});
// --- séance en direct : glisser pour changer d'exercice ---
const lp=$('lp');let sw=null;
lp.addEventListener('touchstart',e=>{if(!L||L.sum||L.rp||L.ad||e.target.closest('input,textarea,select,.cats'))return;const t=e.touches[0];sw={x:t.clientX,y:t.clientY,t:Date.now()}},{passive:true});
lp.addEventListener('touchend',e=>{if(!sw||!L)return;const t=e.changedTouches[0],dx=t.clientX-sw.x,dy=t.clientY-sw.y,dt=Date.now()-sw.t;sw=null;
if(Math.abs(dx)<70||Math.abs(dx)<2*Math.abs(dy)||dt>700)return;const ni=L.i+(dx<0?1:-1);if(ni<0||ni>=L.it.length)return;
stF();L.i=ni;loadF();liveR();hap();try{lp.animate([{transform:`translateX(${dx<0?28:-28}px)`,opacity:.3},{transform:'none',opacity:1}],{duration:230,easing:'cubic-bezier(.23,1,.32,1)'})}catch(x){}},{passive:true});
// --- Séances : glisser une ligne vers la gauche ---
const ss=$('sess');let RS=null,RO=null;const W=148;
const closeRow=w=>{if(!w)return;w.classList.remove('swo');w.style.setProperty('--sx','0px');if(RO==w)RO=null};
const acts=w=>{if(w.querySelector('.swa'))return;const e=w.querySelector('.ed');w.insertAdjacentHTML('beforeend',`<div class="swa"><button class="swe" data-e="${e.dataset.e}" data-ed="${e.dataset.ed}">Modifier</button><button class="swx" data-swk="${e.dataset.e}" data-swd="${e.dataset.ed}">Supprimer</button></div>`)};
ss.addEventListener('touchstart',e=>{const w=e.target.closest('.exw');if(RO&&RO!=w)closeRow(RO);if(!w||!w.querySelector('.ed')||e.target.closest('.swa'))return;const t=e.touches[0];RS={w,x:t.clientX,y:t.clientY,dx:0,on:false,b:w.classList.contains('swo')?-W:0}},{passive:true});
ss.addEventListener('touchmove',e=>{if(!RS)return;const t=e.touches[0],dx=t.clientX-RS.x,dy=t.clientY-RS.y;
if(!RS.on){if(Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)*1.3){RS.on=true;acts(RS.w);RS.w.classList.add('swd')}else if(Math.abs(dy)>10){RS=null;return}else return}
e.preventDefault();let x=RS.b+dx;if(x>0)x*=.2;if(x<-W)x=-W+(x+W)*.2;RS.dx=x;RS.w.style.setProperty('--sx',x+'px')},{passive:false});
ss.addEventListener('touchend',()=>{if(!RS)return;const o=RS;RS=null;o.w.classList.remove('swd');if(!o.on)return;if(o.dx<-56){o.w.classList.add('swo');o.w.style.setProperty('--sx',-W+'px');RO=o.w;hap()}else closeRow(o.w)});
ss.addEventListener('click',e=>{const x=e.target.closest('[data-swk]');if(x){e.stopPropagation();swDel(x.dataset.swk,x.dataset.swd);return}
if(RO&&!e.target.closest('.swa')){e.stopPropagation();e.preventDefault();closeRow(RO)}},true);
document.addEventListener('touchstart',e=>{if(RO&&!RO.contains(e.target))closeRow(RO)},{passive:true});
window.swDel=function(k,d){const j=snap(),o=D[k];if(!o)return;o.s=o.s.filter(p=>p[0]!=d);
if(!o.s.length){if(Object.keys(D).length<2){restore(j);toast('Impossible de supprimer la dernière perf');return}delete D[k]}
if(!Object.values(D).some(e=>e.s.some(p=>p[0]==d))&&!(XS.d&&XS.d[d]&&XS.d[d].c)){delete SE[d];delete NT[d]}
if(!D[sel[0]])sel=[Object.keys(D)[0]];pick=null;save();render();toast('Perf supprimée',j)};
// --- bannière : glisser vers le haut pour fermer ---
const ts=$('toast');let tg=null;
ts.addEventListener('touchstart',e=>{tg={y:e.touches[0].clientY,dy:0}},{passive:true});
ts.addEventListener('touchmove',e=>{if(!tg)return;tg.dy=Math.min(0,e.touches[0].clientY-tg.y);ts.style.transform=`translate(-50%,${tg.dy}px)`},{passive:true});
ts.addEventListener('touchend',()=>{if(!tg)return;const d=tg.dy;tg=null;ts.style.transform='';if(d<-24)ts.style.display='none'});
})();
