// Lift · Cœur : état de l'appli, rendu général, navigation et démarrage.
// Les fonctions par domaine sont dans donnees.js, seance.js, progression.js, programme.js, contenu.js.

const M=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
const TI=(d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'))(new Date()),TD=TI,T0=new Date(TI),dt=s=>new Date(s.length>5?s:'2026-'+s),$=id=>document.getElementById(id);
const dtl=t=>{const d=new Date(t);return d.getUTCDate()+' '+M[d.getUTCMonth()]},dl=s=>dtl(+dt(s))+(dt(s).getUTCFullYear()!=+TI.slice(0,4)?' '+dt(s).getUTCFullYear():'');
const f1=n=>(+n).toLocaleString('fr-FR',{maximumFractionDigits:1});
const C=['#9E2F21','#14161A','#9AA0A6'];
const PS='2026-10-02';
const XE=(k,n,sn,g,s,rg,rir,rest,w,inc,ss)=>({k,n,sn,g,s,lo:rg[0],hi:rg[1],rl:rir[0],rh:rir[1],rest,w,inc,ss});
const HBH={
A:{t:'Haut · push',m:68,ex:[
XE('dcs','Développé couché (Smith)','Couché Smith','Pectoraux',3,[6,8],[1,2],"2 min 30",0,2.5),
XE('ih','Développé incliné haltères','Incliné haltères','Pectoraux',3,[8,12],[1,2],"2 min",0,2),
XE('tv','Tirage vertical prise large','Tirage vertical','Dos',3,[8,12],[1,2],"2 min",0,2.5),
XE('elp','Élévations latérales poulie','Élév. latérales poulie','Épaules',3,[12,15],[0,1],"1 min 15",0,1),
XE('tp','Extension triceps poulie','Triceps poulie','Bras',3,[10,12],[1,1],"1 min 15",0,2.5,'Superset avec le curl marteau'),
XE('cm','Curl marteau','Curl marteau','Bras',3,[10,12],[1,1],"1 min 15",0,1,'Superset avec le triceps poulie'),
XE('cp','Crunch poulie chargé','Crunch poulie','Abdos',3,[10,15],[1,1],"1 min 15",0,2.5)]},
B:{t:'Bas + abdos',m:65,ex:[
XE('pc','Presse à cuisses','Presse cuisses','Jambes',3,[8,10],[1,2],"2 min 30",0,5),
XE('rdl','Soulevé de terre roumain','SDT roumain','Jambes',3,[8,10],[2,2],"2 min",0,2.5),
XE('fb','Fentes bulgares (par jambe)','Fentes bulgares','Jambes',2,[10,12],[1,2],"1 min 30",0,2),
XE('lc','Leg curl assis','Leg curl assis','Jambes',3,[10,12],[1,1],"1 min 30",0,2.5),
XE('mol','Mollets debout','Mollets debout','Jambes',3,[10,15],[1,1],"1 min",0,5,'Superset avec le relevé de jambes'),
XE('rj','Relevé de jambes lesté','Relevé de jambes','Abdos',3,[10,15],[1,1],"1 min",0,1,'Superset avec les mollets')]},
C:{t:'Haut · pull + épaules',m:70,ex:[
XE('th','Tirage horizontal','Tirage horizontal','Dos',3,[8,10],[1,2],"2 min",0,2.5),
XE('de','Développé épaules machine','Épaules machine','Épaules',3,[8,10],[1,2],"2 min",0,2.5),
XE('pcb','Poulie croisée basse vers haut','Poulie basse→haut','Pectoraux',3,[12,15],[1,1],"1 min 30",0,1),
XE('el','Élévations latérales haltères','Élév. latérales','Épaules',3,[12,20],[0,1],"1 min",0,1),
XE('oi','Oiseau poulie','Oiseau poulie','Épaules',3,[12,15],[1,1],"1 min",0,1,'Superset avec le tirage vertical serré'),
XE('tvs','Tirage vertical serré','Tirage vert. serré','Dos',2,[10,12],[1,1],"1 min 30",0,2.5,'Superset avec l\'oiseau poulie'),
XE('cin','Curl incliné haltères','Curl incliné','Bras',3,[10,12],[1,1],"1 min 15",0,1,'Superset avec le triceps overhead'),
XE('tpo','Extension triceps overhead poulie','Triceps overhead','Bras',3,[10,12],[1,1],"1 min 15",0,2.5,'Superset avec le curl incliné')]}
};
const cp=o=>JSON.parse(JSON.stringify(o));
const FBT={
A:{t:'Full body 1',ex:[
XE('sq','Squat','Squat','Jambes',3,[6,8],[1,2],"2 min 30",0,2.5),
XE('dc','Développé couché','Dév. couché','Pectoraux',3,[6,8],[1,2],"2 min 30",0,2.5),
XE('th','Tirage horizontal','Tirage horizontal','Dos',3,[8,10],[1,2],"2 min",0,2.5),
XE('el','Élévations latérales haltères','Élév. latérales','Épaules',3,[12,15],[0,1],"1 min",0,1),
XE('cp','Crunch poulie chargé','Crunch poulie','Abdos',3,[10,15],[1,1],"1 min 15",0,2.5)]},
B:{t:'Full body 2',ex:[
XE('rdl','Soulevé de terre roumain','SDT roumain','Jambes',3,[8,10],[2,2],"2 min",0,2.5),
XE('ih','Développé incliné haltères','Incliné haltères','Pectoraux',3,[8,12],[1,2],"2 min",0,2),
XE('tv','Tirage vertical prise large','Tirage vertical','Dos',3,[8,12],[1,2],"2 min",0,2.5),
XE('lc','Leg curl assis','Leg curl assis','Jambes',3,[10,12],[1,1],"1 min 30",0,2.5),
XE('tp','Extension triceps poulie','Triceps poulie','Bras',3,[10,12],[1,1],"1 min 15",0,2.5),
XE('cb','Curl biceps','Curl biceps','Bras',3,[10,12],[1,1],"1 min 15",0,1)]},
C:{t:'Full body 3',ex:[
XE('pc','Presse à cuisses','Presse cuisses','Jambes',3,[8,10],[1,2],"2 min 30",0,5),
XE('de','Développé épaules machine','Épaules machine','Épaules',3,[8,10],[1,2],"2 min",0,2.5),
XE('rb','Rowing à la barre','Rowing barre','Dos',3,[8,10],[1,2],"2 min",0,2.5),
XE('fb','Fentes bulgares (par jambe)','Fentes bulgares','Jambes',2,[10,12],[1,2],"1 min 30",0,2),
XE('cm','Curl marteau','Curl marteau','Bras',3,[10,12],[1,1],"1 min 15",0,1),
XE('rj','Relevé de jambes lesté','Relevé de jambes','Abdos',3,[10,15],[1,1],"1 min",0,1)]}
};
const PPL={
A:{t:'Push · pectoraux, épaules, triceps',ex:[
XE('dc','Développé couché','Dév. couché','Pectoraux',3,[6,8],[1,2],"2 min 30",0,2.5),
XE('ih','Développé incliné haltères','Incliné haltères','Pectoraux',3,[8,12],[1,2],"2 min",0,2),
XE('de','Développé épaules machine','Épaules machine','Épaules',3,[8,10],[1,2],"2 min",0,2.5),
XE('el','Élévations latérales haltères','Élév. latérales','Épaules',3,[12,15],[0,1],"1 min",0,1),
XE('tp','Extension triceps poulie','Triceps poulie','Bras',3,[10,12],[1,1],"1 min 15",0,2.5)]},
B:{t:'Pull · dos, biceps',ex:[
XE('tv','Tirage vertical prise large','Tirage vertical','Dos',3,[8,12],[1,2],"2 min",0,2.5),
XE('th','Tirage horizontal','Tirage horizontal','Dos',3,[8,10],[1,2],"2 min",0,2.5),
XE('fp','Face pull','Face pull','Épaules',3,[12,15],[1,1],"1 min 15",0,2.5),
XE('cb','Curl biceps','Curl biceps','Bras',3,[10,12],[1,1],"1 min 15",0,1),
XE('cm','Curl marteau','Curl marteau','Bras',3,[10,12],[1,1],"1 min 15",0,1)]},
C:{t:'Legs · jambes, abdos',ex:[
XE('sq','Squat','Squat','Jambes',3,[6,8],[1,2],"2 min 30",0,2.5),
XE('rdl','Soulevé de terre roumain','SDT roumain','Jambes',3,[8,10],[2,2],"2 min",0,2.5),
XE('lex','Leg extension','Leg extension','Jambes',3,[10,12],[1,1],"1 min 30",0,2.5),
XE('lc','Leg curl assis','Leg curl assis','Jambes',3,[10,12],[1,1],"1 min 30",0,2.5),
XE('mol','Mollets debout','Mollets debout','Jambes',3,[10,15],[1,1],"1 min",0,5),
XE('cp','Crunch poulie chargé','Crunch poulie','Abdos',3,[10,15],[1,1],"1 min 15",0,2.5)]}
};
const TPL={hbh:{n:'Haut / Bas / Haut',d:'3 séances · accent sur le haut du corps',P:HBH},fb:{n:'Full body',d:'3 séances · tout le corps à chaque fois, idéal pour débuter',P:FBT},ppl:{n:'Push / Pull / Legs',d:'3 séances · un groupe de mouvements par jour',P:PPL},vide:{n:'Programme vide',d:'Je crée mes séances moi-même',P:{}}};
let PLAN=cp(HBH),PF={};try{PF=JSON.parse(localStorage.getItem('lift-pf'))||{}}catch(e){}
const pfS=()=>{try{localStorage.setItem('lift-pf',JSON.stringify(PF))}catch(e){}},G=()=>PF.g||3,AI=false;
// [date, poids kg, reps, séries, RIR]
let D={};
const fx=d=>d.length>5?d:'2026-'+d,mg=o=>{o.D=o.D||{};Object.values(o.D).forEach(e=>{e.s=(e.s||[]).map(p=>[fx(p[0]),...p.slice(1)]);e.s.sort((a,b)=>a[0]<b[0]?-1:1)});const m=x=>{const r={};Object.keys(x||{}).forEach(k=>r[fx(k)]=x[k]);return r};o.SE=m(o.SE);o.NT=m(o.NT);o.DL=(o.DL||[]).map(fx);return o};
let BKP={};try{BKP=JSON.parse(localStorage.getItem('lift-bkp'))||{}}catch(e){}
const dayBk=()=>{BKP[TI]=snap();const k=Object.keys(BKP).sort();while(k.length>7)delete BKP[k.shift()];for(let i=0;i<7;i++){try{localStorage.setItem('lift-bkp',JSON.stringify(BKP));break}catch(e){const o=Object.keys(BKP).sort();if(o.length<2)break;delete BKP[o[0]]}}};
const CATS=['Pectoraux','Dos','Épaules','Bras','Jambes','Abdos'],GC={'Pectoraux':'#9E2F21','Épaules':'#C46A58','Dos':'#2E5E5A','Bras':'#6E9692','Jambes':'#14161A','Abdos':'#8A9096'},gcol=k=>GC[D[k].g]||'#9E2F21';let SE={},NT={},XS={d:{}},BK=0,TS=0,DL=[];let FR=1;try{const s=JSON.parse(localStorage.getItem('lift-v4'));if(s){FR=0;if(s.P&&typeof s.P=='object')PLAN=s.P;D=s.D;SE=s.SE||{};NT=s.NT||{};XS=s.XS||{d:{}};BK=s.BK||0;TS=s.TS||0;DL=s.DL||[]}}catch(e){}{const o=mg({D,SE,NT,DL});D=o.D;SE=o.SE;NT=o.NT;DL=o.DL}const store=()=>{try{localStorage.setItem('lift-v4',JSON.stringify({D,SE,NT,XS,BK,TS,DL,P:PLAN}))}catch(e){try{localStorage.removeItem('lift-bkp');localStorage.setItem('lift-v4',JSON.stringify({D,SE,NT,XS,BK,TS,DL,P:PLAN}))}catch(e2){saveFail()}}},save=()=>{TS=Date.now();store();dayBk();push();cpush()};const snap=()=>JSON.stringify({D,SE,NT,XS,DL,P:PLAN}),restore=j=>{const s=mg(JSON.parse(j));if(s.P&&typeof s.P=='object')PLAN=s.P;D=s.D;SE=s.SE;NT=s.NT;XS=s.XS||{d:{},o:XS.o,pl:XS.pl};DL=s.DL;pick=null;if(!D[sel[0]])sel=[Object.keys(D)[0]];save();render()};let sel=[D.el?'el':Object.keys(D)[0]],cmp=false,met='e',per=99,pick=null,W=360,H=210,PT=[],F={},cat='Tous',nw=false,nc='Pectoraux',dq=false,view='p',xk='el',sl='',dqs=null,rq=false,L=null,lq=false,rest=0,tt=null,tj=null,tmr=null,ed=null,pdq=false;const cats=()=>['Tous',...CATS.filter(c=>Object.values(D).some(e=>e.g==c))];
const val=(p,m)=>m=='e'?e1g(p):m=='w'?p[1]:m=='v'?vol(p):p[4];
const pts=k=>{const a=D[k].s.filter(p=>(T0-dt(p[0]))/864e5<=per);return a.length>=2?a:D[k].s.slice(-2)};
const R=x=>x==null?'–':x,rc=r=>r==null?'r3':'r'+Math.min(r,3),vol=p=>p[6]&&p[5]?p[5].reduce((a,r,i)=>a+r*(p[6][i]??p[1]),0):p[5]&&p[5].length?p[1]*p[5].reduce((a,b)=>a+b,0):(p[2]&&p[3]?p[1]*p[2]*p[3]:0),vt=p=>vol(p)?vol(p)+' kg':'–',rtx=p=>p[5]&&p[5].length?p[5].join(' / '):(p[2]??'–'),esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function render(){dq=false;dqs=null;$('hi').textContent=view=='r'?'Réglages':greet();if(!D[sel[0]])sel=[Object.keys(D)[0]];if(!Object.keys(D).length){document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v==view));sess();emptyP();wk();nx();bkw();wkstrip();lastS();$('data').classList.remove('warn');return}document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v==view));sess();if(!cats().includes(cat))cat='Tous';chips();segs();hero();draw();hist();list();wk();nx();bkw();wkstrip();lastS();$('data').classList.toggle('warn',!BK||Date.now()-BK>12096e5)}
$('chips').onclick=e=>{const b=e.target.closest('button');if(!b)return;pick=null;
if(b.dataset.n){openNew();return}if(b.dataset.t){cmp=!cmp;if(cmp&&sel.length<2)sel.push(Object.keys(D).find(k=>!sel.includes(k)));if(!cmp)sel=[sel[0]]}
else{const k=b.dataset.k;if(cmp){if(sel.includes(k)){if(sel.length>1)sel=sel.filter(x=>x!=k)}else sel=sel.length<3?[...sel,k]:[...sel.slice(1),k]}else sel=[k]}render()};
$('mseg').onclick=e=>{const m=e.target.dataset.m;if(m){met=m;pick=null;render()}};
$('pseg').onclick=e=>{const p=e.target.dataset.p;if(p){per=+p;pick=null;render()}};
$('list').onclick=e=>{const b=e.target.closest('button');if(b){sel=[b.dataset.l];cmp=false;pick=null;render();go('p')}};
const svg=$('svg');svg.onpointermove=svg.onpointerdown=e=>{const r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;let b=null,bd=1e9;
PT.forEach(p=>{const d=(p.x-x)**2+(p.y-y)**2*.1;if(d<bd){bd=d;b=p}});if(b&&!(pick&&pick.k==b.k&&pick.i==b.i)){pick={k:b.k,i:b.i};hero();draw()}};
svg.onpointerleave=()=>{if(cmp){pick=null;draw()}};
function sheet(){$('pdel').style.display=ed?'block':'none';$('pdel').textContent=pdq?'Confirmer la suppression':'Supprimer cette perf';$('ok').textContent=ed?'Enregistrer les modifications':'Valider la série';$('sl').innerHTML=['',...Object.keys(PLAN),'Alt'].map(l=>`<button data-sl="${l}" class="${sl==l?'on':''}">${l||'—'}</button>`).join('');
$('xsel').innerHTML=CATS.map(c=>{const ks=Object.keys(D).filter(k=>D[k].g==c);return ks.length?`<optgroup label="${c}">`+ks.map(k=>`<option value="${k}"${k==xk?' selected':''}>${D[k].n}</option>`).join('')+'</optgroup>':''}).join('');$('xs').style.display=nw?'none':'flex';$('cats').innerHTML=CATS.map(c=>`<button data-c="${c}" class="${nc==c?'on':''}">${c}</button>`).join('');$('flds').innerHTML=fh();$('rirs').innerHTML=rh()}
$('add').onclick=()=>openAdd(TD);
$('flds').onclick=e=>{const b=e.target.closest('button');if(b){F[b.dataset.f]=Math.max(+b.dataset.mn,F[b.dataset.f]+ +b.dataset.d);sheet()}};
$('rirs').onclick=e=>{if(e.target.dataset.i){F.i=+e.target.dataset.i;sheet()}};
$('no').onclick=()=>$('sheet').classList.remove('open');
$('ok').onclick=()=>{const dd=$('dd').value;if(!dd)return;const d=dd;if(dd>TI){toast('Date dans le futur');return}const j=snap();let k=xk;
if(nw){const nm=$('nm').value.trim();if(!nm){$('nm').focus();return}k='x'+Date.now();D[k]={n:nm,sn:nm.length>16?nm.slice(0,15)+'…':nm,g:nc,s:[]};cat='Tous'}
if(ed){const o=D[ed.k];if(o){o.s=o.s.filter(p=>p[0]!=ed.d);if(!o.s.length&&ed.k!=k)delete D[ed.k]}}const q=D[k].s,n=en(d),i=q.findIndex(p=>p[0]==d);i>=0?q[i]=n:q.push(n);q.sort((a,b)=>a[0]<b[0]?-1:1);
if(sl)SE[d]=sl;else delete SE[d];if(ed&&ed.d!=d&&!Object.values(D).some(e=>e.s.some(p=>p[0]==ed.d))){delete SE[ed.d];delete NT[ed.d]}ed=null;
sel=[k];cmp=false;nw=false;pick=null;save();$('sheet').classList.remove('open');render();toast('Perf enregistrée',j)};
const WD=['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'];

function go(v){const SY=window.SYM=window.SYM||{};SY[view]=scrollY;document.documentElement.dataset.nav=v=='r'?'push':view=='r'?'pop':'tab';if(v!='r')window.PV=v;view=v;if(window.hdr)hdr();if(v=='r')setR();document.querySelectorAll('.view').forEach(x=>{x.hidden=x.dataset.v!=v});document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v==v));scrollTo(0,v=='r'?0:(SY[v]||0));if(window.cbarSync)cbarSync()}
$('tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.v==view){scrollTo({top:0,behavior:'smooth'});return}go(b.dataset.v)};go('t');

$('last').onclick=()=>go('s');
$('sess').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.ed){openEdit(b.dataset.e,b.dataset.ed);return}if(b.dataset.dl){const d=b.dataset.dl;if(dqs!=d){dqs=d;sess();return}const j=snap(),keep={};Object.keys(D).forEach(k=>{const q=D[k].s.filter(p=>p[0]!=d);if(q.length)keep[k]={...D[k],s:q}});if(!Object.keys(keep).length){dqs=null;sess();toast('Impossible de supprimer la dernière séance');return}D=keep;delete SE[d];delete NT[d];if(XS.d)delete XS.d[d];dqs=null;if(!D[sel[0]])sel=[Object.keys(D)[0]];pick=null;save();render();toast('Séance supprimée',j);return}
if(b.dataset.ad){openAdd(b.dataset.ad);return}if(b.dataset.k){sel=[b.dataset.k];cmp=false;cat='Tous';pick=null;render();go('p')}};
$('adds').onclick=()=>openAdd(TD);
$('sl').onclick=e=>{if(e.target.dataset.sl!==undefined){sl=e.target.dataset.sl;sheet()}};
$('xsel').onchange=()=>{xk=$('xsel').value;if(!ed){const p=D[xk].s.at(-1);F={w:p[1],r:p[2]||10,s:p[3]||3,i:p[4]??2}}sheet()};
$('dd').onchange=()=>{sl=SE[$('dd').value]||'';sheet()};
const LB=l=>l=='Alt'?'Séance alternative':l?'Séance '+l:'Séance';
const LIM={w:[0,400,2.5,'Poids (kg)'],r:[1,100,1,'Répétitions'],s:[1,20,1,'Séries']};
const cl=(v,f)=>{v=Math.min(LIM[f][1],Math.max(LIM[f][0],v));return f=='w'?Math.round(v*10)/10:Math.round(v)};
const rowN=(f,n,v,st)=>`<div class="fr"><span>${n}</span><div class="st"><button data-f="${f}" data-d="${-st}">−</button><input class="num" type="number" inputmode="decimal" step="any" data-f="${f}" value="${v??''}"><button data-f="${f}" data-d="${st}">+</button></div></div>`;
const fh=()=>{if(F.sr&&F.sr.length)return rowN('w',LIM.w[3],F.w,LIM.w[2])+F.sr.map((v,i)=>`<div class="fr"><span>Série ${i+1} (reps)</span><div class="st"><button data-sd="-1" data-si="${i}">−</button><input class="num" type="number" inputmode="numeric" data-f="sr" data-si="${i}" value="${v}"><button data-sd="1" data-si="${i}">+</button></div></div>`).join('')+`<div class="fr" style="gap:8px;border:0"><button class="mini" style="float:none" data-sa="1">+ série</button><button class="mini" style="float:none" data-sa="-1">− série</button><button class="mini" style="float:none;margin-left:auto" data-tg="1">Même reps partout</button></div>`;
return Object.keys(LIM).map(f=>rowN(f,LIM[f][3],F[f],LIM[f][2])).join('')+`<div class="fr" style="border:0"><button class="mini" style="float:none" data-tg="1">Détail par série</button></div>`};
const rh=()=>[null,0,1,2,3].map(i=>`<button data-i="${i??''}" class="${F.i===i?'on':''}">${i===null?'–':i==3?'3+':i}</button>`).join('');
const rf=()=>$('live').classList.contains('open')?liveR():sheet();
const togSr=()=>{if(F.sr){F.r=Math.min(...F.sr);F.s=F.sr.length;F.sr=null}else{const n=F.s||3,r=F.r||10;F.sr=Array.from({length:n},()=>r)}};
const en=d=>F.sr&&F.sr.length?[d,F.w,Math.min(...F.sr),F.sr.length,F.i,F.sr.slice()]:[d,F.w,F.r,F.s,F.i];

['flds','rirs'].forEach(id=>{$(id).onclick=fclick;$(id).onchange=fchg});
$('lp').onchange=e=>{const t=e.target,it=L&&L.it[L.i];if(it&&t.tagName=='INPUT'&&(t.dataset.sw!==undefined||t.dataset.sp!==undefined)){const isw=t.dataset.sw!==undefined,i=+(isw?t.dataset.sw:t.dataset.sp),v=parseFloat(String(t.value).replace(',','.')),x=it.st[i];if(!x)return;if(isNaN(v)){t.value=isw?x.w:x.r;return}if(isw){x.w=cl(v,'w');t.value=x.w;it.st.forEach((y,j)=>{if(j>i&&!y.d){y.w=x.w;const q=$('lp').querySelector('[data-sw="'+j+'"]');if(q)q.value=y.w}})}else{x.r=cl(v,'r');t.value=x.r}return}fchg(e)};
$('lp').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.sk!==undefined){setTick(+b.dataset.sk);return}if(b.dataset.sx){setAdd(+b.dataset.sx);return}if(b.dataset.a||b.dataset.rs||b.dataset.go!==undefined||b.dataset.rk||b.dataset.ak||b.dataset.ag||b.dataset.cm||b.dataset.ci!==undefined||b.dataset.fr||b.dataset.fg){liveAct(b);return}fclick(e)};
const pr=(k,p)=>{const q=D[k].s,i=q.indexOf(p);return i>0&&SC(k,p)>Math.max(...q.slice(0,i).map(x=>SC(k,x)))+.05};
const sbm=(k,p)=>{const q=D[k].s,i=q.indexOf(p),t=+dt(p[0]),w=q.slice(0,i).filter(x=>t-dt(x[0])<=56*864e5);return i>0&&!pr(k,p)&&w.length>0&&SC(k,p)>Math.max(...w.map(x=>SC(k,x)))+.05};
const mark=(k,p)=>pr(k,p)?' <em class="pr" title="Record personnel (1RM estimé ou reps)">PB</em>':sbm(k,p)?' <em class="sbt" title="Meilleure perf des 8 dernières semaines">SB</em>':'';
const sugg=k=>{const p=D[k].s.at(-1);return p[2]>=12&&p[3]>=3&&p[4]>=2?{txt:`Suggestion : ${p[3]}×${p[2]} à RIR ${p[4]}, essaie ${f1(p[1]+(p[1]<10?1:2.5))} kg`}:null};
const PK=()=>new Set(Object.values(PLAN).flatMap(P=>P.ex.map(e=>e.k)));
const stag=k=>{const q=D[k].s;if(q.length<3)return'';const [a,b,c]=q.slice(-3);if(!(a[1]==b[1]&&b[1]==c[1]))return'';return(c[2]||0)<=Math.max(a[2]||0,b[2]||0)?'Attention : pas de progression sur les 3 dernières séances (même charge, pas de reps en plus)':''};
const tips=k=>{const g=sugg(k),t=PK().has(k)?stag(k):'';return(g||t)?`<div class="tip2">${g?g.txt:''}${g&&t?'<br>':''}${t}</div>`:''};

function toast(m,j){tj=j||null;const t=$('toast');t.innerHTML=m+(j?'<button id="tun">Annuler</button>':'');t.style.display='block';clearTimeout(tt);tt=setTimeout(()=>t.style.display='none',6500)}
$('toast').onclick=e=>{if(e.target.id=='tun'&&tj){restore(tj);tj=null;$('toast').style.display='none';if($('esheet').classList.contains('open')){E={v:'l'};edR()}}};

$('mno').onclick=()=>$('msheet').classList.remove('open');
$('mok').onclick=()=>{const a=sel[0],b=$('mt').value;if(!D[b]||a==b)return;const j=snap();D[a].s.forEach(p=>{if(!D[b].s.some(x=>x[0]==p[0]))D[b].s.push(p)});D[b].s.sort((x,y)=>x[0]<y[0]?-1:1);delete D[a];sel=[b];pick=null;$('msheet').classList.remove('open');save();render();toast('Exercices fusionnés',j)};
$('data').onclick=()=>{$('dtx').value=snap();rq=false;$('drest').textContent='Restaurer depuis ce texte';$('dmut').textContent=(BK?'Dernière copie : '+new Date(BK).toLocaleDateString('fr-FR'):'Aucune sauvegarde copiée pour l\'instant')+(sy==1?' · Synchronisé avec Claude':sy==2?' · Synchro en échec':'');$('dsheet').classList.add('open')};
$('dcopy').onclick=async()=>{const t=$('dtx');t.value=snap();t.select();let ok=false;try{await navigator.clipboard.writeText(t.value);ok=true}catch(e){try{ok=document.execCommand('copy')}catch(e2){}}if(ok){BK=Date.now();save();render()}$('dcopy').textContent=ok?'Copié ✓':'Texte sélectionné : copie-le à la main';setTimeout(()=>$('dcopy').textContent='Copier',2500)};
$('drest').onclick=()=>{let o;try{o=JSON.parse($('dtx').value)}catch(e){toast('Texte invalide');return}
if(!o||!o.D||typeof o.D!='object'||!Object.keys(o.D).length||!Object.values(o.D).every(e=>e&&e.n&&e.g&&Array.isArray(e.s)&&e.s.length)){toast('Sauvegarde invalide');return}
if(!rq){rq=true;$('drest').textContent='Confirmer le remplacement des données';return}
const j=snap();restore(JSON.stringify({D:o.D,SE:o.SE||{},NT:o.NT||{},DL:o.DL||[],P:o.P}));rq=false;$('dsheet').classList.remove('open');toast('Données restaurées',j)};
$('dno').onclick=()=>$('dsheet').classList.remove('open');

$('live0').onclick=openPick;$('pno').onclick=()=>$('psheet').classList.remove('open');
$('plist').onclick=e=>{const b=e.target.closest('button');if(b){$('psheet').classList.remove('open');if(b.dataset.pe)openEd();else startLive(b.dataset.c)}};
const loadF=()=>{F={i:L.it[L.i].x}},stF=()=>{if(L&&L.it[L.i])L.it[L.i].x=F.i};
const mkSt=(w,r,s)=>Array.from({length:Math.max(1,s||1)},()=>({w,r,d:false})),dnS=t=>{const a=t.st.filter(x=>x.d);return a.length?a:t.st};
const perfOf=(t,d)=>{const a=dnS(t),ws=a.map(x=>x.w),rs=a.map(x=>x.r),w=Math.max(...ws),p=[d,w,Math.min(...rs),a.length,t.x],dw=ws.some(v=>v!=w);if(dw||rs.some(r=>r!=rs[0])){p.push(rs);if(dw)p.push(ws)}return p};
const psug=t=>{const o=D[t.k],p=o&&o.s.at(-1),e=t.e,rr=e.rl==e.rh?e.rl:e.rl+'-'+e.rh;if(p&&p[0]>PS)return p[2]>=e.hi&&(p[4]==null||p[4]>=e.rl)?`Suggestion : ${p[2]} reps atteintes, passe à ${f1(p[1]+e.inc)} kg et repars à ${e.lo} reps`:`Vise ${e.hi} reps à RIR ${e.rl}+ avant d'augmenter la charge`;return e.w?`Charge de départ : ${f1(e.w)} kg · ajuste pour finir à RIR ${rr}`:`Choisis une charge qui te laisse finir tes séries à RIR ${rr}`};

let DB=null,sy=0,pt=null,LD=null,lsig='',lpt=null;try{LD=JSON.parse(localStorage.getItem('lift-live'))}catch(e){}
const ldStale=d=>!d||!d.it||Date.now()-d.upd>1296e5||!d.it.some(t=>t.ok)||d.it.filter(t=>t.ok).every(t=>D[t.k]&&D[t.k].s.some(p=>p[0]==d.d));
if(ldStale(LD)){LD=null;try{localStorage.removeItem('lift-live')}catch(e){}}

document.addEventListener('visibilitychange',()=>{if(document.hidden&&L){lsave();if(DB&&lsig){clearTimeout(lpt);DB.doc('lift/live').set({json:localStorage.getItem('lift-live'),upd:Date.now()}).catch(()=>{})}}});
window.addEventListener('pagehide',()=>{lsave()});
const syncUI=()=>{$('data').textContent='Données';$('data').classList.toggle('sy',sy==1)};

(async()=>{try{if(window.claude&&claude.use)DB=await claude.use('db')}catch(e){}if(DB){pull();document.addEventListener('visibilitychange',()=>{if(!document.hidden)pull()})}})();
if(view!='r')$('hi').textContent=greet();
let WL=null,ra=true,snz=0,bkq=null,bctl=null;try{ra=localStorage.getItem('lift-ra')!=='0';snz=+localStorage.getItem('lift-snz')||0}catch(e){}
const rsec=t=>{const m=String(t||'').match(/(\d+)\s*min(?:\s*(\d+))?/);return m?+m[1]*60+(m[2]?+m[2]:0):0};

document.addEventListener('visibilitychange',()=>{if(!document.hidden&&L)wlOn()});
// sauvegardes (versions quotidiennes)

$('bkl').onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.b;if(bkq!=k){bkq=k;renderBk();return}const j=snap(),v=BKP[k];bkq=null;restore(v);$('dsheet').classList.remove('open');toast('Version du '+dl(k)+' restaurée',j)};
$('dfile').onclick=async()=>{const name='lift-sauvegarde-'+TI+'.json',data=snap();let ok=false;
try{const dn=window.claude&&await claude.use('downloads');if(dn){await dn.save({filename:name,data});ok=true}}catch(e){}
if(!ok){try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download=name;document.body.appendChild(a);a.click();a.remove();ok=true}catch(e){}}
if(ok){BK=Date.now();save();render()}toast(ok?'Fichier prêt':'Téléchargement impossible : utilise « Copier »')};
$('dimpb').onclick=()=>$('dimp').click();
$('dimp').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{$('dtx').value=await f.text();rq=false;$('drest').textContent='Restaurer depuis ce texte';toast('Fichier chargé : appuie sur « Restaurer »');const dv=document.querySelector('details.adv');if(dv)dv.open=true}catch(x){toast('Lecture impossible')}e.target.value=''};
// prochaine séance + allègement

const stags=()=>{const pk=PK();return Object.keys(D).filter(k=>pk.has(k)&&stag(k))};

$('nx').onclick=e=>{const b=e.target.closest('button');if(!b)return;const n=b.dataset.n;if(n=='res')resumeLive();else if(n=='aban'){if(confirm('Abandonner cette séance non enregistrée ?')){ldClear();nx()}}else if(n=='x')openPick();else if(n=='bl')bilan();else if(n=='dl'){DL.push(TI);save();nx()}else if(n=='sn'){snz=Date.now()+7*864e5;try{localStorage.setItem('lift-snz',snz)}catch(x){}nx()}else if(n=='pe')openEd();else if(PLAN[n])startLive(n)};
// bilan de la semaine (Claude)

$('bre').onclick=bilan;$('bno').onclick=()=>{if(bctl)bctl.abort();$('bsheet').classList.remove('open')};
$('data').addEventListener('click',()=>{bkq=null;renderBk()});
if(!BKP[TI])dayBk();
$('dd').max=TI;

$('pdel').onclick=()=>{if(!ed)return;if(!pdq){pdq=true;sheet();return}const j=snap(),o=D[ed.k];o.s=o.s.filter(p=>p[0]!=ed.d);
if(!o.s.length){if(Object.keys(D).length<2){restore(j);pdq=false;toast('Impossible de supprimer la dernière perf');return}delete D[ed.k]}
if(!Object.values(D).some(e=>e.s.some(p=>p[0]==ed.d))){delete SE[ed.d];delete NT[ed.d]}
if(!D[sel[0]])sel=[Object.keys(D)[0]];ed=null;pdq=false;pick=null;save();$('sheet').classList.remove('open');render();toast('Perf supprimée',j)};

$('catf').onclick=e=>{const c=e.target.dataset.cf;if(!c)return;cat=c;pick=null;if(!cmp&&c!='Tous'&&D[sel[0]].g!=c)sel=[Object.keys(D).find(k=>D[k].g==c)];render()};
$('newx').onclick=openNew;
$('cats').onclick=e=>{if(e.target.dataset.c){nc=e.target.dataset.c;sheet()}};
$('hist').onclick=e=>{const eb=e.target.closest('.ed');if(eb){openEdit(eb.dataset.e,eb.dataset.ed);return}if(e.target.closest('#mrg')){openMerge();return}if(!e.target.closest('#del'))return;if(!dq){dq=true;hist();return}if(Object.keys(D).length<2)return;const j=snap();delete D[sel[0]];sel=[Object.keys(D)[0]];dq=false;pick=null;save();render();toast('Exercice supprimé',j)};
// --- rappel de sauvegarde ---
let bsn=0;try{bsn=+localStorage.getItem('lift-bsn')||0}catch(e){}

$('bkw').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.b=='go')$('data').click();else{bsn=Date.now()+3*864e5;try{localStorage.setItem('lift-bsn',bsn)}catch(x){}bkw()}};
// --- éditeur de programme ---
let E={v:'l'};
const RST=["1 min","1 min 15","1 min 30","2 min","2 min 30","3 min","4 min","5 min"],estM=P=>Math.round(5+P.ex.reduce((a,e)=>a+(e.c?e.min*60:e.s*(rsec(e.rest)+45)),0)/60),cleanT=s=>String(s||'').replace(/[<>&"]/g,'').trim();

const erow=(l,f,v)=>`<div class="fr"><span>${l}</span><div class="st"><button data-xf="${f}" data-d="-1">−</button><b>${v}</b><button data-xf="${f}" data-d="1">+</button></div></div>`;

const syncX=()=>{const a=$('exn'),b=$('exw');if(a)E.x.n=a.value;if(b){const v=parseFloat(String(b.value).replace(',','.'));E.x.w=isNaN(v)?0:cl(v,'w')}};

$('ep').onchange=e=>{if(e.target.id=='est'&&PLAN[E.c]){PLAN[E.c].t=cleanT(e.target.value)||PLAN[E.c].t;save()}};
$('ep').onclick=e=>{const b=e.target.closest('button');if(!b)return;const a=b.dataset.a,P=PLAN[E.c],ti=$('est');if(ti&&P)P.t=cleanT(ti.value)||P.t;if(E.v=='x')syncX();
if(a=='close'){$('esheet').classList.remove('open');save();render();return}
if(a=='back'){E={v:'l'};save()}
else if(a=='backs'){E={v:'s',c:E.c}}
else if(a=='adds'){const c='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').find(l=>!PLAN[l]);if(!c)return;PLAN[c]={t:'Nouvelle séance',ex:[]};E={v:'s',c};save()}
else if(a=='tpl'){E={v:'t'}}
else if(b.dataset.tp){const k=b.dataset.tp;if(Object.keys(PLAN).length&&E.q!=k)E.q=k;else{const j=snap();PLAN=cp(TPL[k].P);E={v:'l'};save();toast('Modèle « '+TPL[k].n+' » chargé',j)}}
else if(b.dataset.g){PF.g=Math.min(7,Math.max(1,G()+ +b.dataset.g));pfS()}
else if(b.dataset.s){E={v:'s',c:b.dataset.s}}
else if(a=='dels'){if(E.q!='del')E.q='del';else{const j=snap();delete PLAN[E.c];E={v:'l'};save();toast('Séance supprimée',j)}}
else if(a=='addx'){E={v:'x',c:E.c,i:null,x:{n:'',g:'Pectoraux',s:3,lo:8,hi:12,rl:1,rh:2,rest:'1 min 30',w:0,inc:2.5}}}
else if(b.dataset.x!==undefined){E={v:'x',c:E.c,i:+b.dataset.x,x:cp(P.ex[+b.dataset.x])}}
else if(b.dataset.up!==undefined||b.dataset.dn!==undefined){const up=b.dataset.up!==undefined,i=+(up?b.dataset.up:b.dataset.dn),j=up?i-1:i+1;if(j>=0&&j<P.ex.length){[P.ex[i],P.ex[j]]=[P.ex[j],P.ex[i]];save()}}
else if(b.dataset.rm!==undefined){const j=snap();P.ex.splice(+b.dataset.rm,1);save();toast('Exercice retiré',j)}
else if(b.dataset.xg){E.x.g=b.dataset.xg}
else if(b.dataset.xr){E.x.rest=b.dataset.xr}
else if(b.dataset.xi){E.x.inc=+b.dataset.xi}
else if(b.dataset.xf){const f=b.dataset.xf,x=E.x,lim={s:[1,10],lo:[1,50],hi:[1,50],rl:[0,5],rh:[0,5]}[f];x[f]=Math.min(lim[1],Math.max(lim[0],x[f]+ +b.dataset.d));if(x.hi<x.lo){if(f=='lo')x.hi=x.lo;else x.lo=x.hi}if(x.rh<x.rl){if(f=='rl')x.rh=x.rl;else x.rl=x.rh}}
else if(a=='savex'){if(!saveX())return}
else return;
edR()};
// --- accueil / aide ---
let OB={h:false,tp:'fb'};
const obPick=()=>!OB.h&&FR&&!Object.keys(D).length;
$('help').onclick=()=>openOnb(1);
if(!PF.ob)openOnb();
// --- compte et synchronisation (Supabase) ---
var SB=null,SU=null,cst=0,LS=0,cpt=null,sbTried=false,acq=false,AS={step:0},CF=null;
const SB_URL='https://pvgvwzsvcawpuvurpazt.supabase.co',SB_KEY='sb_publishable_642neizSZ7nvLTp45WdgSQ_xfAjSOl6';
const sbMod=window.__LIFT_SB||(()=>import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'));
const linked=()=>{try{return !!SU&&localStorage.getItem('lift-uid')==SU.id}catch(e){return false}},setLinked=()=>{try{localStorage.setItem('lift-uid',SU.id)}catch(e){}};
const nSess=st=>{try{return new Set(Object.values(st.D||{}).flatMap(e=>(e.s||[]).map(p=>p[0]))).size}catch(e){return 0}};
const hm=t=>new Date(t).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
const pwRules=p=>[[p.length>=8,'8 caractères'],[/[a-z]/.test(p),'une minuscule'],[/[A-Z]/.test(p),'une majuscule'],[/[0-9]/.test(p),'un chiffre']],pwOk=p=>pwRules(p).every(r=>r[0]);
const pwBox=(ac,ph,neu)=>`<div style="position:relative"><input class="tx" id="apw" type="password" autocomplete="${ac}" placeholder="${ph}" style="padding-right:64px"${neu?' data-neu="1"':''}><button type="button" class="x" data-ac="eye" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);font-size:13px">Voir</button></div>${neu?'<div class="gp" id="pwh" style="margin:-2px 0 6px">'+pwHint('')+'</div>':''}`;
const pwHint=p=>'Au moins : '+pwRules(p).map(r=>`<span style="color:${r[0]?'#14161A':'var(--t3)'}">${r[0]?'✓ ':''}${r[1]}</span>`).join(' · ');

$('cfx').onclick=async e=>{const b=e.target.closest('button');if(!b||!CF)return;const c=b.dataset.cf,x=CF;$('csheet').classList.remove('open');CF=null;
if(c=='acc'){applyRemote(x.rd,x.rts);setLinked();cst=1;LS=Date.now();acUI();toast('Données du compte chargées')}else if(c=='dev'){TS=Date.now();store();setLinked();await cloudPushNow();toast('Données de cet appareil envoyées sur le compte')}};

const accClick=async e=>{const b=e.target.closest('button');if(!b||!SB)return;const a=b.dataset.ac;AS.msg='';
if(a=='priv'){$('prsheet').classList.add('open');return}
const em=()=>(($('aem')||{}).value||'').trim(),pw=()=>(($('apw')||{}).value||'');
const busy=t=>{b.disabled=true;b.textContent=t},okEm=x=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x);
if(a=='eye'){const i=$('apw');if(i){i.type=i.type=='password'?'text':'password';b.textContent=i.type=='password'?'Voir':'Cacher'}AS.msg=AS.msg0||'';return}
if(a=='chpw'){AS={step:'chpw'};acUI();return}
if(a=='resend'){busy('Envoi…');try{const {error}=await SB.auth.resend({type:'signup',email:AS.email,options:{emailRedirectTo:location.origin+location.pathname}});AS.msg=error?errMsg(error):"E-mail de confirmation renvoyé (regarde aussi les spams).";AS.unconf=!!error}catch(x){AS.msg=errMsg(x)}acUI();return}
if(a=='new'){AS={step:'new',email:em()};acUI();return}
if(a=='login'||a=='signup'||a=='forgot'){const e1=em();AS.email=e1;if(!okEm(e1)){AS.msg='Adresse e-mail invalide';acUI();return}
if(a=='forgot'){busy('Envoi…');try{const {error}=await SB.auth.resetPasswordForEmail(e1,{redirectTo:location.origin+location.pathname});AS.msg=error?errMsg(error):"Si un compte existe, un e-mail de réinitialisation vient d'être envoyé. Ouvre le lien qu'il contient : il te permettra de choisir un nouveau mot de passe."}catch(x){AS.msg=errMsg(x)}acUI();return}
const p1=pw();if(a=='login'&&!p1){AS.msg='Entre ton mot de passe.';acUI();return}if(a=='signup'&&!pwOk(p1)){AS.msg='Mot de passe trop faible : 8 caractères minimum, avec une minuscule, une majuscule et un chiffre.';acUI();return}
if(a=='login'){busy('Connexion…');try{const {error}=await SB.auth.signInWithPassword({email:e1,password:p1});if(error){AS.msg=errMsg(error);AS.unconf=String(error.message||'').toLowerCase().includes('not confirmed')}else{AS={step:0};toast('Connecté')}}catch(x){AS.msg=errMsg(x)}acUI();return}
busy('Création…');try{const {data,error}=await SB.auth.signUp({email:e1,password:p1,options:{emailRedirectTo:location.origin+location.pathname}});
if(error)AS.msg=errMsg(error);else if(data&&data.user&&data.user.identities&&!data.user.identities.length)AS={step:0,email:e1,msg:'Un compte existe déjà avec cette adresse : connecte-toi.'};
else if(data&&data.session){AS={step:0};toast('Compte créé')}else AS={step:0,email:e1,msg:"Compte créé ! Clique sur le lien de confirmation reçu par e-mail (regarde aussi les spams), puis reviens te connecter ici."}}catch(x){AS.msg=errMsg(x)}acUI();return}
if(a=='newpw'){const p1=pw();if(!pwOk(p1)){AS.msg='Mot de passe trop faible : 8 caractères minimum, avec une minuscule, une majuscule et un chiffre.';acUI();return}busy('Enregistrement…');try{const {error}=await SB.auth.updateUser({password:p1});if(error)AS.msg=errMsg(error);else{AS={step:0};toast('Mot de passe modifié')}}catch(x){AS.msg=errMsg(x)}acUI();return}
if(a=='back'){AS={step:0,email:AS.email};acUI();return}
if(a=='sync'){cloudPull();return}
if(a=='out'){if(cpt)await cloudPushNow();try{await SB.auth.signOut({scope:'local'})}catch(x){}try{localStorage.removeItem('lift-uid')}catch(x){}SU=null;cst=0;acq=false;acUI();toast('Déconnecté : tes données restent sur cet appareil');return}
if(a=='del'){if(!acq){acq=true;acUI();return}acq=false;try{const {error}=await SB.rpc('delete_my_account');if(error){AS.msg=errMsg(error);acUI();return}}catch(x){AS.msg=errMsg(x);acUI();return}try{await SB.auth.signOut({scope:'local'})}catch(x){}try{localStorage.removeItem('lift-uid')}catch(x){}SU=null;cst=0;acUI();toast('Compte supprimé. Tes données restent sur cet appareil.')}};
$('acc').onclick=$('wacc').onclick=accClick;
$('acc').oninput=$('wacc').oninput=e=>{if(e.target.id=='apw'&&e.target.dataset.neu){const x=$('pwh');if(x)x.innerHTML=pwHint(e.target.value)}};
$('acc').onkeydown=$('wacc').onkeydown=e=>{if(e.key=='Enter'){const b=e.currentTarget.querySelector('.cta');if(b)b.click()}};
$('prok').onclick=()=>$('prsheet').classList.remove('open');
$('data').addEventListener('click',()=>{acq=false;acUI()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(cpt)cloudPushNow()}else if(SU&&linked())cloudPull()});

$('wskip').onclick=()=>{$('wsheet').classList.remove('open');acUI();if(!PF.ob)openOnb()};
sbInit();
// --- mises à jour ---

$('upd').onclick=async()=>{$('upd').textContent='Mise à jour…';try{if(cpt)await cloudPushNow()}catch(e){}try{const rg=await navigator.serviceWorker.getRegistration();if(rg)await rg.update()}catch(e){}location.reload()};
setTimeout(chkUp,2500);document.addEventListener('visibilitychange',()=>{if(!document.hidden)chkUp()});
render();

// ===== Lift 2.5 : muscles travaillés (illustrations originales) =====

// [principaux, secondaires, précision]

// ===== Lift 2.9 : schéma anatomique détaillé (dessin original) =====

document.addEventListener('click',e=>{const b=e.target.closest('[data-mus]');if(b){e.stopPropagation();openMus(b.dataset.mus,b.dataset.mn,b.dataset.mg);return}if(e.target.id=='musok')$('mussheet').classList.remove('open')},true);

// ===== Lift 2.7 : textes explicatifs et vocabulaire =====

(function(){const bub=document.createElement('div');bub.id='tmb';bub.className='tmb';bub.setAttribute('role','tooltip');document.body.appendChild(bub);let cur=null;
const hide=()=>{bub.classList.remove('on');if(cur)cur.classList.remove('on');cur=null;focusZ(null)};
window.focusZ=function(zz){document.querySelectorAll('.mubig svg.body').forEach(sv=>{sv.classList.toggle('focus',!!zz);sv.querySelectorAll('[data-z]').forEach(p=>p.classList.toggle('fz',!!zz&&zz.includes(p.dataset.z)))})};
document.addEventListener('click',e=>{const b=e.target.closest('.tm');if(!b){if(cur&&!e.target.closest('#tmb')){hide();e.stopPropagation();e.preventDefault()}return}e.stopPropagation();e.preventDefault();if(cur===b){hide();return}const g=GL()[b.dataset.tm];if(!g)return;if(cur)cur.classList.remove('on');cur=b;b.classList.add('on');
const zz=GZ()[b.dataset.tm];bub.innerHTML=(zz?`<div class="tmf">${bodySVG(zz,[],'xs')}</div>`:'')+`<b>${g[0]}</b>${g[1]}`;focusZ(zz);bub.classList.add('on');const r=b.getBoundingClientRect(),w=Math.min(300,innerWidth-24);bub.style.width=w+'px';const x=Math.max(12,Math.min(innerWidth-w-12,r.left+r.width/2-w/2));bub.style.left=x+'px';bub.style.setProperty('--ax',(r.left+r.width/2-x)+'px');
const h=bub.offsetHeight;let y=r.top-h-10,up=true;if(y<56){y=r.bottom+10;up=false}bub.style.top=y+'px';bub.classList.toggle('dn',!up);if(window.hap)hap()},true);
addEventListener('scroll',hide,{passive:true,capture:true});})();

// ===== Lift 3.0 : cœur fiabilisé (dates, données, records, progression, export) =====

// 1RM estimé (Epley) de la meilleure série ; poids du corps : reps (+1 rep par 2,5 kg de lest)

// --- échec d'enregistrement : jamais silencieux ---

// --- résumé du mois + cardio dans Progression ---

// --- export CSV ---

// --- import Hevy / Strong ---

// --- rappels dans l'agenda (.ics) ---

var RP=null;

// ===== Lift 2.2 : accueil, séance (ajout + cardio), tutoriel, lexique, ressenti, objectifs =====

// --- phrase d'accueil ---

// --- lexique ---

document.addEventListener('click',e=>{const b=e.target.closest('[data-lx]');if(!b)return;e.stopPropagation();const x=LX()[b.dataset.lx];if(!x)return;$('lxt').textContent=x[0];$('lxd').textContent=x[1];$('lxsheet').classList.add('open')},true);
$('lxok').onclick=()=>$('lxsheet').classList.remove('open');
$('lxall').onclick=()=>{$('lxsheet').classList.remove('open');document.querySelectorAll('.sheet.open').forEach(s=>{if(s.id!='live')s.classList.remove('open')});if(L)return toast('Lexique disponible dans les réglages après la séance');go('r');setTimeout(()=>{const l=$('lexique');l&&l.scrollIntoView({block:'start',behavior:'smooth'})},60)};
// --- objectifs ---

$('objp').onclick=e=>{const b=e.target.closest('[data-tp]');if(!b)return;const id=b.dataset.tp;$('objsheet').classList.remove('open');if(!id||id==(XS.o||'masse'))return;applyObj(id,false);render();if(view=='r'&&window.setR)setR();toast('Objectif : '+OBJS()[id].n+' · programme prêt')};
// --- tutoriel ---

$('op').onclick=e=>{const b=e.target.closest('button');if(!b)return;const pn=$('opn');if(pn)PF.n=cleanT(pn.value).slice(0,20);
if(b.dataset.tp!==undefined){OB.tp=b.dataset.tp;onbR();return}
const o=b.dataset.o,pk=obPick(),N=pk?4:3;
if(o=='prev'){OB.s=Math.max(0,OB.s-1);onbR();return}
if(o=='next'&&OB.s<N-1){OB.s++;onbR();$('op').scrollTop=0;return}
if(!o)return;if(pk)applyObj(OB.tp,true);PF.ob=1;pfS();try{cpush()}catch(x){}$('osheet').classList.remove('open');render();if(pk&&OB.tp=='vide')openEd()};
// --- séance en direct : ajout d'exercice et cardio ---

// --- ressenti après séance ---

