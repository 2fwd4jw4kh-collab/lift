// Lift · Séance en direct : déroulé, séries, repos, ajout et cardio, ressenti, enregistrement
// Fonctions chargées avant js/app.js (qui contient l'état et le démarrage).

function openPick(){const ks=Object.keys(PLAN);$('plist').innerHTML=(ks.length?ks.map(c=>{const P=PLAN[c],ds=Object.keys(SE).filter(d=>SE[d]==c).sort(),l=ds.at(-1);return`<button class="row" data-c="${c}"><div class="grow"><div class="nm">Séance ${c} · ${esc(P.t)}</div><div class="gp">${P.ex.length} exercice${P.ex.length>1?'s':''} · ~${estM(P)} min${l?' · dernière fois '+dl(l):''}</div><div class="gp" style="margin-top:4px">${P.ex.map(e=>esc(e.sn)).join(' · ')}</div></div><b>▶</b></button>`}).join(''):'<div class="gp" style="margin:8px 0">Aucune séance dans ton programme pour l\'instant.</div>')+'<button class="ghost" data-pe="1">Modifier le programme</button>';$('psheet').classList.add('open')}

function startLive(c){const P=PLAN[c];if(!P||!P.ex.length){toast("Cette séance n'a pas encore d'exercice");return}
LD=null;L={d:TD,lab:c,t:P.t,i:0,t0:Date.now(),it:P.ex.map(e=>{const o=D[e.k],p=o&&o.s.at(-1),fr=p&&p[0]>PS,st=mkSt(fr?p[1]:(e.w||(p?p[1]:0)),e.lo,fr&&p[3]?p[3]:e.s);if(fr)st.forEach((x,i)=>{x.r=(p[5]&&p[5][i])||p[2]||e.lo;if(p[6]&&p[6][i]!=null)x.w=p[6][i]});if(e.c){const lc=cLast(e.n);return{k:e.k,e,st:[],cm:lc?lc.m:e.min,ci:lc?lc.i:e.int,ok:false}}return{k:e.k,e,st,x:fr&&p[4]!=null?p[4]:e.rh,ok:false}}),sum:false,rp:false};lq=false;rest=0;wlOn();loadF();$('live').classList.add('open');liveR();clearInterval(tmr);tmr=setInterval(tick,500)}

function tick(){if(!L)return;lsave();const e=Date.now()-L.t0,a=$('lt'),b=$('rt'),w=$('wl');if(w)w.innerHTML=WL?'<svg class="wli" viewBox="0 0 24 24" role="img" aria-label="Écran maintenu allumé"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'';if(a)a.textContent=Math.floor(e/6e4)+':'+String(Math.floor(e/1e3)%60).padStart(2,'0');
if(b&&rest){const r=Math.ceil((rest-Date.now())/1e3);if(r<=0){b.textContent='Go !';rest=0;(navigator.vibrate?navigator.vibrate(300):window.hap&&(hap(),setTimeout(hap,160)))}else b.textContent=Math.floor(r/60)+':'+String(r%60).padStart(2,'0')}}

function liveHd(){return`<div class="lh"><span class="pill sb">${LB(L.lab)} · ${esc(L.t||(PLAN[L.lab]||{}).t||'')}</span><span><b id="lt">0:00</b> <span id="wl"></span></span><button class="x" data-a="close">✕</button></div>`}

function liveNav(){return`<div class="cats" style="padding:0 0 10px">${L.it.map((t,i)=>{const cur=i==L.i;return`<button data-go="${i}" class="${cur?'on':''}" style="${t.ok&&!cur?'box-shadow:inset 0 0 0 1px #14161A;color:#14161A':''}">${t.ok?'✓':i+1}</button>`}).join('')}</div>`}

function setRows(t){return t.st.map((x,i)=>`<div class="setr${x.d?' dn':''}"><span>${i+1}</span><label><input type="text" inputmode="decimal" data-sw="${i}" value="${x.w}" enterkeyhint="done" aria-label="${t.e.bw?'Lest':'Poids'} de la série ${i+1}">${t.e.bw?'lest':'kg'}</label><label><input type="text" inputmode="numeric" data-sp="${i}" value="${x.r}" enterkeyhint="done" aria-label="${t.e.tm?'Secondes':'Répétitions'} de la série ${i+1}">${t.e.tm?'s':'reps'}</label><button class="ck" data-sk="${i}" aria-label="Valider la série ${i+1}">✓</button></div>`).join('')+`<div class="fr" style="border:0;gap:8px;padding:8px 0 0;justify-content:flex-start"><button class="mini" style="float:none" data-sx="1">+ série</button><button class="mini" style="float:none" data-sx="-1">− série</button></div>`}

function setTick(i){const t=L.it[L.i],x=t.st[i];if(!x)return;x.d=!x.d;if(x.d&&window.hap)hap();if(x.d){const sc=rsec(t.e&&t.e.rest);if(ra&&sc)rest=Date.now()+sc*1000;if(t.st.every(y=>y.d))t.ok=true}else t.ok=false;liveR()}

function setAdd(n){const t=L.it[L.i];if(n>0&&t.st.length<12){const l=t.st.at(-1);t.st.push({w:l.w,r:l.r,d:false});t.ok=false}else if(n<0&&t.st.length>1)t.st.pop();liveR()}

function liveR(){if(L.sum)return liveS();if(L.rp)return liveRp();if(L.ad)return liveAdd();if(L.it[L.i]&&L.it[L.i].e.c)return liveC();
const t=L.it[L.i],e=t.e,o=D[t.k],p=o&&o.s.at(-1),sg=fbSug(t)||bwSug(t)||psug(t),dn=L.it.filter(x=>x.ok).length,col=GC[e.g]||'#9E2F21',rr=e.rl==e.rh?e.rl:e.rl+'-'+e.rh,nd=t.st.filter(x=>x.d).length;
$('lp').innerHTML=liveHd()+liveNav()+`<div class="mut">Exercice ${L.i+1} / ${L.it.length} · <em class="gd" style="background:${col};margin:0 5px 0 2px"></em>${e.g}</div><h3 style="margin:2px 0 4px">${esc(e.n)}</h3>${t.repl?`<div class="gp" style="margin:0 0 4px">Remplace : ${esc(t.repl)}</div>`:''}
<div class="lobj">${e.s} × ${e.lo}-${e.hi} ${e.tm?'s':'reps'} · RIR ${rr} · repos ${e.rest}</div><div class="lsug">${sg}</div>
<div class="lset">Séries · ${nd}/${t.st.length} faite${nd>1?'s':''}<span>le repos démarre à chaque coche</span></div>
${setRows(t)}<div class="fr"><span>RIR (dernière série) ${lxq('rir')}</span><div class="rirs">${rh()}</div></div>
<div class="fr"><span>Repos <b id="rt">–</b> <button class="x" data-a="ra" style="font-size:12px;padding:2px 6px">auto ${ra?'✓':'✗'}</button></span><div class="cats" style="padding:0"><button data-rs="60">1'</button><button data-rs="90">1'30</button><button data-rs="120">2'</button><button data-rs="150">2'30</button></div></div>
<button class="cta" data-a="ok">${t.ok?'Exercice suivant →':'Valider l\'exercice'}</button>
<div class="fr" style="border:0;gap:8px"><button class="ghost" data-a="prev">← Précédent</button><button class="ghost" data-a="next">Passer →</button></div>
<div class="fr" style="border:0;gap:8px;padding-top:0"><button class="ghost" data-a="ad">+ Ajouter un exercice</button><button class="ghost" data-a="rp">Remplacer</button></div>
<button class="ghost" data-a="save">Terminer : voir le résumé (${dn} fait${dn>1?'s':''} sur ${L.it.length})</button><div class="lmore"><div class="gp">${p?`Dernière fois : ${f1(p[1])} kg × ${rtx(p)} · ${p[3]??'–'} séries · RIR ${R(p[4])}`:'Première fois sur cet exercice'}</div>${orm(t,p)}${e.ss?`<div class="gp">${esc(e.ss)}</div>`:''}${musCard(t.k,e.n,e.g)}</div>`;tick()}

function liveS(){const dn=L.it.filter(x=>x.ok),sk=L.it.length-dn.length;
$('lp').innerHTML=liveHd()+`<h3 style="margin:6px 0 2px">Résumé de la séance</h3><div class="gp">${dn.length} exercice${dn.length>1?'s':''} fait${dn.length>1?'s':''} sur ${L.it.length}${sk?' · '+sk+' non fait'+(sk>1?'s':'')+' (non enregistré'+(sk>1?'s':'')+')':''}</div><div style="margin:10px 0">`+
L.it.map((t,i)=>{if(t.e.c)return cSum(t,i);const p=perfOf(t,'');return`<button class="ex" data-go="${i}" style="width:100%"><span>${esc(t.e.n)}${t.repl?`<i>Remplace : ${esc(t.repl)}</i>`:''}<i>${t.e.g}</i></span><b style="color:${t.ok?'#14161A':'#646A71'}">${t.ok?`${f1(p[1])} kg · ${p[5]?p[5].join('/'):p[3]+'×'+p[2]} · RIR ${R(t.x)}`:'Non fait'}</b></button>`}).join('')+
`</div>${sk?'<div class="tip2">Touche un exercice pour y revenir avant d\'enregistrer.</div>':''}${fbBlock()}<button class="cta" data-a="conf">Enregistrer la séance</button><button class="ghost" data-a="back">Revenir à la séance</button>`;tick()}

function liveRp(){const t=L.it[L.i],used=new Set(L.it.map(x=>x.k)),c={};
Object.keys(D).forEach(k=>{if(D[k].g==t.e.g&&!used.has(k))c[k]=D[k].n});
Object.values(PLAN).forEach(P=>P.ex.forEach(e=>{if(e.g==t.e.g&&!used.has(e.k)&&!c[e.k])c[e.k]=e.n}));const ks=Object.keys(c);
$('lp').innerHTML=liveHd()+`<h3 style="margin:6px 0 2px">Remplacer l'exercice</h3><div class="gp">${t.e.n} · ${t.e.g}. Machine prise ? Choisis un équivalent : les séries et reps visées restent les mêmes.</div><div style="margin:10px 0">`+
(ks.length?ks.map(k=>{const q=D[k]&&D[k].s.at(-1);return`<button class="ex" data-rk="${k}" style="width:100%"><span>${c[k]}</span><b>${q?f1(q[1])+' kg':'Jamais fait'}</b></button>`}).join(''):'<div class="gp">Aucun autre exercice de ce groupe dans ton historique.</div>')+
`</div><div class="fr" style="border:0"><input id="rnm" maxlength="40" placeholder="Autre exercice (nom)" style="flex:1;min-width:0;background:var(--bg);border:1px solid var(--line);color:var(--tx);border-radius:12px;padding:11px 12px;font:inherit;outline:0"><button class="mini" style="float:none;margin-left:8px" data-rk="__new">Utiliser</button></div><button class="ghost" data-a="rpx">Annuler</button>`;tick()}

function doRepl(k2){const t=L.it[L.i],o=t.e,used=new Set(L.it.map(x=>x.k));let e2=null,raw='';
if(k2=='__new'){raw=$('rnm').value.trim();if(!raw){$('rnm').focus();return}const m=Object.keys(D).find(k=>D[k].n.toLowerCase()==raw.toLowerCase());k2=m||('x'+Date.now())}
if(used.has(k2)){toast('Cet exercice est déjà dans la séance');return}
Object.values(PLAN).forEach(P=>P.ex.forEach(e=>{if(e.k==k2&&!e2)e2=e}));
if(!e2){const nm=D[k2]?D[k2].n:esc(raw);e2=Object.assign({},o,{k:k2,n:nm,sn:D[k2]?D[k2].sn:(raw.length>16?esc(raw.slice(0,15))+'…':nm),ss:''})}
const q=D[k2]&&D[k2].s.at(-1);t.repl=t.repl||o.n;t.k=k2;t.e=e2;t.st=mkSt(q?q[1]:(e2.w||0),q&&q[2]?q[2]:e2.lo,t.st.length);t.x=q&&q[4]!=null?q[4]:e2.rh;t.ok=false;L.rp=false;loadF();liveR();toast('Remplacé par '+e2.n)}

function liveAct(b){const a=b.dataset.a,r=b.dataset.rs;if(r){rest=Date.now()+r*1000;tick();return}
if(b.dataset.go!==undefined){stF();L.i=+b.dataset.go;L.sum=false;L.rp=false;loadF();liveR();return}
if(b.dataset.rk){doRepl(b.dataset.rk);return}if(cAct(b))return;
if(a=='ok'){stF();window.hap&&hap();const t0=L.it[L.i],was=t0.ok;if(!t0.st.some(x=>x.d))t0.st.forEach(x=>{x.d=true});t0.ok=true;const sc=rsec(t0.e&&t0.e.rest);if(!was&&ra&&sc)rest=Date.now()+sc*1000;let nx=L.it.findIndex((x,i)=>i>L.i&&!x.ok);if(nx<0)nx=L.it.findIndex(x=>!x.ok);if(nx>=0){L.i=nx;loadF()}else L.sum=true;liveR()}
else if(a=='prev'){stF();if(L.i>0)L.i--;loadF();liveR()}
else if(a=='next'){stF();if(L.i<L.it.length-1)L.i++;loadF();liveR()}
else if(a=='rp'){stF();L.rp=true;liveR()}
else if(a=='rpx'){L.rp=false;liveR()}
else if(a=='save'){stF();L.sum=true;liveR()}
else if(a=='back'){L.sum=false;loadF();liveR()}
else if(a=='conf')saveLive();
else if(a=='ra'){ra=!ra;try{localStorage.setItem('lift-ra',ra?1:0)}catch(e){}liveR()}
else if(a=='close'){if(L.it.some(x=>x.ok)&&!lq){lq=true;toast('Appuie encore sur ✕ pour quitter sans enregistrer');return}endLive()}}

function endLive(){wlOff();L=null;ldClear();clearInterval(tmr);$('live').classList.remove('open')}

function saveLive(){stF();const dn=L.it.filter(x=>x.ok);if(!dn.length){toast('Valide au moins un exercice');return}const j=snap();
dn.forEach(t=>{if(t.e.c)return;if(!D[t.k])D[t.k]={n:t.e.n,sn:t.e.sn,g:t.e.g,s:[]};if(t.e.bw)D[t.k].bw=1;if(t.e.tm)D[t.k].tm=1;const q=D[t.k].s,n=perfOf(t,L.d),i=q.findIndex(p=>p[0]==L.d);i>=0?q[i]=n:q.push(n);q.sort((a,b)=>a[0]<b[0]?-1:1)});
window.hap&&hap();xSave(dn);if(L.lab)SE[L.d]=L.lab;save();endLive();render();toast('Séance enregistrée',j);const c=$('sess').querySelector('.sc');if(c){c.classList.add('new');setTimeout(()=>c.classList.remove('new'),3500)}go('s');if(!SU&&!PF.acp&&new Set(Object.values(D).flatMap(e=>e.s.map(p=>p[0]))).size<=1){PF.acp=1;pfS();setTimeout(()=>{const m=$('wsheet').querySelector('.mut');if(m)m.textContent='Première séance enregistrée ! Un compte (facultatif) la garde à l\'abri et la retrouve sur tous tes appareils.';openWelcome()},1200)}}

function resumeLive(){if(!LD)return;L=JSON.parse(JSON.stringify(LD));LD=null;L.t0=Date.now()-(L.el||0);L.it.forEach(t=>{if(!t.st)t.st=mkSt(t.w||0,t.r||t.e.lo,t.s||t.e.s)});lq=false;rest=0;wlOn();loadF();$('live').classList.add('open');liveR();clearInterval(tmr);tmr=setInterval(tick,500)}

async function wlOn(){try{if(navigator.wakeLock&&!WL){WL=await navigator.wakeLock.request('screen');WL.addEventListener('release',()=>{WL=null})}}catch(e){WL=null}}

function wlOff(){try{WL&&WL.release()}catch(e){}WL=null}

function ck(n){return 'c_'+String(n).toLowerCase().normalize('NFD').replace(/[^a-z]/g,'')}

function INT(){return['Facile','Soutenu','Dur']}

function cLast(n){const d=(XS&&XS.d)||{},ks=Object.keys(d).sort().reverse();for(const k of ks){const c=(d[k].c||[]).find(x=>x.n==n);if(c)return c}return null}

function liveAdd(){const cur=L.it[L.i],g=cur&&!cur.e.c?cur.e.g:null,used=new Set(L.it.map(x=>x.k)),c={};
const ad=(k,n,gg)=>{if(!used.has(k)&&!c[k]&&gg!='Cardio')c[k]={n,g:gg}};
Object.values(PLAN).forEach(P=>P.ex.forEach(e=>ad(e.k,e.n,e.g)));Object.keys(D).forEach(k=>ad(k,D[k].n,D[k].g));
const ks=Object.keys(c).sort((a,b)=>(c[b].g==g)-(c[a].g==g)||CATS.indexOf(c[a].g)-CATS.indexOf(c[b].g)||c[a].n.localeCompare(c[b].n));
let lg='';const list=ks.map(k=>{const q=D[k]&&D[k].s.at(-1),h=c[k].g!=lg?`<div class="gh">${c[k].g}${c[k].g==g?' · même groupe':''}</div>`:'';lg=c[k].g;return h+`<button class="ex" data-ak="${k}"><span>${esc(c[k].n)}</span><b>${q?f1(q[1])+' kg':'Jamais fait'}</b></button>`}).join('');
$('lp').innerHTML=liveHd()+`<h3 style="margin:6px 0 2px">Ajouter un exercice</h3><div class="gp">Il se place juste après l'exercice en cours.</div>
<div class="gh" style="margin-top:14px">Cardio court</div><div class="cats">${['Rameur','Vélo','Tapis','Elliptique','Corde à sauter'].map(m=>`<button data-ak="cardio:${m}">${m}</button>`).join('')}</div>
<div style="margin:4px 0 12px">${list}</div>
<div class="gh">Nouvel exercice</div><input id="anm" class="tx" maxlength="40" placeholder="Nom de l'exercice"><div class="cats">${CATS.map(x=>`<button data-ag="${x}" class="${(L.ag||g||'Pectoraux')==x?'on':''}">${x}</button>`).join('')}</div>
<button class="cta" data-ak="__new">Ajouter cet exercice</button><button class="ghost" data-a="adx">Annuler</button>`;tick()}

function doAdd(k){let e=null;
if(k.startsWith('cardio:')){const m=k.slice(7);e=CX(m,(cLast(m)||{}).m||10,1)}
else if(k=='__new'){const raw=cleanT($('anm').value).slice(0,40);if(!raw){$('anm').focus();return}const m=Object.keys(D).find(x=>D[x].n.toLowerCase()==raw.toLowerCase());if(m)k=m;else{const cur=L.it[L.i];e=XE('x'+Date.now(),raw,raw.length>16?raw.slice(0,15)+'…':raw,L.ag||(cur&&!cur.e.c?cur.e.g:'Pectoraux'),3,[8,12],[1,2],"1 min 30",0,2.5,'')}}
if(!e){Object.values(PLAN).forEach(P=>P.ex.forEach(x=>{if(x.k==k&&!e)e=x}));if(!e&&D[k]){const o=D[k];e=Object.assign(XE(k,o.n,o.sn,o.g,3,[8,12],[1,2],"1 min 30",0,2.5,''),{bw:o.bw,tm:o.tm})}}
if(!e)return;if(L.it.some(x=>x.k==e.k)){toast('Déjà dans la séance');return}
const q=D[e.k]&&D[e.k].s.at(-1),lc=e.c?cLast(e.n):null;
const it=e.c?{k:e.k,e,st:[],cm:lc?lc.m:e.min,ci:lc?lc.i:e.int,ok:false,add:1}:{k:e.k,e,st:mkSt(q?q[1]:(e.w||0),q&&q[2]?q[2]:e.lo,e.s),x:q&&q[4]!=null?q[4]:e.rh,ok:false,add:1};
L.it.splice(L.i+1,0,it);L.ad=false;L.ag=null;L.i++;loadF();liveR();toast(e.n+' ajouté')}

function liveC(){const t=L.it[L.i],I=INT(),lc=cLast(t.e.n);
$('lp').innerHTML=liveHd()+liveNav()+`<div class="mut">Exercice ${L.i+1} / ${L.it.length} · Cardio</div><h3 style="margin:2px 0 8px">${esc(t.e.n)}</h3>${musCard(t.k,t.e.n,'Cardio')}
<div class="gp">${lc?`Dernière fois : ${lc.m} min · ${I[lc.i].toLowerCase()}`:'Première fois sur ce cardio'}</div>
<div class="fr"><span>Durée</span><div class="st"><button data-cm="-1" aria-label="Une minute de moins">−</button><b>${t.cm} min</b><button data-cm="1" aria-label="Une minute de plus">+</button></div></div>
<div class="fr"><span>Intensité</span><div class="cats" style="padding:0">${I.map((x,i)=>`<button data-ci="${i}" class="${t.ci==i?'on':''}">${x}</button>`).join('')}</div></div>
<div class="tip2">Facile : tu peux parler normalement. Soutenu : phrases courtes. Dur : quelques mots seulement.</div>
<button class="cta" data-a="cok">${t.ok?'Exercice suivant →':'Valider'}</button>
<div class="fr" style="border:0;gap:8px"><button class="ghost" data-a="prev">← Précédent</button><button class="ghost" data-a="next">Passer →</button></div>
<div class="fr" style="border:0;gap:8px;padding-top:0"><button class="ghost" data-a="ad">+ Ajouter un exercice</button><button class="ghost" data-a="cdel">Retirer</button></div>
<button class="ghost" data-a="save">Terminer : voir le résumé</button>`;tick()}

function cSum(t,i){return`<button class="ex" data-go="${i}" style="width:100%"><span>${esc(t.e.n)}<i>Cardio</i></span><b style="color:${t.ok?'#14161A':'#646A71'}">${t.ok?t.cm+' min · '+INT()[t.ci].toLowerCase():'Non fait'}</b></button>`}

function cAct(b){const a=b.dataset.a,t=L.it[L.i];
if(b.dataset.ak){doAdd(b.dataset.ak);return true}
if(b.dataset.ag){L.ag=b.dataset.ag;const v=($('anm')||{}).value;liveR();if($('anm')&&v)$('anm').value=v;return true}
if(b.dataset.cm){t.cm=Math.max(1,Math.min(120,(t.cm||5)+ +b.dataset.cm));liveR();return true}
if(b.dataset.ci!==undefined){t.ci=+b.dataset.ci;liveR();return true}
if(b.dataset.fr){L.fb=L.fb||{r:'',t:{}};L.fb.r=L.fb.r==b.dataset.fr?'':b.dataset.fr;liveR();return true}
if(b.dataset.fg){L.fb=L.fb||{r:'',t:{}};const g=b.dataset.fg,id=b.dataset.ft,a2=L.fb.t[g]=L.fb.t[g]||[],i=a2.indexOf(id);i>=0?a2.splice(i,1):a2.push(id);if(!a2.length)delete L.fb.t[g];liveR();return true}
if(a=='ad'){stF();L.ad=true;liveR();$('lp').scrollTop=0;return true}
if(a=='adx'){L.ad=false;liveR();return true}
if(a=='cok'){t.ok=true;let nx=L.it.findIndex((x,i)=>i>L.i&&!x.ok);if(nx<0)nx=L.it.findIndex(x=>!x.ok);if(nx>=0){L.i=nx;loadF()}else L.sum=true;liveR();return true}
if(a=='cdel'){L.it.splice(L.i,1);if(!L.it.length){endLive();return true}if(L.i>=L.it.length)L.i=L.it.length-1;loadF();liveR();return true}
return false}

function FBTAGS(){return[['gene','Gêne articulaire'],['force','Perte de force en fin de série'],['cong','Bonne congestion'],['leger','Charge trop légère'],['lourd','Charge trop lourde']]}

function fbBlock(){L.fb=L.fb||{r:'',t:{}};const gs=[...new Set(L.it.filter(t=>t.ok&&!t.e.c).map(t=>t.e.g))];
return`<div class="gh" style="margin-top:18px">Ressenti de la séance</div><div class="cats">${['Facile','Correct','Dur'].map(x=>`<button data-fr="${x}" class="${L.fb.r==x?'on':''}">${x}</button>`).join('')}</div>`+(gs.length?`<div class="gp" style="margin:8px 0 4px">Coche ce qui s'applique, par groupe. Facultatif : Lift s'en sert pour ajuster ses suggestions.</div>`+gs.map(g=>`<div class="fbg"><b>${g}</b><div class="cats">${FBTAGS().map(([id,l])=>`<button data-fg="${g}" data-ft="${id}" class="${(L.fb.t[g]||[]).includes(id)?'on':''}">${l}</button>`).join('')}</div></div>`).join(''):'')}

function fbSug(t){if(!t||t.e.c||!XS.d)return'';const g=t.e.g,ds=Object.keys(XS.d).filter(d=>XS.d[d].f&&XS.d[d].f.t&&XS.d[d].f.t[g]&&(+dt(TI)-+dt(d))<=21*864e5).sort();if(!ds.length)return'';
const last=XS.d[ds.at(-1)].f.t[g],prev=ds.length>1?XS.d[ds.at(-2)].f.t[g]:[],o=D[t.k],p=o&&o.s.at(-1),gl=g.toLowerCase();
if(last.includes('gene')&&prev.includes('gene'))return`Gêne signalée sur tes 2 dernières séances (${gl}) : allège d'environ 10 % ou remplace l'exercice. Si elle persiste, parles-en à un professionnel de santé.`;
if(last.includes('gene'))return`Gêne signalée la dernière fois (${gl}) : reste prudent, garde la charge ou allège un peu.`;
if(last.includes('leger')&&p&&!t.e.bw)return`Charge jugée trop légère la dernière fois : passe à ${f1(p[1]+(t.e.inc||2.5))} kg.`;
if(last.includes('lourd')&&p)return`Charge jugée trop lourde la dernière fois : garde ${f1(p[1])} kg et vise le bas de la fourchette.`;
if(last.includes('force'))return'Perte de force en fin de série la dernière fois : prends 30 s de repos en plus entre les séries.';return''}

function bwSug(t){if(!t||!t.e.bw)return'';const o=D[t.k],p=o&&o.s.at(-1),u=t.e.tm?'s':'reps';if(p&&p[2]>=t.e.hi)return`Haut de la fourchette atteint (${p[2]} ${u}) : ajoute du lest ou passe à une variante plus dure.`;return`Vise ${t.e.hi} ${u} à RIR ${t.e.rl}+ avant d'ajouter du lest.`}

function orm(t,p){if(XS.o!='force'||!p||!p[1]||!p[2])return'';const e1=p[1]*(1+(p[2]+(p[4]||0))/30);return`<div class="gp" style="margin-top:4px">1RM estimé ${lxq('orm')} : ${f1(Math.round(e1*2)/2)} kg · charge à 85 % : ${f1(Math.round(e1*.85/2.5)*2.5)} kg</div>`}

function xSave(dn){XS.d=XS.d||{};const c=dn.filter(t=>t.e.c).map(t=>({n:t.e.n,m:t.cm,i:t.ci})),x=XS.d[L.d]||{};if(c.length)x.c=c;if(L.fb&&(L.fb.r||Object.keys(L.fb.t||{}).length))x.f=L.fb;if(x.c||x.f)XS.d[L.d]=x}
