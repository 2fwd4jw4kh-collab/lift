// ===== Lift 3.0 : finitions =====
(function(){
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persisted().then(p=>{if(!p)navigator.storage.persist()})}catch(e){}
$('dcsv').onclick=csvOut;$('dhv').onclick=()=>$('dhvf').click();
$('dhvf').onchange=async e=>{const f=e.target.files[0];e.target.value='';if(!f)return;const j=snap();try{const[ne,np]=importCSV(await f.text());if(!np){toast('Aucune nouvelle séance trouvée dans ce fichier');return}save();render();toast(`Import : ${np} perf${np>1?'s':''} ajoutée${np>1?'s':''}, ${ne} nouvel${ne>1?'s':''} exercice${ne>1?'s':''}`,j)}catch(x){toast('Fichier non reconnu : exporte tes séances en CSV depuis Hevy ou Strong')}};
window.shareLift=async function(){const u=location.origin+location.pathname,t='Lift : mon carnet de muscu, gratuit, sans pub, qui marche hors ligne et propose la bonne charge à chaque série.';
try{if(navigator.share){await navigator.share({title:'Lift',text:t,url:u});return}}catch(e){if(e&&e.name=='AbortError')return}
try{await navigator.clipboard.writeText(t+' '+u);toast('Lien copié : colle-le à ton ami')}catch(e){toast(u)}};
const hi=$('hi'),fit=()=>hi.classList.toggle('long',hi.textContent.length>22);new MutationObserver(fit).observe(hi,{childList:true,characterData:true,subtree:true});fit();
document.addEventListener('visibilitychange',()=>{if(document.hidden)return;if(localISO()!=TI&&!L&&!document.querySelector('.sheet.open'))location.reload()});
const coarse=matchMedia('(pointer:coarse)').matches,tip=(k,m)=>{try{if(!coarse||localStorage.getItem(k))return;localStorage.setItem(k,1);setTimeout(()=>toast(m),700)}catch(e){}};
const sl=window.startLive;if(sl)window.startLive=function(c){sl(c);tip('lift-h1','Astuce : glisse vers la gauche ou la droite pour changer d\'exercice.')};
const g0=window.go;window.go=function(v){g0(v);if(v=='s'&&document.querySelector('#sess .exw .ed'))tip('lift-h2','Astuce : glisse une ligne vers la gauche pour la modifier ou la supprimer.')};
try{const q=new URLSearchParams(location.search);if(q.get('go')=='start'&&PF.ob){history.replaceState(null,'',location.pathname);setTimeout(()=>{const c=nxt();if(PLAN[c]&&!L)startLive(c);else openPick()},400)}}catch(e){}
})();
// ===== Lift 3.1 : avis et statistiques anonymes =====
(function(){
// Donner mon avis : mail pré-rempli
window.giveFeedback=function(){const ua=navigator.userAgent,dev=/iPhone/.test(ua)?'iPhone':/iPad/.test(ua)?'iPad':/Android/.test(ua)?'Android':'Ordinateur',st=matchMedia('(display-mode: standalone)').matches?'installée':'navigateur';
const body=`Ce qui me plaît :\n\n\nCe qui me gêne ou m'a bloqué :\n\n\nUne idée :\n\n\n—\nLift ${VER} · ${dev} · ${st}`;
location.href='mailto:lift.trainingapp.contact@gmail.com?subject='+encodeURIComponent('Mon avis sur Lift')+'&body='+encodeURIComponent(body)};
// Statistiques anonymes : 3 événements, identifiant aléatoire, aucune donnée d'entraînement envoyée
const QK='lift-evq',on=()=>PF.stat!==false;
function aid(){try{let a=localStorage.getItem('lift-aid');if(!a){a=crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c=='x'?r:(r&3|8)).toString(16)});localStorage.setItem('lift-aid',a)}return a}catch(e){return null}}
function flush(){if(!on()||!navigator.onLine)return;let q;try{q=JSON.parse(localStorage.getItem(QK)||'[]')}catch(e){q=[]}if(!q.length)return;
fetch(SB_URL+'/rest/v1/lift_events',{method:'POST',headers:{apikey:SB_KEY,Authorization:'Bearer '+SB_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(q),keepalive:true}).then(r=>{if(r.ok){try{localStorage.setItem(QK,'[]')}catch(e){}}}).catch(()=>{})}
window.track=function(ev){if(!on())return;const a=aid();if(!a)return;try{const q=JSON.parse(localStorage.getItem(QK)||'[]');q.push({aid:a,ev,d:localISO(),v:APPV});localStorage.setItem(QK,JSON.stringify(q.slice(-50)))}catch(e){}flush()};
addEventListener('online',flush);setTimeout(flush,3000);
// fin du tutoriel (nouvel utilisateur)
const os=$('osheet');if(os&&!PF.ob)new MutationObserver(()=>{if(!os.classList.contains('open')&&PF.ob&&!PF.st0){PF.st0=1;pfS();track('start')}}).observe(os,{attributes:true,attributeFilter:['class']});
// séance enregistrée
const sv=window.saveLive;if(sv)window.saveLive=function(){const n0=Object.values(D).reduce((a,e)=>a+e.s.length,0)+xDates().length;const r=sv.apply(this,arguments);const n1=Object.values(D).reduce((a,e)=>a+e.s.length,0)+xDates().length;
if(n1>n0){track('session');const nd=new Set([...Object.values(D).flatMap(e=>e.s.map(p=>p[0])),...xDates()]).size;if(nd==1&&!PF.fs0){PF.fs0=1;pfS();track('first_session')}}return r};
})();
