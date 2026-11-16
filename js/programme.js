// Lift · Programme, accueil et objectifs : prochaine séance, semaine, tutoriel, rappels
// Fonctions chargées avant js/app.js (qui contient l'état et le démarrage).

function wkstrip(){const el=$('ws');if(!el)return;const t=dt(TI),mon=new Date(+t-((t.getUTCDay()+6)%7)*864e5),ds=new Set([...Object.values(D).flatMap(e=>e.s.map(p=>p[0])),...xDates()]),L7=['L','M','M','J','V','S','D'];let c=0;
const cells=L7.map((l,i)=>{const d=new Date(+mon+i*864e5).toISOString().slice(0,10),on=ds.has(d);if(on)c++;return`<div class="wd${d==TI?' td':''}"><span>${l}</span><b class="${on?'on':''}">${on?(SE[d]&&SE[d]!='Alt'?SE[d]:'•'):''}</b></div>`}).join('');
el.innerHTML=`<div class="card" style="padding:16px"><div class="nm" style="font-size:16px;font-weight:600">Cette semaine</div><div class="wdr">${cells}</div><div class="gp">${c} séance${c>1?'s':''} sur ${G()} visées</div></div>`}

function weekN(){const t=new Date(TI),mon=new Date(+t-((t.getUTCDay()+6)%7)*864e5),ds=new Set();Object.values(D).forEach(e=>e.s.forEach(p=>{const x=dt(p[0]);if(x>=mon&&x<=t)ds.add(p[0])}));xDates().forEach(d=>{const x=dt(d);if(x>=mon&&x<=t)ds.add(d)});return ds.size}

function nxt(){const q=Object.keys(PLAN),ds=Object.keys(SE).filter(d=>q.includes(SE[d])).sort(),l=ds.length?SE[ds.at(-1)]:null;return q[(q.indexOf(l)+1)%q.length]}

function alleg(){if(Date.now()<snz)return'';if(DL.length&&(T0-dt(DL[DL.length-1]))/864e5<21)return'';const all=Object.values(D).flatMap(e=>e.s.map(p=>p[0])).sort(),ref=DL.length?DL[DL.length-1]:all[0];if(!ref)return'';const wn=Math.floor((T0-dt(ref))/(7*864e5)),st=stags();if(wn<6&&st.length<3)return'';
const why=[];if(wn>=6)why.push(wn+' semaines depuis '+(DL.length?"ta dernière semaine d'allègement":'ton premier entraînement'));if(st.length>=3)why.push(st.length+' exercices stagnent ('+st.slice(0,3).map(k=>D[k].sn).join(', ')+')');
return`<div class="nxl"><span><b>Allègement conseillé</b> ${lxq('alg')} · ${why[0]}. Charges −10 %, RIR 3.</span><span class="nxa"><button data-n="dl">C'est fait</button><button data-n="sn">Plus tard</button></span></div>`}

function nx(){const c=nxt(),P=PLAN[c],n=weekN(),g=G();const rs=LD&&!L?`<div class="nx-res" style="border:1px solid var(--acc,#9E2F21);border-radius:14px;padding:12px;margin-bottom:12px"><div class="nx-t">Séance ${LD.lab||''} en cours</div><div class="gp">${LD.it.filter(t=>t.ok).length}/${LD.it.length} exercices validés · ${dl(LD.d)} · non enregistrée</div><div style="display:flex;gap:8px;margin-top:10px"><button class="cta" style="margin:0;flex:2" data-n="res">Continuer la séance</button><button class="ghost" style="margin:0;width:auto;flex:1" data-n="aban">Abandonner</button></div></div>`:'';
$('nx').innerHTML=rs+(P?`<div class="mut">Prochaine séance${XS.o&&XS.o!='masse'?' · '+OBJS()[XS.o].n.toLowerCase():''}</div><div class="nx-t">Séance ${c} · ${esc(P.t)}</div><div class="gp">${P.ex.length} exercice${P.ex.length>1?'s':''} · ~${estM(P)} min</div>
<div style="display:flex;gap:8px;margin-top:12px"><button class="cta" style="margin:0;flex:2" data-n="${c}">▶ Démarrer la séance ${c}</button><button class="ghost" style="margin:0;width:auto;flex:1" data-n="x">Autre…</button></div>`:`<div class="nx-t">Crée ton programme</div><div class="gp">Ajoute tes séances et tes exercices pour pouvoir démarrer.</div>`)+(P?'':`<button class="cta" data-n="pe">Créer mon programme</button>`)+(AI?`<button class="ghost" style="margin:0" data-n="bl">Bilan de la semaine</button>`:'')+alleg()}

function bprompt(){const rows=[];Object.keys(D).forEach(k=>{const q=D[k].s.filter(p=>(T0-dt(p[0]))/864e5<=28);if(q.length)rows.push([D[k].n,D[k].g,q.map(p=>[p[0].slice(5),p[1],p[2],p[3],p[4],...(p[5]?[p[5]]:[])])])});
const g={};Object.values(D).forEach(e=>e.s.forEach(p=>{const a=(T0-dt(p[0]))/864e5;if(a<0||a>=14||!vol(p))return;const o=g[e.g]||(g[e.g]=[0,0]);o[a<7?0:1]+=vol(p)}));
const plan=Object.entries(PLAN).map(([c,P])=>c+' '+P.t+' : '+P.ex.map(e=>e.sn+' '+e.s+'x'+e.lo+'-'+e.hi+' RIR'+e.rl+(e.rl!=e.rh?'-'+e.rh:'')).join('; ')).join('\n');
const lab=Object.keys(SE).filter(d=>(T0-dt(d))/864e5<=28).sort().map(d=>d.slice(5)+'='+SE[d]).join(', ');
return`Tu es un coach de musculation bienveillant et précis. Voici le journal d'entraînement d'un pratiquant (objectif : hypertrophie et esthétique, 3 séances par semaine, programme Haut/Bas/Haut A/B/C). Date du jour : ${TI}.
Format des perfs : [jour-mois, kg, reps (le minimum des séries si elles sont détaillées), nombre de séries, RIR (null = non noté), et éventuellement les reps de chaque série].
Programme cible :
${plan}
Séances des 28 derniers jours : ${lab||'aucune'}.
Perfs des 28 derniers jours par exercice (JSON) : ${JSON.stringify(rows)}
Volume en kg [7 derniers jours, 7 jours précédents] par groupe : ${JSON.stringify(g)}
Exercices du programme actuel sans progression sur les 3 dernières séances : ${stags().map(k=>D[k].n).join(', ')||'aucun'}.
Écris en français, en tutoyant, 180 mots maximum, sans gros titres, un bilan structuré ainsi : 1) ce qui progresse (avec chiffres) ; 2) ce qui stagne ou mérite attention ; 3) trois recommandations concrètes pour la semaine à venir, avec des charges précises à tenter. Aucune supposition médicale. Si les données sont insuffisantes, dis-le simplement.`}

async function bilan(){$('bsheet').classList.add('open');const o=$('btx');o.textContent='Analyse en cours…';let sm=null;try{sm=window.claude&&await claude.use('sample')}catch(e){}
if(!sm){o.textContent="Le bilan utilise Claude : il n'est disponible que dans l'artefact ouvert depuis Claude.";return}
if(bctl)bctl.abort();bctl=new AbortController();
try{const r=await sm(bprompt(),{cache:false,signal:bctl.signal,onText:({text})=>{o.textContent=text}});o.textContent=r.text+(r.truncated?'\n\n(réponse coupée)':'')}
catch(e){if(e&&e.code=='cancelled')return;o.textContent=e&&e.code=='not_granted'?'Autorisation refusée : le bilan a besoin de ta permission.':e&&e.code=='rate_limited'?'Trop de demandes, réessaie dans un moment.':'Le bilan a échoué, réessaie.'}}

function bkw(){const el=$('bkw');if(!el)return;const n=new Set(Object.values(D).flatMap(e=>e.s.map(p=>p[0]))).size,old=!BK||Date.now()-BK>12096e5;if(!n||!old||Date.now()<bsn||(SU&&cst==1)){el.innerHTML='';return}
const dj=BK?Math.floor((Date.now()-BK)/864e5):null;el.innerHTML=`<div class="bkl"><button class="bkg" data-b="go"><b>Sauvegarde à faire</b><span>${n} séance${n>1?'s':''} seulement sur cet appareil${dj==null?'':' · dernière copie il y a '+dj+' j'}</span><i>›</i></button><button class="bkx" data-b="sn" aria-label="Me le rappeler plus tard">✕</button></div>`}

function openEd(){E={v:'l'};edR();$('esheet').classList.add('open')}

function edR(){const el=$('ep');
if(E.v=='l'){const ks=Object.keys(PLAN);el.innerHTML=`<div class="lh"><b>Mon programme</b><button class="x" data-a="close">✕</button></div>`+(ks.length?ks.map(c=>`<button class="row" data-s="${c}"><div class="grow"><div class="nm">Séance ${c} · ${esc(PLAN[c].t)}</div><div class="gp">${PLAN[c].ex.length} exercice${PLAN[c].ex.length>1?'s':''} · ~${estM(PLAN[c])} min</div></div><b>✎</b></button>`).join(''):'<div class="gp" style="margin:8px 0">Aucune séance pour l\'instant : ajoute la première.</div>')+`<button class="cta" data-a="adds">+ Ajouter une séance</button><div class="fr" style="margin-top:8px"><span>Objectif de séances par semaine</span><div class="st"><button data-g="-1">−</button><b>${G()}</b><button data-g="1">+</button></div></div><button class="ghost" data-a="tpl">Repartir d'un modèle…</button><button class="ghost" data-a="close">Fermer</button>`}
else if(E.v=='t'){el.innerHTML=`<div class="lh"><b>Choisir un modèle</b><button class="x" data-a="back">✕</button></div><div class="gp" style="margin-bottom:10px">Le modèle remplace ton programme actuel. Ton historique de séances est conservé.</div>`+Object.keys(TPL).map(k=>`<button class="row${E.q==k?' sel':''}" data-tp="${k}"><div class="grow"><div class="nm">${TPL[k].n}</div><div class="gp">${TPL[k].d}</div></div><b>${E.q==k?'Confirmer':'›'}</b></button>`).join('')+`<button class="ghost" data-a="back">← Retour au programme</button>`}
else if(E.v=='s'){const P=PLAN[E.c];el.innerHTML=`<div class="lh"><b>Séance ${E.c}</b><button class="x" data-a="back">✕</button></div><input class="tx" id="est" maxlength="34" placeholder="Nom de la séance (ex. Haut du corps)" value="${esc(P.t)}">`+(P.ex.length?P.ex.map((e,i)=>`<div class="exw"><button class="ex" data-x="${i}"><span><em class="gd" style="background:${GC[e.g]||'#9E2F21'}"></em>${esc(e.n)}<i>${e.s} × ${e.lo}-${e.hi} · RIR ${e.rl==e.rh?e.rl:e.rl+'-'+e.rh} · repos ${e.rest}</i></span></button><button class="ed" data-up="${i}" aria-label="Monter">↑</button><button class="ed" data-dn="${i}" aria-label="Descendre">↓</button><button class="ed" data-rm="${i}" aria-label="Retirer">✕</button></div>`).join(''):'<div class="gp" style="margin:8px 0">Aucun exercice dans cette séance.</div>')+`<button class="cta" data-a="addx">+ Ajouter un exercice</button><button class="ghost" data-a="dels">${E.q=='del'?'Confirmer la suppression de la séance':'Supprimer cette séance'}</button><button class="ghost" data-a="back">← Retour au programme</button>`}
else{const x=E.x,nm=[...new Set([...Object.values(D).map(e=>e.n),...Object.values(TPL).flatMap(T=>Object.values(T.P).flatMap(P=>P.ex.map(e=>e.n)))])];
el.innerHTML=`<div class="lh"><b>${E.i==null?'Nouvel exercice':'Modifier l\'exercice'}</b><button class="x" data-a="backs">✕</button></div><input class="tx" id="exn" list="exl" maxlength="40" placeholder="Nom de l'exercice" value="${esc(x.n)}"><datalist id="exl">${nm.map(n=>`<option value="${esc(n)}">`).join('')}</datalist><div class="cats">${CATS.map(c=>`<button data-xg="${c}" class="${x.g==c?'on':''}">${c}</button>`).join('')}</div>`+erow('Séries','s',x.s)+erow('Reps minimum','lo',x.lo)+erow('Reps maximum','hi',x.hi)+erow('RIR visé (min)','rl',x.rl)+erow('RIR visé (max)','rh',x.rh)+`<div class="fr"><span>Repos</span><div class="cats" style="padding:0;justify-content:flex-end">${RST.map(r=>`<button data-xr="${r}" class="${x.rest==r?'on':''}">${r.replace(' min','\'')}</button>`).join('')}</div></div><div class="fr"><span>Charge de départ (kg, facultatif)</span><input class="num" type="number" inputmode="decimal" step="any" id="exw" value="${x.w||''}" placeholder="–"></div><div class="fr"><span>Palier d'augmentation</span><div class="cats" style="padding:0">${[1,2,2.5,5].map(v=>`<button data-xi="${v}" class="${x.inc==v?'on':''}">${f1(v)} kg</button>`).join('')}</div></div><button class="cta" data-a="savex">Enregistrer l'exercice</button><button class="ghost" data-a="backs">Annuler</button>`}}

function openRap(){const P=PF.rap||{d:['MO','WE','FR'].slice(0,Math.min(3,G())),h:'18:30'},J=[['MO','L'],['TU','M'],['WE','M'],['TH','J'],['FR','V'],['SA','S'],['SU','D']];RP={d:P.d.slice(),h:P.h};
const draw=()=>{$('rapp').innerHTML=`<h3>Rappels de séance</h3><div class="mut" style="margin-bottom:12px">Lift ajoute tes jours d'entraînement à l'agenda de ton téléphone, avec une alerte. Tu pourras les modifier ou les supprimer depuis l'agenda.</div>
<div class="gh">Jours</div><div class="rjs">${J.map(([c,l])=>`<button data-rj="${c}" class="${RP.d.includes(c)?'on':''}">${l}</button>`).join('')}</div>
<div class="fr"><span>Heure</span><input type="time" id="raph" value="${RP.h}"></div>
<button class="cta" id="rapgo">Ajouter à mon agenda</button><button class="ghost" id="rapx">Annuler</button>`};draw();
$('rapp').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.rj){const i=RP.d.indexOf(b.dataset.rj);i>=0?RP.d.splice(i,1):RP.d.push(b.dataset.rj);RP.h=$('raph').value||RP.h;draw();return}
if(b.id=='rapx'){$('rapsheet').classList.remove('open');return}
if(b.id=='rapgo'){RP.h=$('raph').value||'18:30';if(!RP.d.length){toast('Choisis au moins un jour');return}PF.rap=RP;pfS();icsOut(RP);$('rapsheet').classList.remove('open')}};
$('rapsheet').classList.add('open')}

function icsOut(P){const[hh,mm]=P.h.split(':'),now=new Date(),st=localISO(now).replace(/-/g,''),stamp=new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z',ord=['SU','MO','TU','WE','TH','FR','SA'];
const ev=P.d.map(c=>{const d=new Date();d.setDate(d.getDate()+((ord.indexOf(c)-d.getDay()+7)%7));const ds=localISO(d).replace(/-/g,'');
return['BEGIN:VEVENT','UID:lift-'+c+'-'+st+'@lift','DTSTAMP:'+stamp,'DTSTART:'+ds+'T'+hh+mm+'00','DURATION:PT1H','RRULE:FREQ=WEEKLY;BYDAY='+c,'SUMMARY:Séance Lift','DESCRIPTION:Ouvre Lift et démarre ta séance.','BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Séance Lift','TRIGGER:-PT15M','END:VALARM','END:VEVENT'].join('\r\n')});
const data=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Lift//FR','CALSCALE:GREGORIAN',...ev,'END:VCALENDAR'].join('\r\n');
try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/calendar'}));a.download='lift-rappels.ics';document.body.appendChild(a);a.click();a.remove();toast('Ouvre le fichier pour ajouter les rappels à ton agenda')}catch(e){toast('Impossible de créer le fichier')}}

function greet(){const nm=PF.n||'',n=weekN(),g=G(),ds=[...new Set([...Object.values(D).flatMap(e=>e.s.map(p=>p[0])),...xDates()])].sort(),last=ds.at(-1),c=nxt(),P=PLAN[c];
const day=new Date().toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'}).replace(/^./,x=>x.toUpperCase());
let t;
if(!last)t=nm?'Bienvenue, '+nm:'Bienvenue sur Lift';
else if(last==TI){const pb=Object.keys(D).filter(k=>{const p=D[k].s.find(x=>x[0]==TI);return p&&pr(k,p)}).length;t=(SE[TI]?LB(SE[TI]):'Séance')+' bouclée'+(pb?' · '+pb+' PB':'')}
else{const gap=Math.round((+dt(TI)-+dt(last))/864e5);
if(gap>=5)t=gap+' jours sans séance, on reprend ?';
else if(n>=g)t=nm?'Semaine bouclée, '+nm:'Semaine bouclée';
else if(gap==1&&P)t=(nm?'Repos, '+nm+'. ':'Repos aujourd\'hui. ')+LB(c)+' demain';
else if(g-n==1)t='Encore une séance pour ta semaine';
else if(P)t=nm?nm+', c\'est jour de '+LB(c):'C\'est jour de '+LB(c);
else t=nm?'Salut '+nm:'Salut'}
$('mo').textContent=day+' · '+n+'/'+g+(n>=g?' · objectif atteint':' cette semaine');return t}

function OBJS(){return{masse:{n:'Prise de masse',d:'6 à 12 reps · RIR 1-2 · repos 2 min'},force:{n:'Force pure',d:'1 à 5 reps · charges lourdes · repos 3 à 5 min'},fb:{n:'Full body',d:'Tout le corps à chaque séance · idéal pour débuter'},cardio:{n:'Cardio',d:'Durée et intensité · rameur, vélo, tapis…'},cali:{n:'Calisthénie',d:'Poids du corps · reps ou secondes · lest facultatif'}}}

function CX(n,min,int){return{k:ck(n),n,sn:n.length>16?n.slice(0,15)+'…':n,g:'Cardio',c:1,min,int,s:1,lo:0,hi:0,rl:0,rh:0,rest:'',w:0,inc:0,ss:''}}

function BX(k,n,sn,g,s,rg,rir,rest,tm){return Object.assign(XE(k,n,sn,g,s,rg,rir,rest,0,2.5,''),{bw:1,tm:tm?1:0})}

function objTpl(id){
if(id=='force')return{
A:{t:'Force · bas + poussée',ex:[XE('sq','Squat','Squat','Jambes',5,[3,5],[1,2],"4 min",0,2.5),XE('dc','Développé couché','Dév. couché','Pectoraux',5,[3,5],[1,2],"4 min",0,2.5),XE('rb','Rowing à la barre','Rowing barre','Dos',4,[4,6],[1,2],"3 min",0,2.5)]},
B:{t:'Force · tirage + épaules',ex:[XE('sdt','Soulevé de terre','Soulevé de terre','Dos',4,[2,4],[1,3],"5 min",0,5),XE('dm','Développé militaire','Dév. militaire','Épaules',5,[3,5],[1,2],"3 min",0,2.5),XE('trl','Tractions lestées','Tractions lestées','Dos',4,[3,5],[1,2],"3 min",0,2.5)]},
C:{t:'Force · volume léger',ex:[XE('sq','Squat','Squat','Jambes',3,[4,6],[2,3],"3 min",0,2.5),XE('dc','Développé couché','Dév. couché','Pectoraux',3,[4,6],[2,3],"3 min",0,2.5),XE('rdl','Soulevé de terre roumain','SDT roumain','Jambes',3,[5,6],[2,2],"3 min",0,2.5)]}};
if(id=='cardio')return{A:{t:'Endurance',ex:[CX('Vélo',30,1),CX('Rameur',10,1)]},B:{t:'Fractionné',ex:[CX('Rameur',12,2),CX('Corde à sauter',6,2)]},C:{t:'Récupération active',ex:[CX('Tapis',25,0),CX('Elliptique',15,0)]}};
if(id=='cali')return{
A:{t:'Poussée',ex:[BX('pomp','Pompes','Pompes','Pectoraux',4,[8,15],[1,2],"1 min 30"),BX('dips','Dips','Dips','Pectoraux',3,[6,12],[1,2],"2 min"),BX('ppi','Pompes pieds surélevés','Pompes surélevées','Épaules',3,[8,12],[1,2],"1 min 30"),BX('gain','Gainage planche','Gainage','Abdos',3,[30,60],[1,2],"1 min",1)]},
B:{t:'Tirage',ex:[BX('trac','Tractions','Tractions','Dos',4,[5,10],[1,2],"2 min"),BX('rinv','Rowing inversé','Rowing inversé','Dos',3,[8,12],[1,2],"1 min 30"),BX('chin','Tractions supination','Chin-ups','Bras',3,[5,10],[1,2],"2 min"),BX('susp','Suspension à la barre','Suspension','Dos',3,[20,40],[1,2],"1 min",1)]},
C:{t:'Jambes + abdos',ex:[BX('sqpc','Squat poids du corps','Squat PDC','Jambes',4,[15,25],[1,2],"1 min 30"),BX('fent','Fentes marchées','Fentes','Jambes',3,[10,15],[1,2],"1 min 30"),BX('pist','Pistol squat assisté','Pistol assisté','Jambes',3,[5,8],[1,2],"2 min"),BX('rjs','Relevés de jambes suspendu','Relevés suspendu','Abdos',3,[8,15],[1,2],"1 min 30")]}};
if(id=='fb')return FBT;if(id=='vide')return{};return HBH}

function applyObj(id,fresh){XS.pl=XS.pl||{};if(!fresh)XS.pl[XS.o||'masse']=cp(PLAN);const o=id=='vide'?'masse':id;PLAN=(!fresh&&XS.pl[o])?cp(XS.pl[o]):cp(objTpl(id));XS.o=o;save()}

function objList(sel){const O=OBJS();return Object.keys(O).map(k=>`<button class="row${sel==k?' sel':''}" data-tp="${k}"><div class="grow"><div class="nm">${O[k].n}</div><div class="gp">${O[k].d}</div></div></button>`).join('')}

function openObj(){const cur=XS.o||'masse';$('objp').innerHTML=`<h3>Objectif</h3><div class="mut" style="margin-bottom:12px">Ton programme actuel est gardé : en revenant à cet objectif, tu le retrouves tel quel. Ton historique et tes records ne bougent pas.</div>${objList(cur)}<button class="ghost" data-tp="">Fermer</button>`;$('objsheet').classList.add('open')}

function openOnb(h){OB={h:!!h,s:0,tp:XS.o||'masse'};onbR();$('osheet').classList.add('open')}

function onbR(){const pk=obPick(),N=pk?4:3,s=OB.s,last=s==N-1;
const dots=Array.from({length:N},(_,i)=>`<i class="${i==s?'on':''}"></i>`).join('');
const S=[
`<div class="obv"><img src="icon-192.png" alt="" width="72" height="72" style="border-radius:16px"></div><h3>${OB.h?'Le guide de Lift':'Bienvenue sur Lift'}</h3><p class="obp">Ton carnet de musculation. Tu suis ton programme, tu notes chaque série en quelques secondes, et tu vois ta progression exercice par exercice.</p>`,
`<div class="obv"><div class="obr">${[['0','r0','À fond, impossible d\'en faire une de plus'],['1','r1','Encore 1 rep possible'],['2','r2','Encore 2 reps possibles'],['3+','r3','Assez facile']].map(([n,c,l])=>`<div><span class="rir ${c}">${n}</span>${l}</div>`).join('')}</div></div><h3>Le RIR</h3><p class="obp"><b>Répétitions en réserve</b> : le nombre de reps que tu aurais encore pu faire. Tu fais 8 reps et tu aurais pu en faire 2 de plus : c'est RIR 2. Lift s'en sert pour te dire quand monter la charge.</p>`,
`<div class="obv"><div class="obx"><span>Développé couché</span><b>72,5 kg<em class="pr">PB</em></b></div><div class="obx"><span>Squat</span><b>100 kg<em class="sbt">SB</em></b></div></div><h3>Tes records</h3><p class="obp"><b>PB</b> : record personnel, que tu aies soulevé plus lourd ou fait plus de reps. <b>SB</b> : ta meilleure performance des 8 dernières semaines. Touche un <b>?</b> dans l'appli pour retrouver chaque définition.</p>`,
`<h3>Toi</h3><div class="gh" style="margin-top:12px">Ton prénom</div><input class="tx" id="opn" maxlength="20" placeholder="Prénom (facultatif)" autocomplete="given-name" value="${esc(PF.n||'')}"><div class="gh">Ton objectif</div>${objList(OB.tp)}<button class="ghost" data-tp="vide" style="${OB.tp=='vide'?'color:var(--tx);font-weight:800':''}">${OB.tp=='vide'?'✓ ':''}Je crée mon programme moi-même</button><div class="gp">Lift prépare un programme adapté. Tu pourras le modifier, ou changer d'objectif, dans les réglages.</div>`];
$('op').innerHTML=`<div class="obh"><div class="obd">${dots}</div>${last?'':`<button class="obs" data-o="skip">Passer</button>`}</div>${S[s]}<button class="cta" data-o="next">${last?(OB.h?'Terminer':'Commencer'):'Suivant'}</button>${s?`<button class="ghost" data-o="prev">Retour</button>`:''}`}
