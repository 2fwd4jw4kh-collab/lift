// Lift · Données : sauvegarde locale, versions, compte et synchronisation, import/export, calcul du 1RM
// Fonctions chargées avant js/app.js (qui contient l'état et le démarrage).

function ldPush(v){if(!DB)return;clearTimeout(lpt);lpt=setTimeout(async()=>{try{await DB.doc('lift/live').set({json:v,upd:Date.now()})}catch(e){}},1200)}

function lsave(){if(!L)return;try{stF()}catch(e){return}const k=JSON.stringify(L,(a,v)=>a=='upd'||a=='el'?undefined:v);if(k==lsig)return;lsig=k;L.upd=Date.now();L.el=Date.now()-L.t0;const j=JSON.stringify(L);try{localStorage.setItem('lift-live',j)}catch(e){}ldPush(j)}

function ldClear(){LD=null;lsig='';try{localStorage.removeItem('lift-live')}catch(e){}if(DB){clearTimeout(lpt);DB.doc('lift/live').set({json:null,upd:Date.now()}).catch(()=>{})}}

async function pullLive(){if(!DB||L)return;try{const r=await DB.doc('lift/live').get(),o=r.exists?r.data():null;if(!o)return;const lu=LD?LD.upd:0;if(o.json&&o.upd>lu){const d=JSON.parse(o.json);if(!ldStale(d)){LD=d;try{localStorage.setItem('lift-live',o.json)}catch(e){}nx()}}else if(!o.json&&o.upd>lu&&LD){LD=null;try{localStorage.removeItem('lift-live')}catch(e){}nx()}}catch(e){}}

function push(){if(!DB)return;clearTimeout(pt);pt=setTimeout(async()=>{try{await DB.doc('lift/state').set({json:snap(),updated:TS});await DB.doc('backups/'+TI).set({json:BKP[TI]||snap(),updated:TS});sy=1}catch(e){sy=2}syncUI()},800)}

async function pull(){if(!DB)return;try{const r=await DB.doc('lift/state').get(),o=r.exists?r.data():null;
if(o&&o.json&&o.updated>TS){const x=mg(JSON.parse(o.json));if(x&&x.D&&Object.keys(x.D).length){D=x.D;SE=x.SE;NT=x.NT;if(x.XS)XS=x.XS;DL=x.DL;TS=o.updated;store();pick=null;if(!D[sel[0]])sel=[Object.keys(D)[0]];render()}}
else if(!o||o.updated<TS){if(FR&&!o){sy=1;syncUI();return}if(!TS)TS=Date.now();await DB.doc('lift/state').set({json:snap(),updated:TS});store()}
sy=1}catch(e){sy=2}syncUI();loadBk();pullLive()}

function renderBk(){const ks=Object.keys(BKP).sort().reverse();$('bkl').innerHTML=ks.length?ks.map(k=>{let n=0;try{n=new Set(Object.values(JSON.parse(BKP[k]).D).flatMap(e=>e.s.map(p=>fx(p[0])))).size}catch(e){}return`<div class="row" style="margin:6px 0"><div class="grow"><div class="nm">${dl(k)}</div><div class="gp">${n} séance${n>1?'s':''}</div></div><button class="mini" style="float:none" data-b="${k}">${bkq==k?'Confirmer':'Restaurer'}</button></div>`}).join(''):'<div class="gp" style="margin-top:6px">Pas encore de version enregistrée.</div>'}

async function loadBk(){if(!DB)return;try{const c=await DB.collection('backups').get(),ids=c.docs.map(d=>d.id).sort();c.docs.forEach(d=>{const x=d.data();if(x&&x.json&&!BKP[d.id])BKP[d.id]=x.json});while(ids.length>30){const id=ids.shift();await DB.doc('backups/'+id).delete();delete BKP[id]}}catch(e){}renderBk()}

function errMsg(e){const m=String(e&&e.message||'').toLowerCase();
if((e&&e.status==429)||m.includes('rate limit')||m.includes('seconds'))return"Trop de demandes : réessaie dans quelques minutes.";
if(m.includes('invalid login'))return'E-mail ou mot de passe incorrect.';
if(m.includes('not confirmed'))return"Adresse pas encore confirmée : clique sur le lien reçu par e-mail, puis reconnecte-toi ici.";
if(m.includes('already registered')||m.includes('already been registered'))return'Un compte existe déjà avec cette adresse : connecte-toi.';
if(m.includes('password')&&(m.includes('least')||m.includes('short')||m.includes('weak')||m.includes('character')))return'Mot de passe trop faible : 8 caractères minimum, avec une minuscule, une majuscule et un chiffre.';
if(m.includes('same')&&m.includes('password'))return"Choisis un mot de passe différent de l'ancien.";
if(m.includes('fetch')||m.includes('network'))return'Pas de connexion internet.';
return'Erreur : '+(e&&e.message||'inconnue')}

async function sbInit(){try{const m=await sbMod();SB=m.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:'lift-auth'}});const r=await SB.auth.getSession();SU=r.data&&r.data.session?r.data.session.user:null;
SB.auth.onAuthStateChange((ev,s)=>{if(ev=='PASSWORD_RECOVERY'){AS={step:'rec'};setTimeout(()=>$('data').click(),0)}const nu=s?s.user:null,ch=(nu&&nu.id)!=(SU&&SU.id);SU=nu;if(ch&&SU)setTimeout(async()=>{await cloudPull();welDone()},0);acUI()});if(SU)cloudPull()}catch(e){SB=null}sbTried=true;acUI()}

function applyRemote(rd,rts){if(!rd||!rd.st)return;const s=mg(cp(rd.st));if(s.P&&typeof s.P=='object')PLAN=s.P;D=s.D;SE=s.SE;NT=s.NT;if(s.XS)XS=s.XS;DL=s.DL;TS=rts;store();
if(rd.pf){if(rd.pf.n!=null)PF.n=rd.pf.n;if(rd.pf.g)PF.g=rd.pf.g;PF.ob=1;pfS();$('osheet').classList.remove('open')}pick=null;cmp=false;if(!D[sel[0]])sel=[Object.keys(D)[0]];render()}

async function cloudPushNow(){clearTimeout(cpt);cpt=null;if(!SB||!SU)return;if(!TS)TS=Date.now();cst=3;acUI();try{const {error}=await SB.from('lift_state').upsert({user_id:SU.id,data:{st:JSON.parse(snap()),pf:{n:PF.n||'',g:G(),ob:1}},updated_at:TS});cst=error?2:1;if(!error)LS=Date.now()}catch(e){cst=2}acUI()}

function cpush(){if(!SB||!SU||!linked())return;clearTimeout(cpt);cpt=setTimeout(cloudPushNow,1500)}

async function cloudPull(){if(!SB||!SU)return;cst=3;acUI();try{const {data,error}=await SB.from('lift_state').select('data,updated_at').eq('user_id',SU.id).maybeSingle();if(error)throw error;
const loc=JSON.parse(snap()),nl=nSess(loc);
if(!data||!data.data){await cloudPushNow();setLinked();return}
const rd=data.data,rts=+data.updated_at||0,nr=nSess(rd.st||{});
if(!linked()){if(!nl){applyRemote(rd,rts);setLinked()}else if(!nr){TS=Date.now();store();await cloudPushNow();setLinked();return}else if(rts==TS){setLinked()}else{askConflict(rd,rts,nr,nl);cst=1;acUI();return}}
else if(rts>TS)applyRemote(rd,rts);else if(rts<TS){await cloudPushNow();return}
cst=1;LS=Date.now()}catch(e){cst=2}acUI()}

function askConflict(rd,rts,nr,nl){CF={rd,rts};$('cfx').innerHTML=`<h3>Quelles données garder ?</h3><div class="mut">Ton compte contient déjà des séances, et cet appareil aussi. Les deux versions sont différentes.</div><button class="cta" data-cf="acc">Garder celles du compte (${nr} séance${nr>1?'s':''})</button><button class="ghost" data-cf="dev">Garder celles de cet appareil (${nl} séance${nl>1?'s':''})</button><div class="gp" style="margin-top:6px">L'autre version sera remplacée. Pense à faire une copie avant si tu as un doute.</div><button class="ghost" data-cf="later">Décider plus tard</button>`;$('csheet').classList.add('open')}

function acUI(){const wo=$('wsheet').classList.contains('open'),el=wo?$('wacc'):$('acc');$(wo?'acc':'wacc').innerHTML='';if(el){let o='';
if(!SB)o=`<div class="gp">${sbTried?'Compte indisponible pour le moment (pas de connexion internet ?).':'Chargement…'}</div>`;
else if(SU&&AS.step!='rec'&&AS.step!='chpw')o=`<div class="gp">Connecté : <b style="color:var(--tx)">${esc(SU.email||'')}</b></div><div class="gp" style="margin-top:4px">${cst==1?'✓ Synchronisé'+(LS?' à '+hm(LS):''):cst==3?'Synchronisation…':cst==2?'Synchronisation en échec : nouvel essai au prochain changement':''}</div><button class="ghost" data-ac="sync">Synchroniser maintenant</button><button class="ghost" data-ac="chpw">Changer de mot de passe</button><button class="ghost" data-ac="out">Se déconnecter</button><button class="ghost" data-ac="del">${acq?'Confirmer : supprimer le compte et ses données en ligne':'Supprimer mon compte'}</button>`;
else if(SU&&(AS.step=='rec'||AS.step=='chpw'))o=`<div class="gp">Choisis ton nouveau mot de passe.</div>${pwBox('new-password','Nouveau mot de passe',1)}<button class="cta" data-ac="newpw">Enregistrer le mot de passe</button>${AS.step=='chpw'?'<button class="ghost" data-ac="back">Annuler</button>':''}`;
else if(!SU&&AS.step=='new')o=`<div class="gp">Crée ton compte : tu recevras un e-mail pour confirmer ton adresse.</div><input class="tx" id="aem" type="email" inputmode="email" autocomplete="email" placeholder="Adresse e-mail" value="${esc(AS.email||'')}">${pwBox('new-password','Mot de passe',1)}<button class="cta" data-ac="signup">Créer mon compte</button><button class="ghost" data-ac="back">J'ai déjà un compte</button>`;
else if(!SU)o=`<div class="gp">Facultatif : connecte-toi pour retrouver tes séances sur tous tes appareils et ne plus les perdre.</div><input class="tx" id="aem" type="email" inputmode="email" autocomplete="email" placeholder="Adresse e-mail" value="${esc(AS.email||'')}">${pwBox('current-password','Mot de passe')}<button class="cta" data-ac="login">Se connecter</button><button class="ghost" data-ac="new">Créer un compte</button><button class="ghost" data-ac="forgot">Mot de passe oublié ?</button>`;
o+=(AS.msg?`<div class="tip2">${esc(AS.msg)}</div>`:'')+(AS.unconf?'<button class="ghost" data-ac="resend">Renvoyer l\'e-mail de confirmation</button>':'')+`<button class="ghost" data-ac="priv">Confidentialité</button>`;el.innerHTML=o}
$('data').classList.toggle('sy',!!(SU&&cst==1)||sy==1);bkw()}

function openWelcome(){$('wsheet').classList.add('open');acUI()}

function welDone(){if(!$('wsheet').classList.contains('open'))return;$('wsheet').classList.remove('open');acUI();if(!PF.ob)openOnb()}

async function chkUp(){try{const r=await fetch(location.pathname+'?v='+Date.now(),{cache:'no-store'}),t=await r.text(),m=t.match(/const APPV='([^']+)'/);if(m&&m[1]!=APPV)$('upd').style.display='block'}catch(e){}}

function localISO(d){d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}

function e1g(p,bw){const rs=p[5]&&p[5].length?p[5]:[p[2]||0],ws=p[6]||null;let m=0;rs.forEach((r,i)=>{const w=ws&&ws[i]!=null?ws[i]:p[1];m=Math.max(m,bw||!w?r+(w||0)/2.5:w*(1+r/30))});return Math.round(m*10)/10}

function SC(k,p){return e1g(p,!!(D[k]&&D[k].bw))}

function saveFail(){const n=$('sfail');if(!n)return;n.hidden=false}

function csvOut(){const q=v=>{v=String(v??'');return /[";\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v},rows=[['Date','Exercice','Groupe','Charge (kg)','Reps','Séries','RIR','1RM estimé (kg)','Reps par série']];
Object.keys(D).forEach(k=>D[k].s.forEach(p=>rows.push([p[0],D[k].n,D[k].g,p[1],p[2]??'',p[3]??'',p[4]??'',D[k].bw?'':e1g(p),p[5]?p[5].join('/'):''])));
Object.keys(XS.d||{}).forEach(d=>(XS.d[d].c||[]).forEach(c=>rows.push([d,c.n,'Cardio','','',c.m+' min','',INT()[c.i],''])));
rows.sort((a,b)=>a[0]<b[0]?1:-1);const data='﻿'+rows.map(r=>r.map(q).join(';')).join('\n');
try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/csv;charset=utf-8'}));a.download='lift-seances-'+TI+'.csv';document.body.appendChild(a);a.click();a.remove();toast('Tableur prêt (s\'ouvre dans Excel, Numbers, Sheets)')}catch(e){toast('Export impossible sur ce navigateur')}}

function csvParse(t){const R=[];let r=[],f='',q=false;const sep=(t.split('\n')[0].match(/;/g)||[]).length>(t.split('\n')[0].match(/,/g)||[]).length?';':',';
for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}else if(c=='"')q=true;else if(c==sep){r.push(f);f=''}else if(c=='\n'||c=='\r'){if(c=='\r'&&t[i+1]=='\n')i++;r.push(f);R.push(r);r=[];f=''}else f+=c}if(f||r.length){r.push(f);R.push(r)}return R.filter(x=>x.some(v=>v.trim()))}

function guessG(n){const t=n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');const K=[['Abdos',['crunch','plank','ab ','abs','sit up','sit-up','leg raise','knee raise','russian twist','gainage','abdo','oblique','dead bug','hollow']],['Jambes',['squat','leg ','lunge','calf','hip thrust','romanian','rdl','glute','hamstring','quad','fente','presse','mollet','step up','good morning','adduct','abduct']],['Bras',['curl','tricep','skull','pushdown','biceps','preacher','hammer','extension triceps','kickback']],['Épaules',['shoulder','overhead press','military','lateral raise','front raise','rear delt','face pull','arnold','upright row','shrug','epaule','elevation','developpe militaire','oiseau']],['Dos',['row','pull','lat ','pulldown','chin','deadlift','back extension','traction','tirage','rowing','souleve']],['Pectoraux',['bench','chest','fly','push up','push-up','dip','pec','couche','pompe','ecarte']]];for(const[g,ws]of K)if(ws.some(w=>t.includes(w)))return g;return'Pectoraux'}

function importCSV(text){const R=csvParse(text);if(R.length<2)throw new Error('vide');const H=R[0].map(h=>h.trim().toLowerCase()),ix=n=>H.findIndex(h=>n.some(x=>h==x));
const iD=ix(['start_time','date']),iN=ix(['exercise_title','exercise name']),iW=ix(['weight_kg','weight']),iR=ix(['reps']),iP=ix(['rpe']),iT=ix(['set_type']);
if(iD<0||iN<0||iR<0)throw new Error('format');const lbs=H.some(h=>h=='weight_lbs'),G={};
const toISO=v=>{v=v.trim();let m=v.match(/^(\d{4})-(\d{2})-(\d{2})/);if(m)return m[1]+'-'+m[2]+'-'+m[3];m=v.match(/^(\d{1,2})\s+([a-zé.]+)\s+(\d{4})/i);if(m){const mo={jan:1,feb:2,fev:2,mar:3,apr:4,avr:4,may:5,mai:5,jun:6,juin:6,jul:7,juil:7,aug:8,aou:8,sep:9,oct:10,nov:11,dec:12};const k=Object.keys(mo).find(x=>m[2].toLowerCase().normalize('NFD').replace(/[̀-ͯ.]/g,'').startsWith(x));if(k)return m[3]+'-'+String(mo[k]).padStart(2,'0')+'-'+m[1].padStart(2,'0')}m=v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(m)return m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0');const d=new Date(v);return isNaN(d)?null:localISO(d)};
R.slice(1).forEach(r=>{const d=toISO(r[iD]||''),n=(r[iN]||'').trim(),reps=parseInt(r[iR]);if(!d||!n||!(reps>0))return;if(iT>=0&&/warm/i.test(r[iT]||''))return;let w=parseFloat(String(r[iW]||'0').replace(',','.'))||0;if(lbs&&iW<0)w=0;
const rpe=iP>=0?parseFloat(String(r[iP]).replace(',','.')):NaN,key=n+'|'+d;(G[key]=G[key]||{n,d,s:[]}).s.push([w,reps,isNaN(rpe)?null:Math.max(0,Math.round(10-rpe))])});
let ne=0,np=0;const byName={};Object.keys(D).forEach(k=>byName[D[k].n.toLowerCase()]=k);
Object.values(G).forEach(o=>{let k=byName[o.n.toLowerCase()];if(!k){k='i'+Date.now().toString(36)+ne;D[k]={n:o.n.slice(0,40),sn:o.n.length>16?o.n.slice(0,15)+'…':o.n,g:guessG(o.n),s:[]};byName[o.n.toLowerCase()]=k;ne++}
if(D[k].s.some(p=>p[0]==o.d))return;const ws=o.s.map(x=>x[0]),rs=o.s.map(x=>x[1]),w=Math.max(...ws),last=o.s.at(-1),p=[o.d,w,Math.min(...rs),o.s.length,last[2]];if(ws.some(v=>v!=w)||rs.some(r=>r!=rs[0])){p.push(rs);if(ws.some(v=>v!=w))p.push(ws)}D[k].s.push(p);D[k].s.sort((a,b)=>a[0]<b[0]?-1:1);np++});
return[ne,np]}

function xDates(){const d=(XS&&XS.d)||{};return Object.keys(d).filter(k=>d[k].c&&d[k].c.length)}
