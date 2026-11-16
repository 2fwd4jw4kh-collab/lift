// --- Réglages : page à part ouverte par le rouage ---
var PV=window.PV||'t';const VER='3.0';let wq=0;
function hdr(){const r=view=='r';$('back').hidden=!r;$('gear').hidden=r;$('mo').hidden=r;$('hi').textContent=r?'Réglages':greet()}
const srow=(k,l,v,al)=>`<button class="srow" data-r="${k}"><span>${l}</span>${v!=null?`<em${al?' class="al"':''}>${v}</em>`:''}<i>›</i></button>`;
function setR(){const el=$('v-r');if(!el)return;const bkOld=!BK||Date.now()-BK>12096e5,
acc=typeof SU!='undefined'&&SU?(cst==2||sy==2?'Synchro en échec':esc(SU.email||'Connecté')):'Sans compte',accAl=typeof SU!='undefined'&&SU&&(cst==2||sy==2);
el.innerHTML=`<div class="sg"><div class="sgt">Profil</div><div class="sl">
<label class="srow"><span>Prénom</span><input id="rpn" maxlength="20" placeholder="Facultatif" autocomplete="given-name" value="${esc(PF.n||'')}"></label>
<div class="srow"><span>Objectif par semaine</span><div class="st"><button data-rg="-1" aria-label="Moins">−</button><b>${G()}</b><button data-rg="1" aria-label="Plus">+</button></div></div></div></div>
<div class="sg"><div class="sgt">Programme</div><div class="sl">${srow('obj','Objectif',OBJS()[XS.o||'masse'].n)}${srow('ed','Modifier le programme')}</div></div>
<div class="sg"><div class="sgt">Compte et données</div><div class="sl">${srow('acc','Compte et synchronisation',acc,accAl)}${srow('bk','Sauvegarde',BK?'Copie du '+new Date(BK).toLocaleDateString('fr-FR',{day:'numeric',month:'short'}):'Jamais faite',bkOld)}${srow('csv','Exporter en tableur (CSV)')}${srow('imp','Importer depuis Hevy ou Strong')}</div></div>
<div class="sg"><div class="sgt">Rappels et partage</div><div class="sl">${srow('rap','Rappels dans mon agenda',PF.rap?PF.rap.d.length+' jour'+(PF.rap.d.length>1?'s':'')+' · '+PF.rap.h:'Non')}${srow('share','Inviter un ami sur Lift')}</div></div>
<div class="sg" id="lexique"><div class="sgt">Aide et lexique</div><div class="sl">${Object.values(LX()).map(([t,d])=>`<div class="shp"><b>${t}.</b> ${d}</div>`).join('')}
<div class="shp"><b>Installer Lift.</b> iPhone : Partager › Sur l'écran d'accueil. Android : menu ⋮ › Installer l'application.</div>
${srow('onb','Revoir le tutoriel')}</div></div>
<div class="sg"><div class="sgt">À propos</div><div class="sl">${srow('priv','Confidentialité')}<a class="srow" href="mailto:lift.trainingapp.contact@gmail.com"><span>Contact</span><em>lift.trainingapp.contact@gmail.com</em><i>›</i></a><div class="srow"><span>Version</span><em>${VER}</em></div><div class="shp">Dessins des mouvements : <a href="https://github.com/everkinetic/data" target="_blank" rel="noopener">Everkinetic</a> et <a href="https://github.com/bryllim/workout-guide" target="_blank" rel="noopener">Workout Guide</a> (Bryl Lim), licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr" target="_blank" rel="noopener">CC BY-SA 4.0</a>, recolorés et compressés pour Lift. Silhouettes des muscles : Lift.</div></div></div>
<div class="sg danger"><div class="sgt">Zone sensible</div><div class="sl">${typeof SU!='undefined'&&SU?srow('acc','Supprimer mon compte'):''}
<button class="srow" data-r="wipe"><span>${wq?'Confirmer : tout effacer sur cet appareil':'Effacer les données de cet appareil'}</span><small>${wq?'Dernière étape. Séances, programme et réglages de ce téléphone seront supprimés.'+(SU?' Ton compte en ligne n\'est pas touché.':' Sans sauvegarde, ce sera définitif.'):'Demande une confirmation.'}</small></button></div></div>
<div class="sver">Lift ${VER} · Tes données restent sur cet appareil${typeof SU!='undefined'&&SU?' et sur ton compte':''}</div>`}
$('gear').onclick=()=>{wq=0;go('r')};$('back').onclick=()=>{wq=0;go(PV||'t')};
$('v-r').addEventListener('input',e=>{if(e.target.id=='rpn'){PF.n=e.target.value.trim();pfS();try{cpush()}catch(x){}}});
$('v-r').addEventListener('click',e=>{const b=e.target.closest('[data-r],[data-rg]');if(!b)return;
if(b.dataset.rg){PF.g=Math.min(7,Math.max(1,G()+ +b.dataset.rg));pfS();try{cpush()}catch(x){}render();setR();return}
const r=b.dataset.r;if(r!='wipe'&&wq){wq=0}
if(r=='ed')openEd();else if(r=='onb')openOnb(1);else if(r=='obj')openObj();else if(r=='csv')csvOut();else if(r=='imp')$('dhvf').click();else if(r=='rap')openRap();else if(r=='share')shareLift();else if(r=='priv')$('prsheet').classList.add('open');
else if(r=='acc')$('data').click();else if(r=='bk'){$('data').click();setTimeout(()=>{const t=$('dmut');t&&t.scrollIntoView({block:'start',behavior:'smooth'})},360)}
else if(r=='wipe'){if(!wq){wq=1;setR();return}try{Object.keys(localStorage).filter(k=>k.startsWith('lift-')).forEach(k=>localStorage.removeItem(k))}catch(x){}location.reload()}});
// pastille d'alerte : reprend l'état de l'ancien bouton « Données »
const gsync=()=>{$('gear').classList.toggle('warn',$('data').classList.contains('warn')||(typeof SU!='undefined'&&!!SU&&(cst==2||sy==2)));if(view=='r'&&!document.activeElement?.matches('#rpn'))setR()};
new MutationObserver(gsync).observe($('data'),{attributes:true,attributeFilter:['class']});
document.querySelectorAll('.sheet').forEach(x=>new MutationObserver(()=>{if(!x.classList.contains('open')&&view=='r'&&!document.activeElement?.matches('#rpn'))setR()}).observe(x,{attributes:true,attributeFilter:['class']}));
gsync();hdr();
