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
