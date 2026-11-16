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
function chips(){$('catf').innerHTML=cats().map(c=>`<button class="chip sm${cat==c?' on':''}" data-cf="${c}" style="--c:${GC[c]||'#646A71'}">${c}</button>`).join('');$('chips').innerHTML=''+(()=>{let lg='';return byG(Object.keys(D).filter(k=>cat=='Tous'||D[k].g==cat)).map(k=>{const h=D[k].g!=lg?`<span class="chg">${D[k].g}</span>`:'';lg=D[k].g;return h+`<button class="chip${sel.includes(k)?' on':''}" data-k="${k}" style="--c:${gcol(k)}">${D[k].sn}</button>`}).join('')})()+'<button class="chip tog" data-n="1">+ Exercice</button>'}
function segs(){$('mseg').className='seg'+(cmp?' dis':'');$('mseg').innerHTML=[['e','1RM'],['w','Charge'],['r','RIR']].map(([m,l])=>`<button data-m="${m}" class="${(cmp?'w':met)==m?'on':''}">${l}</button>`).join('');
$('pseg').innerHTML=[[14,'2S'],[21,'3S'],[99,'Tout']].map(([v,l])=>`<button data-p="${v}" class="${per==v?'on':''}">${l}</button>`).join('')}
function hero(){const h=$('hero');h.parentElement.style.setProperty('--gc',cmp?'#9E2F21':gcol(sel[0]));
if(cmp){h.innerHTML='<span class="pill">Évolution du poids en %</span>'+sel.map((k,j)=>{const a=pts(k),g=(a.at(-1)[1]/a[0][1]-1)*100;return`<div class="crow"><span><i class="dot" style="background:${C[j]}"></i>${D[k].n}</span><b>${g>=0?'+':''}${Math.round(g)} %</b></div>`}).join('');$('kpis').innerHTML='';return}
const k=sel[0],a=pts(k),i=pick&&pick.k==k?pick.i:a.length-1,p=a[i],c=val(p,met),b=val(a[0],met),d=c-b;
const big=met=='r'?'RIR '+R(p[4]):(D[k].bw&&met!='r'&&!p[1]?rtx(p)+'<small> '+(D[k].tm?'s':'reps')+'</small>':f1(c)+'<small> kg'+(met=='e'?' · 1RM estimé':'')+'</small>');
h.innerHTML=`<span class="pill"><em class="gd" style="background:${gcol(k)};margin-right:6px"></em>${D[k].g}</span><div class="hn">${D[k].n}</div><div class="big">${big}</div>
<div class="sub">${f1(p[1])} kg × ${rtx(p)} · RIR ${R(p[4])} · ${p[3]??'–'} séries · ${dl(p[0])}</div>`+(met=='r'?'':`<span class="d${d>0?' up':''}">${d>=0?'▲ +':'▼ '}${f1(d)} kg (${d>=0?'+':''}${Math.round(d/b*100)} %)</span>`)+musCard(k,D[k].n,D[k].g)+tips(k);
const rec=Math.max(...D[k].s.map(x=>x[1])),g=(a.at(-1)[1]/a[0][1]-1)*100,rr=a.filter(x=>x[4]!=null),ra=rr.length?rr.reduce((s,x)=>s+x[4],0)/rr.length:null;
const bwk=D[k].bw&&!D[k].s.some(x=>x[1]),rec2=Math.max(...D[k].s.map(x=>SC(k,x))),g2=(SC(k,a.at(-1))/(SC(k,a[0])||1)-1)*100;$('kpis').innerHTML=`<div class="kpi"><b>${f1(rec2)}${bwk?'':' kg'}</b><span>${bwk?'Record reps':'Record 1RM'} ${lxq('orm')}</span></div><div class="kpi"><b>${g2>=0?'+':''}${Math.round(g2)} %</b><span>Sur la période</span></div><div class="kpi"><b>${ra==null?'–':f1(ra)}</b><span>RIR moyen</span></div>`}
function draw(){const keys=cmp?sel:[sel[0]],m=cmp?'w':met,pl=34,pr=12,pt=14,pb=26;
const S=keys.map((k,j)=>{const a=pts(k).filter(p=>m!='r'||p[4]!=null),b=a.length?val(a[0],m):1;return{k,j,a,v:a.map(p=>cmp?(val(p,m)/b-1)*100:val(p,m))}});
if(!S.some(s=>s.a.length)){$('svg').innerHTML='<text x="180" y="105" text-anchor="middle" font-size="12" fill="#646A71">Pas de RIR renseigné pour cet exercice</text>';PT=[];$('tip').style.display='none';return}
const xs=S.flatMap(s=>s.a.map(p=>+dt(p[0])));let x0=Math.min(...xs),x1=Math.max(...xs);const lx0=x0,lx1=x1;if(x0==x1){x0-=2592e5;x1+=2592e5}const all=S.flatMap(s=>s.v);
let y0=Math.min(...all),y1=Math.max(...all);
if(m=='r'){y0=0;y1=4}else{const q=(y1-y0||1)*.2;y0-=q;y1+=q;if(cmp)y0=Math.min(y0,-2)}
const X=t=>pl+(t-x0)/(x1-x0)*(W-pl-pr),Y=v=>H-pb-(v-y0)/(y1-y0)*(H-pt-pb);
const c0=cmp?C[0]:gcol(keys[0]);let o='<defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+c0+'" stop-opacity=".28"/><stop offset="1" stop-color="'+c0+'" stop-opacity="0"/></linearGradient></defs>';
for(let i=0;i<3;i++){const v=y0+(y1-y0)*i/2,y=Y(v);o+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="#E3E5E1"/><text x="${pl-6}" y="${y+3}" text-anchor="end" font-size="9" fill="#646A71">${cmp?(v>0?'+':'')+Math.round(v)+'%':m=='v'?Math.round(v):f1(v)}</text>`}
o+=lx0==lx1?`<text x="${W/2}" y="${H-6}" font-size="9" fill="#646A71" text-anchor="middle">${dtl(lx0)} · ajoute une séance pour tracer la courbe</text>`:`<text x="${pl}" y="${H-6}" font-size="9" fill="#646A71">${dtl(x0)}</text><text x="${W-pr}" y="${H-6}" font-size="9" fill="#646A71" text-anchor="end">${dtl(x1)}</text>`;
if(cmp&&y0<0&&y1>0)o+=`<line x1="${pl}" x2="${W-pr}" y1="${Y(0)}" y2="${Y(0)}" stroke="#646A71" stroke-dasharray="3 4"/>`;
PT=[];let pk=null;
S.forEach(s=>{const col=cmp?C[s.j]:c0,q=s.a.map((p,i)=>[X(+dt(p[0])),Y(s.v[i])]);
let d='M'+q[0];for(let i=1;i<q.length;i++){const mx=(q[i-1][0]+q[i][0])/2;d+=`C${mx},${q[i-1][1]} ${mx},${q[i][1]} ${q[i]}`}
if(!cmp)o+=`<path d="${d}L${q.at(-1)[0]},${H-pb}L${q[0][0]},${H-pb}Z" fill="url(#g)"/>`;
o+=`<path d="${d}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>`;
q.forEach((c,i)=>{PT.push({k:s.k,i,x:c[0],y:c[1]});const on=pick&&pick.k==s.k&&pick.i==i;if(on)pk=c;
o+=`<circle cx="${c[0]}" cy="${c[1]}" r="${on?6:3.5}" fill="${on?col:'#FFFFFF'}" stroke="${col}" stroke-width="2"/>`})});
if(pk)o=o.replace('</defs>',`</defs><line x1="${pk[0]}" x2="${pk[0]}" y1="${pt}" y2="${H-pb}" stroke="#646A71" stroke-dasharray="3 3"/>`);
$('svg').innerHTML=o;
const tp=$('tip');if(cmp&&pick&&pk){const p=pts(pick.k)[pick.i];tp.style.display='block';tp.style.left=Math.min(88,Math.max(12,pk[0]/W*100))+'%';tp.style.top=pk[1]/H*100+'%';tp.innerHTML=`<b>${D[pick.k].sn}</b> · ${dl(p[0])}<br>${f1(p[1])} kg × ${rtx(p)} · RIR ${R(p[4])}`}else tp.style.display='none'}
function hist(){$('hh').textContent='Historique · '+D[sel[0]].n;$('hist').innerHTML=[...D[sel[0]].s].reverse().map(p=>`<div class="row"><div class="grow"><div class="nm">${dl(p[0])}${mark(sel[0],p)}</div><div class="gp">${f1(p[1])} kg × ${rtx(p)}${p[5]?' ('+p[3]+' séries)':' × '+(p[3]??'–')+' séries'} · RIR ${R(p[4])}</div></div><button class="ed" data-e="${sel[0]}" data-ed="${p[0]}" aria-label="Modifier">✎</button></div>`).join('')+`<button class="ghost" id="mrg">Fusionner avec un autre exercice…</button><button class="ghost" id="del">${dq?'Confirmer la suppression':'Supprimer cet exercice'}</button>`}
function list(){$('list').innerHTML=CATS.map(c=>{const ks=Object.keys(D).filter(k=>D[k].g==c);return ks.length?(`<div class="gh" style="color:${GC[c]}">${c}</div>`+ks.map(k=>{const a=D[k].s,w=a.map(p=>p[1]),mn=Math.min(...w),mx=Math.max(...w),pt=w.map((v,i)=>`${i*60/(w.length-1||1)+2},${22-(v-mn)/(mx-mn||1)*18}`).join(' ');
return`<button class="row${sel.includes(k)?' sel':''}" data-l="${k}"><div class="grow"><div class="nm">${D[k].sn}</div><div class="gp">${D[k].s.length} séance${D[k].s.length>1?'s':''}</div></div><svg viewBox="0 0 64 26" width="64" height="26"><polyline points="${pt}" fill="none" stroke="${gcol(k)}" opacity="${sel.includes(k)?1:.7}" stroke-width="2" stroke-linejoin="round"/></svg><div class="r"><b>${f1(w.at(-1))}</b>${(()=>{const e=w.length>1?w.at(-1)-w.at(-2):null;return e==null?'<span>—</span>':`<span class="${e>0?'up':e<0?'dn':''}">${e>0?'+':e<0?'−':'±'}${f1(Math.abs(e))} kg</span>`})()}</div></button>`}).join('')):''}).join('');if(Object.keys(D).length)$('list').insertAdjacentHTML('afterbegin','<div class="rh"><span>Exercice</span><span>Perf · écart '+lxq('ecart')+'</span></div>')}
function emptyP(){$('catf').innerHTML='';$('chips').innerHTML='<button class="chip tog" data-n="1">+ Exercice</button>';$('hero').innerHTML='<div class="hn">Aucun exercice pour l\'instant</div><div class="sub">Démarre une séance ou ajoute un exercice : ta progression s\'affichera ici.</div>';$('mseg').innerHTML=$('pseg').innerHTML=$('kpis').innerHTML=$('hist').innerHTML='';$('svg').innerHTML='';$('tip').style.display='none';PT=[];$('hh').textContent='Historique';$('list').innerHTML='<div class="gp">Aucun exercice enregistré.</div>'}
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
function regl(ds){const el=$('reg');if(!el)return;if(!ds.length){el.innerHTML='';return}
const mk=d=>{const x=dt(d);return Math.floor((+x-((x.getUTCDay()+6)%7)*864e5)/864e5)},cw=mk(TI),W={};ds.forEach(d=>{const k=mk(d);W[k]=(W[k]||0)+1});
const fw=Math.min(...ds.map(mk)),nw=(cw-fw)/7+1,tot=ds.length,avg=tot/nw,act=Object.keys(W).length;
let st=0;for(let k=cw;k>=fw;k-=7){const n=W[k]||0;if(n>=G())st++;else if(k==cw)continue;else break}
const m30=ds.filter(d=>+dt(TI)-+dt(d)<=27*864e5).length;
const bars=[];for(let i=11;i>=0;i--){const k=cw-i*7;if(k<fw-7*0&&k<fw){bars.push([k,0]);continue}bars.push([k,W[k]||0])}
const lab=k=>{const x=new Date(k*864e5);return x.getUTCDate()+'/'+(x.getUTCMonth()+1)};
el.innerHTML=`<div class="card" style="margin-bottom:12px;padding:16px"><div class="nm" style="font-size:16px;font-weight:600">Régularité</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0"><div><div style="font-size:22px;font-weight:700">${tot}</div><div class="gp">séances au total</div></div><div><div style="font-size:22px;font-weight:700">${m30}</div><div class="gp">sur 4 semaines</div></div><div><div style="font-size:22px;font-weight:700">${avg.toFixed(1).replace('.',',')}</div><div class="gp">par semaine</div></div><div><div style="font-size:22px;font-weight:700">${st}</div><div class="gp">semaines à ${G()}+ d'affilée</div></div></div>
<div style="display:flex;align-items:flex-end;gap:5px;height:64px;position:relative;border-bottom:1px solid var(--line)"><div style="position:absolute;left:0;right:0;bottom:${G()/Math.max(4,G())*100}%;border-top:1px dashed #646A71"></div>${bars.map(([k,n])=>`<div title="Semaine du ${lab(k)} : ${n} séance${n>1?'s':''}" style="flex:1;height:${Math.min(n,Math.max(4,G()))/Math.max(4,G())*100}%;min-height:${n?3:0}px;background:${n>=G()?'#9E2F21':'#C9CDC8'};border-radius:4px 4px 0 0;${k==cw?'outline:1px solid #9E2F21':''}"></div>`).join('')}</div>
<div class="gp" style="display:flex;justify-content:space-between;margin-top:4px"><span>12 sem.</span><span>Objectif : ${G()} par semaine</span><span>Actuelle</span></div><div class="gp" style="margin-top:8px">Semaines avec au moins une séance : ${act} sur ${nw} (${Math.round(act/nw*100)} %)</div></div>`}
function sess(){const ds=[...new Set([...Object.values(D).flatMap(e=>e.s.map(p=>p[0])),...xDates()])].sort().reverse();regl(ds);
$('sess').innerHTML=ds.map(d=>{const ks=Object.keys(D).filter(k=>D[k].s.some(p=>p[0]==d)),dd=dt(d);let tv=0;
let lg='';const rows=byG(ks).map(k=>{const p=D[k].s.find(x=>x[0]==d);tv+=p[5]?p[5].length:(p[3]||0);const gh=D[k].g!=lg?`<div class="sgh"><em class="gd" style="background:${gcol(k)}"></em>${D[k].g}</div>`:'';lg=D[k].g;return gh+`<div class="exw"><button class="ex" data-k="${k}"><span>${D[k].n}${mark(k,p)}</span><b>${f1(p[1])} kg · ${p[5]?rtx(p):(p[3]??'–')+'×'+(p[2]??'–')}</b><span class="rir ${rc(p[4])}" style="margin-left:10px">${R(p[4])}</span></button><button class="ed" data-e="${k}" data-ed="${d}" aria-label="Modifier">✎</button></div>`}).join('');
return`<div class="card sc"><div class="sh"><div><div class="nm">${WD[dd.getUTCDay()]} ${dl(d)}</div><div class="gp">${sessSub(ks.length,tv,d)}</div></div>${SE[d]?`<span class="pill sb">${SE[d]=='Alt'?'Séance alternative':'Séance '+SE[d]}</span>`:''}</div>${rows}${cRows(d)}${fbRow(d)}${NT[d]?`<div class="gp note">${NT[d]}</div>`:''}<button class="ghost" data-ad="${d}">+ Ajouter un exercice</button><button class="ghost" data-dl="${d}">${dqs==d?'Confirmer la suppression':'Supprimer la séance'}</button></div>`}).join('')}
function openAdd(d){if(!Object.keys(D).length){openNew();return}ed=null;nw=false;$('nw').style.display='none';xk=sel[0];const p=D[xk].s.at(-1);F={w:p[1],r:p[2]||10,s:p[3]||3,i:p[4]??2};$('sht').textContent='Ajouter une perf';$('dd').value=d;sl=SE[d]||'';sheet();$('sheet').classList.add('open')}
function go(v){const SY=window.SYM=window.SYM||{};SY[view]=scrollY;document.documentElement.dataset.nav=v=='r'?'push':view=='r'?'pop':'tab';if(v!='r')window.PV=v;view=v;if(window.hdr)hdr();if(v=='r')setR();document.querySelectorAll('.view').forEach(x=>{x.hidden=x.dataset.v!=v});document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v==v));scrollTo(0,v=='r'?0:(SY[v]||0));if(window.cbarSync)cbarSync()}
$('tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.v==view){scrollTo({top:0,behavior:'smooth'});return}go(b.dataset.v)};go('t');
function wkstrip(){const el=$('ws');if(!el)return;const t=dt(TI),mon=new Date(+t-((t.getUTCDay()+6)%7)*864e5),ds=new Set([...Object.values(D).flatMap(e=>e.s.map(p=>p[0])),...xDates()]),L7=['L','M','M','J','V','S','D'];let c=0;
const cells=L7.map((l,i)=>{const d=new Date(+mon+i*864e5).toISOString().slice(0,10),on=ds.has(d);if(on)c++;return`<div class="wd${d==TI?' td':''}"><span>${l}</span><b class="${on?'on':''}">${on?(SE[d]&&SE[d]!='Alt'?SE[d]:'•'):''}</b></div>`}).join('');
el.innerHTML=`<div class="card" style="padding:16px"><div class="nm" style="font-size:16px;font-weight:600">Cette semaine</div><div class="wdr">${cells}</div><div class="gp">${c} séance${c>1?'s':''} sur ${G()} visées</div></div>`}
function lastS(){const el=$('last');if(!el)return;const d=[...new Set(Object.values(D).flatMap(e=>e.s.map(p=>p[0])))].sort().at(-1);if(!d){el.innerHTML='';return}
const ks=Object.keys(D).filter(k=>D[k].s.some(p=>p[0]==d)),dd=dt(d);let tv=0;ks.forEach(k=>{const q=D[k].s.find(x=>x[0]==d);tv+=q[5]?q[5].length:(q[3]||0)});
const rows=byG(ks).slice(0,5).map(k=>{const p=D[k].s.find(x=>x[0]==d);return`<div class="lr"><span><em class="gd" style="background:${gcol(k)}"></em>${D[k].sn}</span><b>${f1(p[1])} kg · ${p[5]?rtx(p):(p[3]??'–')+'×'+(p[2]??'–')}</b></div>`}).join('');
el.innerHTML=`<button class="card lastc" data-go="s"><div class="sh"><div><div class="mut">Dernière séance</div><div class="nm" style="font-size:16px;font-weight:600;margin-top:2px">${WD[dd.getUTCDay()]} ${dl(d)}</div><div class="gp">${ks.length} exercice${ks.length>1?'s':''} · ${tv} série${tv>1?'s':''}</div></div>${SE[d]?`<span class="pill sb">${SE[d]=='Alt'?'Séance alternative':'Séance '+SE[d]}</span>`:''}</div>${rows}${ks.length>5?`<div class="gp" style="margin-top:8px">+ ${ks.length-5} autre${ks.length>6?'s':''}</div>`:''}</button>`}
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
function fclick(e){const b=e.target.closest('button');if(!b)return;
if(b.dataset.tg){togSr();rf();return}
if(b.dataset.sa){const n=+b.dataset.sa;if(n>0&&F.sr.length<20)F.sr.push(F.sr.at(-1));else if(n<0&&F.sr.length>1)F.sr.pop();F.s=F.sr.length;rf();return}
if(b.dataset.sd){const i=+b.dataset.si;F.sr[i]=cl(F.sr[i]+ +b.dataset.sd,'r');rf();return}if(b.dataset.d){F[b.dataset.f]=cl(F[b.dataset.f]+ +b.dataset.d,b.dataset.f);rf()}else if(b.dataset.i!==undefined){F.i=b.dataset.i===''?null:+b.dataset.i;rf()}}
function fchg(e){const t=e.target;if(t.tagName=='INPUT'&&t.dataset.f=='sr'){const v=parseFloat(String(t.value).replace(',','.'));if(!isNaN(v))F.sr[+t.dataset.si]=cl(v,'r');rf();return}if(t.tagName=='INPUT'&&t.dataset.f){const v=parseFloat(String(t.value).replace(',','.'));if(String(t.value).trim()===''&&t.dataset.f!='w')F[t.dataset.f]=null;else if(!isNaN(v))F[t.dataset.f]=cl(v,t.dataset.f);rf()}}
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
function wk(){progExtra();if(!$('wk'))return;const g={};Object.values(D).forEach(e=>e.s.forEach(p=>{const a=(T0-dt(p[0]))/864e5;if(a<0||a>=14||!vol(p))return;const o=g[e.g]||(g[e.g]=[0,0]);o[a<7?0:1]+=vol(p)}));
const rows=CATS.filter(c=>g[c]),mx=Math.max(1,...rows.map(c=>g[c][0]));
$('wk').innerHTML=rows.length?rows.map(c=>{const a=g[c][0],b=g[c][1],d=b?Math.round((a/b-1)*100):null;return`<div class="wr"><span style="color:${GC[c]}">${c}</span><div class="bar"><i style="width:${a/mx*100}%;background:${GC[c]}"></i></div><b>${Math.round(a)} kg</b><em>${d==null?'':(d>=0?'+':'')+d+' %'}</em></div>`}).join('')+'<div class="gp" style="margin-top:6px">Variation vs les 7 jours précédents</div>':'<div class="gp">Aucune séance sur les 14 derniers jours.</div>'}
function toast(m,j){tj=j||null;const t=$('toast');t.innerHTML=m+(j?'<button id="tun">Annuler</button>':'');t.style.display='block';clearTimeout(tt);tt=setTimeout(()=>t.style.display='none',6500)}
$('toast').onclick=e=>{if(e.target.id=='tun'&&tj){restore(tj);tj=null;$('toast').style.display='none';if($('esheet').classList.contains('open')){E={v:'l'};edR()}}};
function openMerge(){const k=sel[0],ks=Object.keys(D).filter(x=>x!=k);if(!ks.length)return;$('mtx').textContent='Les perfs de « '+D[k].n+' » seront déplacées dans l\'exercice choisi (même date : celui-ci est conservé).';
$('mt').innerHTML=CATS.map(c=>{const a=ks.filter(x=>D[x].g==c);return a.length?`<optgroup label="${c}">`+a.map(x=>`<option value="${x}">${D[x].n}</option>`).join('')+'</optgroup>':''}).join('');$('msheet').classList.add('open')}
$('mno').onclick=()=>$('msheet').classList.remove('open');
$('mok').onclick=()=>{const a=sel[0],b=$('mt').value;if(!D[b]||a==b)return;const j=snap();D[a].s.forEach(p=>{if(!D[b].s.some(x=>x[0]==p[0]))D[b].s.push(p)});D[b].s.sort((x,y)=>x[0]<y[0]?-1:1);delete D[a];sel=[b];pick=null;$('msheet').classList.remove('open');save();render();toast('Exercices fusionnés',j)};
$('data').onclick=()=>{$('dtx').value=snap();rq=false;$('drest').textContent='Restaurer depuis ce texte';$('dmut').textContent=(BK?'Dernière copie : '+new Date(BK).toLocaleDateString('fr-FR'):'Aucune sauvegarde copiée pour l\'instant')+(sy==1?' · Synchronisé avec Claude':sy==2?' · Synchro en échec':'');$('dsheet').classList.add('open')};
$('dcopy').onclick=async()=>{const t=$('dtx');t.value=snap();t.select();let ok=false;try{await navigator.clipboard.writeText(t.value);ok=true}catch(e){try{ok=document.execCommand('copy')}catch(e2){}}if(ok){BK=Date.now();save();render()}$('dcopy').textContent=ok?'Copié ✓':'Texte sélectionné : copie-le à la main';setTimeout(()=>$('dcopy').textContent='Copier',2500)};
$('drest').onclick=()=>{let o;try{o=JSON.parse($('dtx').value)}catch(e){toast('Texte invalide');return}
if(!o||!o.D||typeof o.D!='object'||!Object.keys(o.D).length||!Object.values(o.D).every(e=>e&&e.n&&e.g&&Array.isArray(e.s)&&e.s.length)){toast('Sauvegarde invalide');return}
if(!rq){rq=true;$('drest').textContent='Confirmer le remplacement des données';return}
const j=snap();restore(JSON.stringify({D:o.D,SE:o.SE||{},NT:o.NT||{},DL:o.DL||[],P:o.P}));rq=false;$('dsheet').classList.remove('open');toast('Données restaurées',j)};
$('dno').onclick=()=>$('dsheet').classList.remove('open');
function openPick(){const ks=Object.keys(PLAN);$('plist').innerHTML=(ks.length?ks.map(c=>{const P=PLAN[c],ds=Object.keys(SE).filter(d=>SE[d]==c).sort(),l=ds.at(-1);return`<button class="row" data-c="${c}"><div class="grow"><div class="nm">Séance ${c} · ${esc(P.t)}</div><div class="gp">${P.ex.length} exercice${P.ex.length>1?'s':''} · ~${estM(P)} min${l?' · dernière fois '+dl(l):''}</div><div class="gp" style="margin-top:4px">${P.ex.map(e=>esc(e.sn)).join(' · ')}</div></div><b>▶</b></button>`}).join(''):'<div class="gp" style="margin:8px 0">Aucune séance dans ton programme pour l\'instant.</div>')+'<button class="ghost" data-pe="1">Modifier le programme</button>';$('psheet').classList.add('open')}
$('live0').onclick=openPick;$('pno').onclick=()=>$('psheet').classList.remove('open');
$('plist').onclick=e=>{const b=e.target.closest('button');if(b){$('psheet').classList.remove('open');if(b.dataset.pe)openEd();else startLive(b.dataset.c)}};
const loadF=()=>{F={i:L.it[L.i].x}},stF=()=>{if(L&&L.it[L.i])L.it[L.i].x=F.i};
const mkSt=(w,r,s)=>Array.from({length:Math.max(1,s||1)},()=>({w,r,d:false})),dnS=t=>{const a=t.st.filter(x=>x.d);return a.length?a:t.st};
const perfOf=(t,d)=>{const a=dnS(t),ws=a.map(x=>x.w),rs=a.map(x=>x.r),w=Math.max(...ws),p=[d,w,Math.min(...rs),a.length,t.x],dw=ws.some(v=>v!=w);if(dw||rs.some(r=>r!=rs[0])){p.push(rs);if(dw)p.push(ws)}return p};
const psug=t=>{const o=D[t.k],p=o&&o.s.at(-1),e=t.e,rr=e.rl==e.rh?e.rl:e.rl+'-'+e.rh;if(p&&p[0]>PS)return p[2]>=e.hi&&(p[4]==null||p[4]>=e.rl)?`Suggestion : ${p[2]} reps atteintes, passe à ${f1(p[1]+e.inc)} kg et repars à ${e.lo} reps`:`Vise ${e.hi} reps à RIR ${e.rl}+ avant d'augmenter la charge`;return e.w?`Charge de départ : ${f1(e.w)} kg · ajuste pour finir à RIR ${rr}`:`Choisis une charge qui te laisse finir tes séries à RIR ${rr}`};
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
let DB=null,sy=0,pt=null,LD=null,lsig='',lpt=null;try{LD=JSON.parse(localStorage.getItem('lift-live'))}catch(e){}
const ldStale=d=>!d||!d.it||Date.now()-d.upd>1296e5||!d.it.some(t=>t.ok)||d.it.filter(t=>t.ok).every(t=>D[t.k]&&D[t.k].s.some(p=>p[0]==d.d));
if(ldStale(LD)){LD=null;try{localStorage.removeItem('lift-live')}catch(e){}}
function ldPush(v){if(!DB)return;clearTimeout(lpt);lpt=setTimeout(async()=>{try{await DB.doc('lift/live').set({json:v,upd:Date.now()})}catch(e){}},1200)}
function lsave(){if(!L)return;try{stF()}catch(e){return}const k=JSON.stringify(L,(a,v)=>a=='upd'||a=='el'?undefined:v);if(k==lsig)return;lsig=k;L.upd=Date.now();L.el=Date.now()-L.t0;const j=JSON.stringify(L);try{localStorage.setItem('lift-live',j)}catch(e){}ldPush(j)}
function ldClear(){LD=null;lsig='';try{localStorage.removeItem('lift-live')}catch(e){}if(DB){clearTimeout(lpt);DB.doc('lift/live').set({json:null,upd:Date.now()}).catch(()=>{})}}
function resumeLive(){if(!LD)return;L=JSON.parse(JSON.stringify(LD));LD=null;L.t0=Date.now()-(L.el||0);L.it.forEach(t=>{if(!t.st)t.st=mkSt(t.w||0,t.r||t.e.lo,t.s||t.e.s)});lq=false;rest=0;wlOn();loadF();$('live').classList.add('open');liveR();clearInterval(tmr);tmr=setInterval(tick,500)}
async function pullLive(){if(!DB||L)return;try{const r=await DB.doc('lift/live').get(),o=r.exists?r.data():null;if(!o)return;const lu=LD?LD.upd:0;if(o.json&&o.upd>lu){const d=JSON.parse(o.json);if(!ldStale(d)){LD=d;try{localStorage.setItem('lift-live',o.json)}catch(e){}nx()}}else if(!o.json&&o.upd>lu&&LD){LD=null;try{localStorage.removeItem('lift-live')}catch(e){}nx()}}catch(e){}}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&L){lsave();if(DB&&lsig){clearTimeout(lpt);DB.doc('lift/live').set({json:localStorage.getItem('lift-live'),upd:Date.now()}).catch(()=>{})}}});
window.addEventListener('pagehide',()=>{lsave()});
const syncUI=()=>{$('data').textContent='Données';$('data').classList.toggle('sy',sy==1)};
function push(){if(!DB)return;clearTimeout(pt);pt=setTimeout(async()=>{try{await DB.doc('lift/state').set({json:snap(),updated:TS});await DB.doc('backups/'+TI).set({json:BKP[TI]||snap(),updated:TS});sy=1}catch(e){sy=2}syncUI()},800)}
async function pull(){if(!DB)return;try{const r=await DB.doc('lift/state').get(),o=r.exists?r.data():null;
if(o&&o.json&&o.updated>TS){const x=mg(JSON.parse(o.json));if(x&&x.D&&Object.keys(x.D).length){D=x.D;SE=x.SE;NT=x.NT;if(x.XS)XS=x.XS;DL=x.DL;TS=o.updated;store();pick=null;if(!D[sel[0]])sel=[Object.keys(D)[0]];render()}}
else if(!o||o.updated<TS){if(FR&&!o){sy=1;syncUI();return}if(!TS)TS=Date.now();await DB.doc('lift/state').set({json:snap(),updated:TS});store()}
sy=1}catch(e){sy=2}syncUI();loadBk();pullLive()}
(async()=>{try{if(window.claude&&claude.use)DB=await claude.use('db')}catch(e){}if(DB){pull();document.addEventListener('visibilitychange',()=>{if(!document.hidden)pull()})}})();
if(view!='r')$('hi').textContent=greet();
let WL=null,ra=true,snz=0,bkq=null,bctl=null;try{ra=localStorage.getItem('lift-ra')!=='0';snz=+localStorage.getItem('lift-snz')||0}catch(e){}
const rsec=t=>{const m=String(t||'').match(/(\d+)\s*min(?:\s*(\d+))?/);return m?+m[1]*60+(m[2]?+m[2]:0):0};
async function wlOn(){try{if(navigator.wakeLock&&!WL){WL=await navigator.wakeLock.request('screen');WL.addEventListener('release',()=>{WL=null})}}catch(e){WL=null}}
function wlOff(){try{WL&&WL.release()}catch(e){}WL=null}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&L)wlOn()});
// sauvegardes (versions quotidiennes)
function renderBk(){const ks=Object.keys(BKP).sort().reverse();$('bkl').innerHTML=ks.length?ks.map(k=>{let n=0;try{n=new Set(Object.values(JSON.parse(BKP[k]).D).flatMap(e=>e.s.map(p=>fx(p[0])))).size}catch(e){}return`<div class="row" style="margin:6px 0"><div class="grow"><div class="nm">${dl(k)}</div><div class="gp">${n} séance${n>1?'s':''}</div></div><button class="mini" style="float:none" data-b="${k}">${bkq==k?'Confirmer':'Restaurer'}</button></div>`}).join(''):'<div class="gp" style="margin-top:6px">Pas encore de version enregistrée.</div>'}
async function loadBk(){if(!DB)return;try{const c=await DB.collection('backups').get(),ids=c.docs.map(d=>d.id).sort();c.docs.forEach(d=>{const x=d.data();if(x&&x.json&&!BKP[d.id])BKP[d.id]=x.json});while(ids.length>30){const id=ids.shift();await DB.doc('backups/'+id).delete();delete BKP[id]}}catch(e){}renderBk()}
$('bkl').onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.b;if(bkq!=k){bkq=k;renderBk();return}const j=snap(),v=BKP[k];bkq=null;restore(v);$('dsheet').classList.remove('open');toast('Version du '+dl(k)+' restaurée',j)};
$('dfile').onclick=async()=>{const name='lift-sauvegarde-'+TI+'.json',data=snap();let ok=false;
try{const dn=window.claude&&await claude.use('downloads');if(dn){await dn.save({filename:name,data});ok=true}}catch(e){}
if(!ok){try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download=name;document.body.appendChild(a);a.click();a.remove();ok=true}catch(e){}}
if(ok){BK=Date.now();save();render()}toast(ok?'Fichier prêt':'Téléchargement impossible : utilise « Copier »')};
$('dimpb').onclick=()=>$('dimp').click();
$('dimp').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{$('dtx').value=await f.text();rq=false;$('drest').textContent='Restaurer depuis ce texte';toast('Fichier chargé : appuie sur « Restaurer »');const dv=document.querySelector('details.adv');if(dv)dv.open=true}catch(x){toast('Lecture impossible')}e.target.value=''};
// prochaine séance + allègement
function weekN(){const t=new Date(TI),mon=new Date(+t-((t.getUTCDay()+6)%7)*864e5),ds=new Set();Object.values(D).forEach(e=>e.s.forEach(p=>{const x=dt(p[0]);if(x>=mon&&x<=t)ds.add(p[0])}));xDates().forEach(d=>{const x=dt(d);if(x>=mon&&x<=t)ds.add(d)});return ds.size}
function nxt(){const q=Object.keys(PLAN),ds=Object.keys(SE).filter(d=>q.includes(SE[d])).sort(),l=ds.length?SE[ds.at(-1)]:null;return q[(q.indexOf(l)+1)%q.length]}
const stags=()=>{const pk=PK();return Object.keys(D).filter(k=>pk.has(k)&&stag(k))};
function alleg(){if(Date.now()<snz)return'';if(DL.length&&(T0-dt(DL[DL.length-1]))/864e5<21)return'';const all=Object.values(D).flatMap(e=>e.s.map(p=>p[0])).sort(),ref=DL.length?DL[DL.length-1]:all[0];if(!ref)return'';const wn=Math.floor((T0-dt(ref))/(7*864e5)),st=stags();if(wn<6&&st.length<3)return'';
const why=[];if(wn>=6)why.push(wn+' semaines depuis '+(DL.length?"ta dernière semaine d'allègement":'ton premier entraînement'));if(st.length>=3)why.push(st.length+' exercices stagnent ('+st.slice(0,3).map(k=>D[k].sn).join(', ')+')');
return`<div class="nxl"><span><b>Allègement conseillé</b> ${lxq('alg')} · ${why[0]}. Charges −10 %, RIR 3.</span><span class="nxa"><button data-n="dl">C'est fait</button><button data-n="sn">Plus tard</button></span></div>`}
function nx(){const c=nxt(),P=PLAN[c],n=weekN(),g=G();const rs=LD&&!L?`<div class="nx-res" style="border:1px solid var(--acc,#9E2F21);border-radius:14px;padding:12px;margin-bottom:12px"><div class="nx-t">Séance ${LD.lab||''} en cours</div><div class="gp">${LD.it.filter(t=>t.ok).length}/${LD.it.length} exercices validés · ${dl(LD.d)} · non enregistrée</div><div style="display:flex;gap:8px;margin-top:10px"><button class="cta" style="margin:0;flex:2" data-n="res">Continuer la séance</button><button class="ghost" style="margin:0;width:auto;flex:1" data-n="aban">Abandonner</button></div></div>`:'';
$('nx').innerHTML=rs+(P?`<div class="mut">Prochaine séance${XS.o&&XS.o!='masse'?' · '+OBJS()[XS.o].n.toLowerCase():''}</div><div class="nx-t">Séance ${c} · ${esc(P.t)}</div><div class="gp">${P.ex.length} exercice${P.ex.length>1?'s':''} · ~${estM(P)} min</div>
<div style="display:flex;gap:8px;margin-top:12px"><button class="cta" style="margin:0;flex:2" data-n="${c}">▶ Démarrer la séance ${c}</button><button class="ghost" style="margin:0;width:auto;flex:1" data-n="x">Autre…</button></div>`:`<div class="nx-t">Crée ton programme</div><div class="gp">Ajoute tes séances et tes exercices pour pouvoir démarrer.</div>`)+(P?'':`<button class="cta" data-n="pe">Créer mon programme</button>`)+(AI?`<button class="ghost" style="margin:0" data-n="bl">Bilan de la semaine</button>`:'')+alleg()}
$('nx').onclick=e=>{const b=e.target.closest('button');if(!b)return;const n=b.dataset.n;if(n=='res')resumeLive();else if(n=='aban'){if(confirm('Abandonner cette séance non enregistrée ?')){ldClear();nx()}}else if(n=='x')openPick();else if(n=='bl')bilan();else if(n=='dl'){DL.push(TI);save();nx()}else if(n=='sn'){snz=Date.now()+7*864e5;try{localStorage.setItem('lift-snz',snz)}catch(x){}nx()}else if(n=='pe')openEd();else if(PLAN[n])startLive(n)};
// bilan de la semaine (Claude)
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
$('bre').onclick=bilan;$('bno').onclick=()=>{if(bctl)bctl.abort();$('bsheet').classList.remove('open')};
$('data').addEventListener('click',()=>{bkq=null;renderBk()});
if(!BKP[TI])dayBk();
$('dd').max=TI;
function openEdit(k,d){const p=D[k]&&D[k].s.find(x=>x[0]==d);if(!p)return;nw=false;$('nw').style.display='none';ed={k,d};xk=k;F={w:p[1],r:p[2],s:p[3],i:p[4],sr:p[5]?p[5].slice():null};pdq=false;$('sht').textContent='Modifier la perf';$('dd').value=d;sl=SE[d]||'';sheet();$('sheet').classList.add('open')}
$('pdel').onclick=()=>{if(!ed)return;if(!pdq){pdq=true;sheet();return}const j=snap(),o=D[ed.k];o.s=o.s.filter(p=>p[0]!=ed.d);
if(!o.s.length){if(Object.keys(D).length<2){restore(j);pdq=false;toast('Impossible de supprimer la dernière perf');return}delete D[ed.k]}
if(!Object.values(D).some(e=>e.s.some(p=>p[0]==ed.d))){delete SE[ed.d];delete NT[ed.d]}
if(!D[sel[0]])sel=[Object.keys(D)[0]];ed=null;pdq=false;pick=null;save();$('sheet').classList.remove('open');render();toast('Perf supprimée',j)};
function openNew(){ed=null;nw=true;nc=cat!='Tous'?cat:'Pectoraux';F={w:20,r:10,s:3,i:2};$('dd').value=TI;sl=SE[TD]||'';$('sht').textContent='Nouvel exercice';$('nm').value='';$('nw').style.display='block';sheet();$('sheet').classList.add('open')}
$('catf').onclick=e=>{const c=e.target.dataset.cf;if(!c)return;cat=c;pick=null;if(!cmp&&c!='Tous'&&D[sel[0]].g!=c)sel=[Object.keys(D).find(k=>D[k].g==c)];render()};
$('newx').onclick=openNew;
$('cats').onclick=e=>{if(e.target.dataset.c){nc=e.target.dataset.c;sheet()}};
$('hist').onclick=e=>{const eb=e.target.closest('.ed');if(eb){openEdit(eb.dataset.e,eb.dataset.ed);return}if(e.target.closest('#mrg')){openMerge();return}if(!e.target.closest('#del'))return;if(!dq){dq=true;hist();return}if(Object.keys(D).length<2)return;const j=snap();delete D[sel[0]];sel=[Object.keys(D)[0]];dq=false;pick=null;save();render();toast('Exercice supprimé',j)};
// --- rappel de sauvegarde ---
let bsn=0;try{bsn=+localStorage.getItem('lift-bsn')||0}catch(e){}
function bkw(){const el=$('bkw');if(!el)return;const n=new Set(Object.values(D).flatMap(e=>e.s.map(p=>p[0]))).size,old=!BK||Date.now()-BK>12096e5;if(!n||!old||Date.now()<bsn||(SU&&cst==1)){el.innerHTML='';return}
const dj=BK?Math.floor((Date.now()-BK)/864e5):null;el.innerHTML=`<div class="bkl"><button class="bkg" data-b="go"><b>Sauvegarde à faire</b><span>${n} séance${n>1?'s':''} seulement sur cet appareil${dj==null?'':' · dernière copie il y a '+dj+' j'}</span><i>›</i></button><button class="bkx" data-b="sn" aria-label="Me le rappeler plus tard">✕</button></div>`}
$('bkw').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.b=='go')$('data').click();else{bsn=Date.now()+3*864e5;try{localStorage.setItem('lift-bsn',bsn)}catch(x){}bkw()}};
// --- éditeur de programme ---
let E={v:'l'};
const RST=["1 min","1 min 15","1 min 30","2 min","2 min 30","3 min","4 min","5 min"],estM=P=>Math.round(5+P.ex.reduce((a,e)=>a+(e.c?e.min*60:e.s*(rsec(e.rest)+45)),0)/60),cleanT=s=>String(s||'').replace(/[<>&"]/g,'').trim();
function openEd(){E={v:'l'};edR();$('esheet').classList.add('open')}
const erow=(l,f,v)=>`<div class="fr"><span>${l}</span><div class="st"><button data-xf="${f}" data-d="-1">−</button><b>${v}</b><button data-xf="${f}" data-d="1">+</button></div></div>`;
function edR(){const el=$('ep');
if(E.v=='l'){const ks=Object.keys(PLAN);el.innerHTML=`<div class="lh"><b>Mon programme</b><button class="x" data-a="close">✕</button></div>`+(ks.length?ks.map(c=>`<button class="row" data-s="${c}"><div class="grow"><div class="nm">Séance ${c} · ${esc(PLAN[c].t)}</div><div class="gp">${PLAN[c].ex.length} exercice${PLAN[c].ex.length>1?'s':''} · ~${estM(PLAN[c])} min</div></div><b>✎</b></button>`).join(''):'<div class="gp" style="margin:8px 0">Aucune séance pour l\'instant : ajoute la première.</div>')+`<button class="cta" data-a="adds">+ Ajouter une séance</button><div class="fr" style="margin-top:8px"><span>Objectif de séances par semaine</span><div class="st"><button data-g="-1">−</button><b>${G()}</b><button data-g="1">+</button></div></div><button class="ghost" data-a="tpl">Repartir d'un modèle…</button><button class="ghost" data-a="close">Fermer</button>`}
else if(E.v=='t'){el.innerHTML=`<div class="lh"><b>Choisir un modèle</b><button class="x" data-a="back">✕</button></div><div class="gp" style="margin-bottom:10px">Le modèle remplace ton programme actuel. Ton historique de séances est conservé.</div>`+Object.keys(TPL).map(k=>`<button class="row${E.q==k?' sel':''}" data-tp="${k}"><div class="grow"><div class="nm">${TPL[k].n}</div><div class="gp">${TPL[k].d}</div></div><b>${E.q==k?'Confirmer':'›'}</b></button>`).join('')+`<button class="ghost" data-a="back">← Retour au programme</button>`}
else if(E.v=='s'){const P=PLAN[E.c];el.innerHTML=`<div class="lh"><b>Séance ${E.c}</b><button class="x" data-a="back">✕</button></div><input class="tx" id="est" maxlength="34" placeholder="Nom de la séance (ex. Haut du corps)" value="${esc(P.t)}">`+(P.ex.length?P.ex.map((e,i)=>`<div class="exw"><button class="ex" data-x="${i}"><span><em class="gd" style="background:${GC[e.g]||'#9E2F21'}"></em>${esc(e.n)}<i>${e.s} × ${e.lo}-${e.hi} · RIR ${e.rl==e.rh?e.rl:e.rl+'-'+e.rh} · repos ${e.rest}</i></span></button><button class="ed" data-up="${i}" aria-label="Monter">↑</button><button class="ed" data-dn="${i}" aria-label="Descendre">↓</button><button class="ed" data-rm="${i}" aria-label="Retirer">✕</button></div>`).join(''):'<div class="gp" style="margin:8px 0">Aucun exercice dans cette séance.</div>')+`<button class="cta" data-a="addx">+ Ajouter un exercice</button><button class="ghost" data-a="dels">${E.q=='del'?'Confirmer la suppression de la séance':'Supprimer cette séance'}</button><button class="ghost" data-a="back">← Retour au programme</button>`}
else{const x=E.x,nm=[...new Set([...Object.values(D).map(e=>e.n),...Object.values(TPL).flatMap(T=>Object.values(T.P).flatMap(P=>P.ex.map(e=>e.n)))])];
el.innerHTML=`<div class="lh"><b>${E.i==null?'Nouvel exercice':'Modifier l\'exercice'}</b><button class="x" data-a="backs">✕</button></div><input class="tx" id="exn" list="exl" maxlength="40" placeholder="Nom de l'exercice" value="${esc(x.n)}"><datalist id="exl">${nm.map(n=>`<option value="${esc(n)}">`).join('')}</datalist><div class="cats">${CATS.map(c=>`<button data-xg="${c}" class="${x.g==c?'on':''}">${c}</button>`).join('')}</div>`+erow('Séries','s',x.s)+erow('Reps minimum','lo',x.lo)+erow('Reps maximum','hi',x.hi)+erow('RIR visé (min)','rl',x.rl)+erow('RIR visé (max)','rh',x.rh)+`<div class="fr"><span>Repos</span><div class="cats" style="padding:0;justify-content:flex-end">${RST.map(r=>`<button data-xr="${r}" class="${x.rest==r?'on':''}">${r.replace(' min','\'')}</button>`).join('')}</div></div><div class="fr"><span>Charge de départ (kg, facultatif)</span><input class="num" type="number" inputmode="decimal" step="any" id="exw" value="${x.w||''}" placeholder="–"></div><div class="fr"><span>Palier d'augmentation</span><div class="cats" style="padding:0">${[1,2,2.5,5].map(v=>`<button data-xi="${v}" class="${x.inc==v?'on':''}">${f1(v)} kg</button>`).join('')}</div></div><button class="cta" data-a="savex">Enregistrer l'exercice</button><button class="ghost" data-a="backs">Annuler</button>`}}
const syncX=()=>{const a=$('exn'),b=$('exw');if(a)E.x.n=a.value;if(b){const v=parseFloat(String(b.value).replace(',','.'));E.x.w=isNaN(v)?0:cl(v,'w')}};
function saveX(){const P=PLAN[E.c],x=E.x,nm=cleanT(x.n).slice(0,40);if(!nm){$('exn').focus();return false}const lo=nm.toLowerCase(),old=E.i!=null?P.ex[E.i]:null;let k=old&&old.n.toLowerCase()==lo?old.k:Object.keys(D).find(q=>D[q].n.toLowerCase()==lo);
if(!k)Object.values(TPL).forEach(T=>Object.values(T.P).forEach(S=>S.ex.forEach(e=>{if(!k&&e.n.toLowerCase()==lo)k=e.k})));if(!k)Object.values(PLAN).forEach(S=>S.ex.forEach(e=>{if(!k&&e.n.toLowerCase()==lo)k=e.k}));if(!k)k='x'+Date.now();
if(P.ex.some((e,i)=>e.k==k&&i!==E.i)){toast('Cet exercice est déjà dans la séance');return false}
const o={k,n:nm,sn:D[k]?D[k].sn:(nm.length>18?nm.slice(0,17)+'…':nm),g:D[k]?D[k].g:x.g,s:x.s,lo:x.lo,hi:x.hi,rl:x.rl,rh:x.rh,rest:x.rest,w:x.w||0,inc:x.inc,ss:old?old.ss:undefined};
if(E.i==null)P.ex.push(o);else P.ex[E.i]=o;save();E={v:'s',c:E.c};return true}
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
$('cfx').onclick=async e=>{const b=e.target.closest('button');if(!b||!CF)return;const c=b.dataset.cf,x=CF;$('csheet').classList.remove('open');CF=null;
if(c=='acc'){applyRemote(x.rd,x.rts);setLinked();cst=1;LS=Date.now();acUI();toast('Données du compte chargées')}else if(c=='dev'){TS=Date.now();store();setLinked();await cloudPushNow();toast('Données de cet appareil envoyées sur le compte')}};
function acUI(){const wo=$('wsheet').classList.contains('open'),el=wo?$('wacc'):$('acc');$(wo?'acc':'wacc').innerHTML='';if(el){let o='';
if(!SB)o=`<div class="gp">${sbTried?'Compte indisponible pour le moment (pas de connexion internet ?).':'Chargement…'}</div>`;
else if(SU&&AS.step!='rec'&&AS.step!='chpw')o=`<div class="gp">Connecté : <b style="color:var(--tx)">${esc(SU.email||'')}</b></div><div class="gp" style="margin-top:4px">${cst==1?'✓ Synchronisé'+(LS?' à '+hm(LS):''):cst==3?'Synchronisation…':cst==2?'Synchronisation en échec : nouvel essai au prochain changement':''}</div><button class="ghost" data-ac="sync">Synchroniser maintenant</button><button class="ghost" data-ac="chpw">Changer de mot de passe</button><button class="ghost" data-ac="out">Se déconnecter</button><button class="ghost" data-ac="del">${acq?'Confirmer : supprimer le compte et ses données en ligne':'Supprimer mon compte'}</button>`;
else if(SU&&(AS.step=='rec'||AS.step=='chpw'))o=`<div class="gp">Choisis ton nouveau mot de passe.</div>${pwBox('new-password','Nouveau mot de passe',1)}<button class="cta" data-ac="newpw">Enregistrer le mot de passe</button>${AS.step=='chpw'?'<button class="ghost" data-ac="back">Annuler</button>':''}`;
else if(!SU&&AS.step=='new')o=`<div class="gp">Crée ton compte : tu recevras un e-mail pour confirmer ton adresse.</div><input class="tx" id="aem" type="email" inputmode="email" autocomplete="email" placeholder="Adresse e-mail" value="${esc(AS.email||'')}">${pwBox('new-password','Mot de passe',1)}<button class="cta" data-ac="signup">Créer mon compte</button><button class="ghost" data-ac="back">J'ai déjà un compte</button>`;
else if(!SU)o=`<div class="gp">Facultatif : connecte-toi pour retrouver tes séances sur tous tes appareils et ne plus les perdre.</div><input class="tx" id="aem" type="email" inputmode="email" autocomplete="email" placeholder="Adresse e-mail" value="${esc(AS.email||'')}">${pwBox('current-password','Mot de passe')}<button class="cta" data-ac="login">Se connecter</button><button class="ghost" data-ac="new">Créer un compte</button><button class="ghost" data-ac="forgot">Mot de passe oublié ?</button>`;
o+=(AS.msg?`<div class="tip2">${esc(AS.msg)}</div>`:'')+(AS.unconf?'<button class="ghost" data-ac="resend">Renvoyer l\'e-mail de confirmation</button>':'')+`<button class="ghost" data-ac="priv">Confidentialité</button>`;el.innerHTML=o}
$('data').classList.toggle('sy',!!(SU&&cst==1)||sy==1);bkw()}
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
function openWelcome(){$('wsheet').classList.add('open');acUI()}
function welDone(){if(!$('wsheet').classList.contains('open'))return;$('wsheet').classList.remove('open');acUI();if(!PF.ob)openOnb()}
$('wskip').onclick=()=>{$('wsheet').classList.remove('open');acUI();if(!PF.ob)openOnb()};
sbInit();
// --- mises à jour ---
async function chkUp(){try{const r=await fetch(location.pathname+'?v='+Date.now(),{cache:'no-store'}),t=await r.text(),m=t.match(/const APPV='([^']+)'/);if(m&&m[1]!=APPV)$('upd').style.display='block'}catch(e){}}
$('upd').onclick=async()=>{$('upd').textContent='Mise à jour…';try{if(cpt)await cloudPushNow()}catch(e){}try{const rg=await navigator.serviceWorker.getRegistration();if(rg)await rg.update()}catch(e){}location.reload()};
setTimeout(chkUp,2500);document.addEventListener('visibilitychange',()=>{if(!document.hidden)chkUp()});
render();

function byG(ks){const F=['Pectoraux','Épaules','Dos','Bras','Jambes','Abdos'],o=c=>{const i=F.indexOf(c);return i<0?99:i};return ks.slice().sort((a,b)=>o(D[a].g)-o(D[b].g))}

// ===== Lift 2.5 : muscles travaillés (illustrations originales) =====
function MZ(){return{
pecs:["Pectoraux","la poitrine, qui pousse les bras vers l'avant"],
delt_ant:["Avant des épaules","lève le bras devant toi"],
delt_lat:["Côté des épaules","élargit la carrure en levant le bras sur le côté"],
delt_post:["Arrière des épaules","tire le bras vers l'arrière et redresse la posture"],
biceps:["Biceps","l'avant du bras, qui plie le coude"],
triceps:["Triceps","l'arrière du bras, qui tend le coude"],
avbras:["Avant-bras","la force de la poigne"],
abdos:["Abdominaux","gainent le ventre et enroulent le buste"],
obliques:["Obliques","les côtés de la taille, qui stabilisent le buste"],
dorsaux:["Grands dorsaux","le « V » du dos, qui tire les bras vers le bas et vers toi"],
haut_dos:["Haut du dos","trapèzes et rhomboïdes, qui resserrent les omoplates"],
lombaires:["Lombaires","le bas du dos, qui le garde droit"],
fessiers:["Fessiers","étendent la hanche, moteur des poussées de jambes"],
quads:["Quadriceps","l'avant de la cuisse, qui tend le genou"],
ischios:["Ischio-jambiers","l'arrière de la cuisse, qui plie le genou"],
mollets:["Mollets","font monter sur la pointe des pieds"],
add:["Adducteurs","l'intérieur de la cuisse, qui rapproche les jambes"]}}
// [principaux, secondaires, précision]
function MX(){const P='pecs',DA='delt_ant',DL='delt_lat',DP='delt_post',BI='biceps',TR='triceps',AV='avbras',AB='abdos',OB='obliques',DO='dorsaux',HD='haut_dos',LO='lombaires',FE='fessiers',QU='quads',IS='ischios',MO='mollets';return{
dcs:[[P],[DA,TR],"Le guidage de la Smith te laisse pousser lourd en sécurité."],
dc:[[P],[DA,TR],"Le mouvement de base pour la poitrine."],
ih:[[P],[DA,TR],"La pente du banc vise surtout le haut des pectoraux."],
pcb:[[P],[DA],"Ramener les mains de bas en haut cible le haut des pectoraux."],
pomp:[[P],[TR,DA,AB],"Garde le corps gainé, bien aligné."],
dips:[[P,TR],[DA],"Penche-toi en avant pour les pectoraux, reste droit pour les triceps."],
ppi:[[P,DA],[TR],"Pieds surélevés : plus de travail pour le haut des pectoraux et les épaules."],
tv:[[DO],[BI,HD],"Tire les coudes vers les hanches, la poitrine sortie."],
tvs:[[DO],[BI],"Prise serrée : plus d'amplitude pour les dorsaux."],
th:[[HD,DO],[BI,DP],"Serre les omoplates en fin de mouvement."],
rb:[[DO,HD],[BI,LO,DP],"Dos bien droit : les lombaires travaillent pour le tenir."],
trl:[[DO],[BI,HD],"Le lest rend chaque répétition plus dure."],
trac:[[DO],[BI,HD],"Le grand classique pour élargir le dos."],
chin:[[DO,BI],[HD],"Paumes vers toi : les biceps participent davantage."],
rinv:[[HD,DO],[BI,DP],"Plus tes pieds sont loin, plus c'est dur."],
susp:[[AV],[DO],"Travaille la poigne et décompresse le dos."],
sdt:[[IS,FE,LO],[HD,AV,QU],"Mouvement global : tout l'arrière du corps travaille."],
elp:[[DL],[],"La poulie garde la tension sur toute l'amplitude."],
el:[[DL],[],"Monte les bras jusqu'à l'horizontale, sans élan."],
de:[[DA,DL],[TR],"Pousse au-dessus de la tête, dos calé."],
dm:[[DA,DL],[TR,HD,AB],"Debout, les abdos gainent pour stabiliser."],
fp:[[DP,HD],[],"Excellent pour la posture et la santé des épaules."],
oi:[[DP],[HD],"Écarte les bras vers l'arrière, coudes légèrement fléchis."],
tp:[[TR],[],"Coudes collés au corps, seul l'avant-bras bouge."],
tpo:[[TR],[],"Bras au-dessus de la tête : étire et vise le long chef du triceps."],
cm:[[BI,AV],[],"Prise neutre : les avant-bras travaillent beaucoup."],
cb:[[BI],[AV],"Coudes fixes, monte sans balancer."],
cin:[[BI],[],"Banc incliné : le biceps travaille étiré."],
cp:[[AB],[OB],"Enroule le buste, ce ne sont pas les bras qui tirent."],
rj:[[AB],[OB],"Monte les jambes sans élan, bas du dos plaqué."],
rjs:[[AB],[OB,AV],"Suspendu : les avant-bras tiennent, les abdos montent les jambes."],
gain:[[AB],[OB,LO],"Corps aligné de la tête aux talons, sans creuser le dos."],
pc:[[QU,FE],[IS,'add'],"Pieds plus hauts sur le plateau : plus de fessiers."],
sq:[[QU,FE],[IS,'add',LO,AB],"Le roi des exercices de jambes."],
sqpc:[[QU,FE],[IS],"Descends au moins cuisses parallèles au sol."],
rdl:[[IS,FE],[LO],"Hanches vers l'arrière, jambes presque tendues."],
fb:[[QU,FE],[IS],"Une jambe à la fois : corrige les déséquilibres."],
fent:[[QU,FE],[IS,'add'],"Grand pas, genou arrière proche du sol."],
pist:[[QU,FE],[AB,MO],"Sur une jambe : équilibre et force."],
lc:[[IS],[MO],"Isole l'arrière de la cuisse."],
lex:[[QU],[],"Isole l'avant de la cuisse."],
mol:[[MO],[],"Monte haut, redescends lentement."]}}
function MXC(){return{
c_rameur:[['dorsaux','quads'],['ischios','biceps','fessiers'],"Cardio complet : jambes, dos et bras à chaque coup de rame."],
c_velo:[['quads'],['fessiers','mollets'],"Cardio doux pour les articulations, centré sur les cuisses."],
c_tapis:[['mollets','quads'],['fessiers'],"Marche inclinée ou course : cardio et bas du corps."],
c_elliptique:[['quads','fessiers'],['pecs','dorsaux'],"Cardio sans impact, bras et jambes ensemble."],
c_cordeasauter:[['mollets'],['delt_ant','avbras'],"Cardio intense, travaille la coordination."]}}
function musOf(k,n,g){const m=MX()[k]||MXC()[k];if(m)return m;const t=String(n||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const kw=[['curl',[['biceps'],['avbras']]],['marteau',[['biceps','avbras'],[]]],['triceps',[['triceps'],[]]],['dips',[['pecs','triceps'],['delt_ant']]],['pompe',[['pecs'],['triceps','delt_ant']]],['couche',[['pecs'],['delt_ant','triceps']]],['ecarte',[['pecs'],['delt_ant']]],['butterfly',[['pecs'],[]]],['militaire',[['delt_ant','delt_lat'],['triceps']]],['epaule',[['delt_ant','delt_lat'],['triceps']]],['elevation',[['delt_lat'],[]]],['oiseau',[['delt_post'],['haut_dos']]],['face pull',[['delt_post','haut_dos'],[]]],['traction',[['dorsaux'],['biceps']]],['tirage',[['dorsaux'],['biceps','haut_dos']]],['rowing',[['dorsaux','haut_dos'],['biceps']]],['shrug',[['haut_dos'],[]]],['souleve',[['ischios','fessiers','lombaires'],['haut_dos']]],['squat',[['quads','fessiers'],['ischios']]],['presse',[['quads','fessiers'],['ischios']]],['fente',[['quads','fessiers'],['ischios']]],['hip thrust',[['fessiers'],['ischios']]],['leg curl',[['ischios'],[]]],['extension',[['quads'],[]]],['mollet',[['mollets'],[]]],['crunch',[['abdos'],['obliques']]],['gainage',[['abdos'],['obliques']]],['abdo',[['abdos'],[]]],['oblique',[['obliques'],['abdos']]]];
for(const[w,v]of kw)if(t.includes(w))return[v[0],v[1],''];
const G={'Pectoraux':[['pecs'],['delt_ant','triceps']],'Épaules':[['delt_ant','delt_lat'],[]],'Dos':[['dorsaux','haut_dos'],['biceps']],'Bras':[['biceps','triceps'],[]],'Jambes':[['quads','fessiers'],['ischios']],'Abdos':[['abdos'],['obliques']],'Cardio':[['quads'],['mollets']]}[g]||[[],[]];return[G[0],G[1],'']}

// ===== Lift 2.9 : schéma anatomique détaillé (dessin original) =====
function mirP(d){return d.replace(/([MLQCZ])([^MLQCZ]*)/g,(m,c,a)=>{if(c=='Z')return'Z';const n=a.trim().split(/[\s,]+/).filter(Boolean).map(Number);for(let i=0;i<n.length;i+=2)n[i]=+(100-n[i]).toFixed(2);return c+n.join(' ')})}
function BODY(){return{
F:{base:[
'M50 21L45 21L44.5 27Q36 29 29.5 31.5Q22 34 20.5 42L19.5 58Q18.5 74 18 88L18.5 97L21.5 100.5Q25 99 25 95L26.5 81Q28.5 71 29.5 63L31.5 55Q33 63 34 71Q35 81 34.5 91Q33.5 110 34.5 128L35.5 140Q35.5 158 37 176L35.5 188L44.5 189.5L44.5 177Q46 158 45.5 142L47.5 128Q48.5 112 49.2 101L50 101Z'],
head:'M50 3Q57.5 3 58 12Q58 20 50 22Q42 20 42 12Q42.5 3 50 3Z',
m:[
['haut_dos','M45 25Q39 28.5 31.5 31.5L36 33Q42 30.5 46 29.5Z'],
['delt_lat','M30 31.8Q22.5 33 21 41.5Q21.2 46 23.6 48.3Q24.4 41 28.5 36Z'],
['delt_ant','M36 33.2Q30.5 32.5 28.5 36Q25.5 41 25.8 47.5Q28.5 46.5 30.5 43Q32.5 38 36 35.5Z'],
['pecs','M49.2 33.5Q42 31.5 36.2 34.2Q34.2 36.5 34.6 39.5Q41 37.6 49.2 38.6Z'],
['pecs','M49.2 39.4Q41.5 38.4 34.7 40.4Q33 45.5 35.2 50Q41.8 52.8 49.2 49.6Z'],
['obliques','M36 53Q39 52 42.6 53.5L42.4 79.5Q37.4 76.5 35.7 70Q34.6 61 36 53Z'],
['abdos','M43.4 52.4Q46.5 51.6 49.3 52L49.3 58L43.4 58.4Z'],
['abdos','M43.4 59.4L49.3 59L49.3 65.4L43.4 65.8Z'],
['abdos','M43.4 66.8L49.3 66.4L49.3 72.6L43.3 73Z'],
['abdos','M43.3 74L49.3 73.6L49.3 86.5Q45.5 85 43.6 81Z'],
['biceps','M25.3 49Q29 47.8 30.6 51L29.6 63.8Q26.4 66.6 23.8 64Q22.4 56 25.3 49Z'],
['avbras','M23.4 67Q28.4 65.6 29.2 70.2L27.4 89.5Q24.4 91.4 21.6 89.6Q19.4 79 23.4 67Z'],
['avbras','M23 67.4Q19.8 72.5 19.6 81.5L21.4 83.4Q21.4 74.5 25.4 67.6Z'],
['quads','M37.4 96.5Q40.6 96.8 41.5 100L40.6 126.5Q37.6 132.5 35.2 128Q32.6 111.5 37.4 96.5Z'],
['quads','M41.6 98.8Q45.3 97.2 47.3 100.2L45.6 127.6Q42.6 131.4 40.9 127.2Z'],
['quads','M45.4 117.6Q49 119.8 48.3 127.6Q46.4 133.8 43.4 132Q42.6 124.6 45.4 117.6Z'],
['add','M47.5 99.4Q49.8 99.6 49.9 102L49.2 116.8Q46.8 116 46.2 111.6Z'],
['mollets','M44.2 141.5Q47 143.2 46.8 150.4L45.2 162Q43.4 157.6 44.2 141.5Z'],
['tib','M38.8 140.5Q42.6 139.2 43.6 142L42.6 168Q40.2 170 39 167.4Q37.6 154 38.8 140.5Z']]},
B:{base:null,head:null,m:[
['haut_dos','M50 23.5L45 26.5Q37.5 29.5 31.5 32.5Q40.5 36 45.4 42L50 58Z'],
['delt_lat','M25 34Q20.6 37 21 44.6L23.4 46.6Q22.6 40 27 35.2Z'],
['delt_post','M31.6 33Q25.6 33.8 23.6 40.8Q26.2 45.4 30.2 44.4Q31.4 39.2 35.4 36Z'],
['haut_dos','M36.6 37.6Q42.8 37.2 45.6 42.4L43.8 48.2Q38.8 49.2 36 45Z'],
['dorsaux','M33.8 44.4Q37.8 46.6 37.2 51.2L33 50.4Q32.2 46.4 33.8 44.4Z'],
['dorsaux','M33 51.2Q38.4 50.6 45.8 56L49.2 72Q42.4 76.4 37.2 70.4Q32.8 62 33 51.2Z'],
['lombaires','M45.8 63.6L49.6 63.6L49.6 84.6Q46 84.4 44 80Z'],
['triceps','M25.4 47.2Q28.6 46.2 29.6 49.4L28.4 63.4Q25.4 65.4 24.2 62Z'],
['triceps','M22.2 46.2Q24.6 46.4 25 50.2L24 60.4Q21 58.4 21.2 52Z'],
['avbras','M23.4 67Q28.4 65.6 29.2 70.2L27.4 89.5Q24.4 91.4 21.6 89.6Q19.4 79 23.4 67Z'],
['fessiers','M35.8 82.2Q42.4 80 46.4 84.2L44.2 88.6Q38.8 89.4 35.8 87Z'],
['fessiers','M35.6 87.8Q44 86.4 49.4 90.4L49.4 102.4Q42 106.2 37 101.4Q34 94.6 35.6 87.8Z'],
['ischios','M37 104.4Q41 105 43 108.4L42 131.6Q39 134 37 130Q35 116.4 37 104.4Z'],
['ischios','M43.4 106.2Q47.4 105 48.4 108.6L46.4 131Q44.2 133.2 43.2 130Z'],
['mollets','M38.2 141.6Q42 140 43 146L42 160Q39 162 38 158Q36.4 150 38.2 141.6Z'],
['mollets','M43.4 142.2Q47.4 141 48 147L46.2 160Q44 162 43.2 158Z'],
['mollets','M39.4 160.6Q44 163.4 46.6 160.4L45 172Q42 174.2 40 172Z']]}}}
function bodySVG(pr,se,cls){const on=z=>pr.includes(z)?'mp':se.includes(z)?'ms':'mn',Bd=BODY();
const fig=(V,dx)=>{const base=Bd.F.base,hd=Bd.F.head;let o=`<g transform="translate(${dx} 0)">`;
o+=base.map(d=>`<path class="bb" d="${d}"/><path class="bb" d="${mirP(d)}"/>`).join('')+`<path class="bb" d="${hd}"/>`;
o+=`<ellipse class="bb" cx="24.3" cy="95" rx="3.6" ry="4.6"/><ellipse class="bb" cx="75.7" cy="95" rx="3.6" ry="4.6"/>`;
o+=V.m.map(([z,d])=>{const c=z=='tib'?'mn':on(z),a=`data-z="${z}"`;return`<path class="${c}" ${a} d="${d}"/><path class="${c}" ${a} d="${mirP(d)}"/>`}).join('');
return o+'</g>'};
return`<svg class="body ${cls||''}" viewBox="0 0 210 192" role="img" aria-label="Muscles travaillés : ${pr.map(z=>(MZ()[z]||[z])[0]).join(', ')}">${fig(Bd.F,0)}${fig(Bd.B,110)}</svg>`}

function EXI(){return new Set(['dcs','dc','ih','pcb','tv','tvs','th','rb','trl','trac','chin','rinv','susp','sdt','elp','el','de','dm','fp','oi','tp','tpo','cm','cb','cin','cp','rj','rjs','gain','pc','sq','sqpc','rdl','fb','fent','pist','lc','lex','mol','pomp','dips','ppi','c_rameur','c_velo','c_tapis','c_elliptique','c_cordeasauter'])}
function exImg(k,c){return EXI().has(k)?`<span class="exi ${c||''}"><img src="exos/${k}-1.svg" alt="" decoding="async"><img src="exos/${k}-2.svg" alt="" decoding="async"></span>`:''}
function musCard(k,n,g){const[pr,se]=musOf(k,n,g);if(!pr.length)return'';const Z=MZ(),im=exImg(k,'sm');
return`<button class="muc${im?' hasi':''}" data-mus="${k}" data-mn="${esc(n||'')}" data-mg="${esc(g||'')}">${im}${bodySVG(pr,se,'sm')}<span><b>${pr.map(z=>Z[z][0]).join(' · ')}</b>${se.length?`<i>Aussi : ${se.map(z=>Z[z][0].toLowerCase()).join(', ')}</i>`:''}</span><em>›</em></button>`}
function openMus(k,n,g){const[pr,se,tip]=musOf(k,n,g),Z=MZ();
const im=exImg(k,'lg');$('musp').innerHTML=`<h3>${esc(n)}</h3>${im?`<div class="mut">Le mouvement</div><div class="exbig">${im}</div>`:''}<div class="mut">Muscles travaillés</div><div class="mubig">${bodySVG(pr,se,'lg')}<div class="mul"><span><i class="mp"></i>Principaux</span><span><i class="ms"></i>En soutien</span></div></div>
${txBlock(k,n,g)||`<p class="obp">${pr.map(z=>`<b>${Z[z][0]}</b> : ${Z[z][1]}.`).join(' ')}${se.length?` En soutien : ${se.map(z=>Z[z][0].toLowerCase()).join(', ')}.`:''}</p>${tip?`<div class="tip2">${tip}</div>`:''}`}${im?'<div class="gp" style="margin-top:12px">Dessins : Everkinetic et Workout Guide (Bryl Lim), licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr" target="_blank" rel="noopener">CC BY-SA 4.0</a>, recolorés.</div>':''}<button class="cta" id="musok">Compris</button>`;
$('mussheet').classList.add('open')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-mus]');if(b){e.stopPropagation();openMus(b.dataset.mus,b.dataset.mn,b.dataset.mg);return}if(e.target.id=='musok')$('mussheet').classList.remove('open')},true);


// ===== Lift 2.7 : textes explicatifs et vocabulaire =====
function GL(){return{
gp:["Grand pectoral","Le grand muscle de la poitrine. Il rapproche les bras et les pousse vers l'avant."],
fclav:["Faisceau claviculaire","La partie haute du grand pectoral, attachée à la clavicule. On l'appelle souvent « haut des pecs »."],
dant:["Deltoïde antérieur","L'avant de l'épaule. Il lève le bras devant toi et aide à pousser."],
dlat:["Deltoïde latéral","Le côté de l'épaule. Il écarte le bras sur le côté et donne la largeur des épaules."],
dpost:["Deltoïde postérieur","L'arrière de l'épaule. Il tire le bras vers l'arrière et aide à garder une bonne posture."],
tri:["Triceps brachial","Le muscle à l'arrière du bras, formé de trois chefs. Il tend le coude."],
bic:["Biceps brachial","Le muscle à l'avant du bras, formé de deux chefs. Il plie le coude et tourne la paume vers le haut."],
chef:["Chef","Une des « têtes » d'un muscle : certains muscles ont plusieurs points de départ qui se rejoignent en un seul tendon."],
brach:["Brachial","Un muscle profond, caché sous le biceps. C'est le plus puissant pour plier le coude."],
brr:["Brachioradial","Le muscle de l'avant-bras côté pouce. Il aide à plier le coude, surtout en prise marteau."],
sup:["Supination","La rotation de l'avant-bras qui tourne la paume vers le haut, comme pour porter un bol de soupe."],
flech:["Fléchisseur","Un muscle qui plie une articulation. Son contraire est l'extenseur, qui la déplie."],
gd:["Grand dorsal","Le plus grand muscle du dos. Il donne la forme en V et tire les bras vers le bas et vers le corps."],
trap:["Trapèzes","Muscles en losange du cou et du haut du dos. Ils bougent et stabilisent les omoplates."],
rhom:["Rhomboïdes","Muscles situés entre les deux omoplates. Ils les rapprochent."],
omo:["Omoplates","Les deux os plats en haut du dos, sur lesquels s'attachent les épaules. On dit aussi scapulas."],
ret:["Rétraction des omoplates","Serrer les omoplates l'une vers l'autre, poitrine sortie, comme pour pincer un crayon entre elles."],
coif:["Coiffe des rotateurs","Quatre petits muscles profonds qui maintiennent l'épaule bien en place dans son articulation."],
lomb:["Érecteurs du rachis","Les muscles le long de la colonne vertébrale. Ils gardent le dos droit ; en bas du dos, on les appelle les lombaires."],
gfes:["Grand fessier","Le plus gros muscle du corps. Il étend la hanche, c'est-à-dire qu'il te redresse et pousse le bassin vers l'avant."],
mfes:["Moyen fessier","Sur le côté de la hanche. Il stabilise le bassin quand tu es sur une seule jambe."],
quad:["Quadriceps","Les quatre muscles à l'avant de la cuisse. Ils tendent le genou."],
isch:["Ischio-jambiers","Les muscles à l'arrière de la cuisse. Ils plient le genou et redressent la hanche."],
add:["Adducteurs","Les muscles à l'intérieur de la cuisse. Ils rapprochent les jambes l'une de l'autre."],
gastro:["Gastrocnémiens","Les « jumeaux », la partie bombée et visible du mollet. Ils travaillent surtout jambe tendue."],
sol:["Soléaire","Un muscle du mollet, sous les jumeaux. Il travaille surtout genou plié et en endurance."],
gdroit:["Grand droit","L'abdominal en « tablette de chocolat ». Il enroule le buste vers le bassin."],
obl:["Obliques","Les muscles sur les côtés de la taille. Ils tournent et inclinent le buste, et le stabilisent."],
trans:["Transverse","L'abdominal le plus profond. Il serre la taille comme une ceinture et protège le bas du dos."],
psoas:["Fléchisseurs de hanche","Muscles profonds (dont le psoas) qui montent la cuisse vers le ventre."],
dent:["Dentelé antérieur","Muscle posé sur les côtes, sous l'aisselle. Il plaque l'omoplate contre la cage thoracique."],
ext:["Extension de hanche","Le mouvement qui ramène le buste ou la cuisse dans l'axe du corps, comme quand tu te redresses."],
gain:["Gainage","Contracter les abdominaux et le bas du dos en même temps pour garder le tronc rigide et aligné."],
amp:["Amplitude","La distance parcourue pendant le mouvement, de la position la plus basse à la plus haute."],
exc:["Phase excentrique","La phase de retour, quand le muscle s'allonge en freinant la charge. La contrôler rend l'exercice plus efficace."],
poly:["Polyarticulaire","Un exercice qui fait bouger plusieurs articulations à la fois, donc beaucoup de muscles."],
isol:["Exercice d'isolation","Un exercice qui ne fait bouger qu'une articulation, pour cibler un seul muscle."],
chp:["Chaîne postérieure","Tous les muscles de l'arrière du corps qui travaillent ensemble : mollets, ischio-jambiers, fessiers et dos."],
neutre:["Prise neutre","Paumes face à face, pouces vers le haut, comme pour tenir un marteau."],
pron:["Pronation","Paume tournée vers le bas, comme pour poser la main à plat sur une table."],
lest:["Lest","Un poids ajouté (ceinture, gilet, disque) pour rendre plus dur un exercice au poids du corps."],
cv:["Système cardio-vasculaire","Le cœur et les vaisseaux sanguins. L'entraîner améliore ton endurance et ta récupération entre les séries."],
neutre_d:["Dos neutre","Le dos garde ses courbes naturelles : ni rond, ni trop cambré."],
verr:["Verrouiller","Tendre complètement l'articulation en fin de mouvement. Mieux vaut s'arrêter juste avant pour garder la tension."]}}
function TX(){return{
dc:["Le développé couché sollicite principalement le {grand pectoral|gp}. Il travaille aussi le {deltoïde antérieur|dant} et le {triceps brachial|tri}, qui aident à pousser la barre.","C'est l'exercice de base pour la force et le volume du haut du corps. Il renforce tous les gestes où tu pousses devant toi.",["Serre les omoplates et garde-les plaquées au banc pendant toute la série : tes épaules sont protégées.","Descends la barre jusqu'au milieu de la poitrine, coudes à environ 45° du corps, sans la faire rebondir."]],
dcs:["Le développé couché à la Smith sollicite principalement le {grand pectoral|gp}. Le {deltoïde antérieur|dant} et le {triceps brachial|tri} participent à la poussée.","La barre guidée te permet de pousser lourd en sécurité, sans avoir à équilibrer la charge, ce qui aide à progresser sur la force.",["Règle le banc pour que la barre descende sur le milieu de la poitrine, pas sur le cou.","Garde les pieds bien au sol et les omoplates serrées, comme au développé couché classique."]],
ih:["Le développé incliné aux haltères sollicite principalement le {faisceau claviculaire|fclav} du {grand pectoral|gp}, c'est-à-dire le haut des pectoraux. Le {deltoïde antérieur|dant} et le {triceps brachial|tri} aident à pousser.","Le haut des pectoraux est souvent en retard : le développer remplit la poitrine sous les clavicules. Les haltères permettent aussi une plus grande {amplitude|amp}.",["Incline le banc entre 30 et 45° : plus haut, ce sont surtout les épaules qui travaillent.","Descends les haltères lentement jusqu'à sentir l'étirement de la poitrine, puis pousse en les rapprochant légèrement."]],
pcb:["Le croisé à la poulie de bas en haut sollicite principalement le {faisceau claviculaire|fclav} du {grand pectoral|gp}. Le {deltoïde antérieur|dant} aide à monter les bras.","C'est un {exercice d'isolation|isol} qui cible le haut des pectoraux avec une tension constante, sans fatiguer les triceps.",["Garde les coudes légèrement pliés et fixes : le mouvement vient des épaules, pas des bras.","Termine les mains à hauteur des yeux en serrant la poitrine une seconde."]],
pomp:["Les pompes sollicitent principalement le {grand pectoral|gp}. Elles travaillent aussi le {triceps brachial|tri}, le {deltoïde antérieur|dant} et les abdominaux, qui assurent le {gainage|gain}.","Un exercice complet, faisable partout, qui développe la force de poussée et apprend à garder le corps solide.",["Corps aligné de la tête aux talons : ne laisse pas tomber les hanches.","Descends la poitrine près du sol, coudes vers l'arrière plutôt qu'écartés sur les côtés."]],
dips:["Les dips sollicitent principalement le bas du {grand pectoral|gp} et le {triceps brachial|tri}. Le {deltoïde antérieur|dant} participe aussi.","Un des meilleurs exercices au poids du corps pour la force de poussée et le volume des triceps.",["Penche le buste en avant pour cibler les pectoraux, reste droit pour cibler les triceps.","Descends jusqu'à ce que les bras forment un angle droit, pas plus bas si tes épaules tirent."]],
ppi:["Les pompes pieds surélevés sollicitent principalement le {faisceau claviculaire|fclav} du {grand pectoral|gp} et le {deltoïde antérieur|dant}. Le {triceps brachial|tri} aide à pousser.","Surélever les pieds rend la pompe plus dure et cible davantage le haut de la poitrine et les épaules.",["Garde le {gainage|gain} : fesses ni trop hautes, ni affaissées.","Plus tes pieds sont hauts, plus l'exercice ressemble à un développé épaules."]],
tv:["Le tirage vertical prise large sollicite principalement le {grand dorsal|gd}. Il travaille aussi le {biceps brachial|bic} et le haut du dos ({trapèzes|trap} et {rhomboïdes|rhom}).","C'est le muscle qui élargit le dos et donne la forme en V. Il prépare aussi aux tractions.",["Tire la barre vers le haut de la poitrine en pensant à descendre les coudes vers les hanches.","Garde la poitrine sortie et ne te balance pas en arrière pour aider."]],
tvs:["Le tirage vertical prise serrée sollicite principalement le {grand dorsal|gd}. Le {biceps brachial|bic} participe davantage qu'en prise large.","La prise serrée offre une plus grande {amplitude|amp} et un bon étirement du dos, utile pour l'épaisseur et la largeur.",["Laisse les bras se tendre complètement en haut pour bien étirer le dos.","Tire en gardant les coudes près du corps, la poitrine vers la poignée."]],
th:["Le tirage horizontal sollicite principalement le haut du dos ({rhomboïdes|rhom} et {trapèzes|trap}) et le {grand dorsal|gd}. Le {biceps brachial|bic} et le {deltoïde postérieur|dpost} aident.","Il donne de l'épaisseur au dos et améliore la posture en équilibrant le travail des pectoraux.",["Termine chaque répétition par une {rétraction des omoplates|ret} d'une seconde.","Garde le buste immobile : ce sont les bras et le dos qui travaillent, pas l'élan."]],
rb:["Le rowing barre sollicite principalement le {grand dorsal|gd} et le haut du dos ({trapèzes|trap}, {rhomboïdes|rhom}). Il travaille aussi le {biceps brachial|bic}, le {deltoïde postérieur|dpost} et les {érecteurs du rachis|lomb} qui tiennent le dos.","Un exercice {polyarticulaire|poly} qui construit un dos épais et solide, et renforce la posture.",["Penche-toi à environ 45° avec un {dos neutre|neutre_d}, genoux légèrement fléchis.","Tire la barre vers le nombril, pas vers la poitrine, et redescends sous contrôle."]],
trl:["Les tractions lestées sollicitent principalement le {grand dorsal|gd}. Elles travaillent aussi le {biceps brachial|bic} et le haut du dos.","Le {lest|lest} permet de continuer à progresser en force quand les tractions au poids du corps deviennent faciles.",["Pars bras tendus et monte jusqu'à passer le menton au-dessus de la barre.","Ajoute le lest petit à petit : 2,5 kg suffisent pour sentir la différence."]],
trac:["Les tractions sollicitent principalement le {grand dorsal|gd}. Elles travaillent aussi le {biceps brachial|bic}, les {trapèzes|trap} et les {rhomboïdes|rhom}.","Le meilleur exercice au poids du corps pour le dos : il développe la largeur et la force de traction.",["Commence chaque répétition en abaissant les épaules, loin des oreilles.","Si tu n'arrives pas encore à en faire, travaille avec un élastique ou en descente lente."]],
chin:["Les tractions en supination sollicitent principalement le {grand dorsal|gd} et le {biceps brachial|bic}, plus engagé grâce à la {supination|sup} des mains.","Une variante souvent plus facile que la prise large, excellente pour le dos et les bras à la fois.",["Mains écartées de la largeur des épaules, paumes vers toi.","Descends jusqu'aux bras tendus pour garder toute l'{amplitude|amp}."]],
rinv:["Le rowing inversé sollicite principalement le haut du dos ({rhomboïdes|rhom}, {trapèzes|trap}) et le {grand dorsal|gd}. Le {biceps brachial|bic} et le {deltoïde postérieur|dpost} aident.","Une bonne façon de muscler le dos au poids du corps, plus accessible que les tractions.",["Corps gainé et droit comme une planche, talons au sol.","Plus tes pieds sont loin devant, plus l'exercice est dur."]],
susp:["La suspension à la barre sollicite principalement les muscles de l'avant-bras, qui tiennent la prise. Le {grand dorsal|gd} et les épaules travaillent pour stabiliser.","Elle améliore la force de préhension, utile pour tous les tirages, et détend le dos.",["Garde les épaules légèrement engagées, sans t'affaisser complètement.","Progresse en ajoutant quelques secondes à chaque séance."]],
sdt:["Le soulevé de terre sollicite principalement la {chaîne postérieure|chp} : {ischio-jambiers|isch}, {grand fessier|gfes} et {érecteurs du rachis|lomb}. Il travaille aussi les {trapèzes|trap}, les avant-bras et les {quadriceps|quad}.","C'est l'exercice qui développe le plus la force globale. Il renforce tout l'arrière du corps et la tenue du dos.",["Garde la barre collée aux jambes du début à la fin et le {dos neutre|neutre_d}.","Pousse le sol avec les pieds plutôt que de tirer avec le dos."]],
elp:["Les élévations latérales à la poulie sollicitent principalement le {deltoïde latéral|dlat}.","Le côté de l'épaule donne la largeur de la carrure. La poulie garde le muscle sous tension sur toute l'{amplitude|amp}.",["Monte le bras jusqu'à l'horizontale, pas plus haut, coude légèrement plié.","Fais le mouvement lentement, sans élan du buste."]],
el:["Les élévations latérales aux haltères sollicitent principalement le {deltoïde latéral|dlat}. Les {trapèzes|trap} aident un peu en fin de mouvement.","Un {exercice d'isolation|isol} pour élargir les épaules et équilibrer la silhouette.",["Prends une charge légère : c'est un petit muscle, la technique compte plus que le poids.","Monte en menant avec les coudes, petits doigts légèrement vers le haut."]],
de:["Le développé épaules à la machine sollicite principalement le {deltoïde antérieur|dant} et le {deltoïde latéral|dlat}. Le {triceps brachial|tri} aide à pousser.","La machine guide le mouvement : tu peux pousser lourd et te concentrer sur les épaules sans t'occuper de l'équilibre.",["Règle le siège pour que les poignées partent à hauteur des épaules.","Pousse sans {verrouiller|verr} complètement les coudes en haut."]],
dm:["Le développé militaire sollicite principalement le {deltoïde antérieur|dant} et le {deltoïde latéral|dlat}. Il travaille aussi le {triceps brachial|tri}, les {trapèzes|trap} et les abdominaux, qui assurent le {gainage|gain}.","C'est l'exercice de base pour des épaules fortes. Debout, il renforce aussi tout le tronc.",["Serre les fessiers et les abdos pour ne pas cambrer le bas du dos.","Passe la tête légèrement en avant une fois la barre au-dessus du front."]],
fp:["Le face pull sollicite principalement le {deltoïde postérieur|dpost} et le haut du dos ({trapèzes|trap}, {rhomboïdes|rhom}). Il fait aussi travailler la {coiffe des rotateurs|coif}.","Il équilibre les épaules, améliore la posture et protège l'articulation des épaules, souvent malmenée par les exercices de poussée.",["Tire la corde vers ton visage en écartant les mains de chaque côté de la tête.","Prends une charge légère et marque une pause d'une seconde en fin de mouvement."]],
oi:["L'oiseau à la poulie sollicite principalement le {deltoïde postérieur|dpost}. Les {rhomboïdes|rhom} et les {trapèzes|trap} aident en fin de mouvement.","L'arrière de l'épaule est souvent sous-entraîné : le travailler donne des épaules complètes et une meilleure posture.",["Garde les coudes légèrement pliés et fixes, comme si tu ouvrais des ailes.","Ne cherche pas à monter lourd : vise la sensation à l'arrière de l'épaule."]],
tp:["L'extension à la poulie sollicite principalement le {triceps brachial|tri}, surtout ses {chefs|chef} latéral et médial.","Le triceps représente environ deux tiers du volume du bras. Il renforce aussi tous les mouvements de poussée.",["Coudes collés au corps : seul l'avant-bras bouge.","Tends les bras complètement en bas en serrant le triceps une seconde."]],
tpo:["L'extension au-dessus de la tête sollicite principalement le {triceps brachial|tri}, et plus particulièrement son {chef|chef} long, qui est étiré bras en l'air.","Le chef long est le plus gros des trois : le travailler étiré aide à prendre du volume à l'arrière du bras.",["Garde les coudes pointés vers l'avant, proches de la tête.","Descends lentement derrière la tête pour bien étirer le muscle."]],
cm:["Le curl marteau sollicite principalement le {brachial|brach} et le {brachioradial|brr}. Le {biceps brachial|bic} participe aussi.","La {prise neutre|neutre} cible les muscles sous le biceps et de l'avant-bras : le bras paraît plus épais et la poigne devient plus forte.",["Paumes face à face pendant tout le mouvement, coudes collés au corps.","Monte sans balancer le buste et redescends lentement."]],
cb:["Le curl biceps sollicite principalement le {biceps brachial|bic} ({chef|chef} court et chef long), qui {fléchit|flech} le coude et réalise la {supination|sup} de l'avant-bras. Il travaille aussi le {brachial|brach} et le {brachioradial|brr} de l'avant-bras.","Il améliore la force de traction, la stabilité du coude et l'esthétique du bras. Le brachial, placé sous le biceps, contribue aussi à donner du volume au bras.",["Garde les coudes fixes contre le corps : seuls les avant-bras bougent.","Contrôle la descente pendant deux secondes au lieu de laisser tomber la charge."]],
cin:["Le curl incliné sollicite principalement le {biceps brachial|bic}, surtout son {chef|chef} long, étiré par la position des bras derrière le corps.","Travailler le biceps en étirement est très efficace pour la prise de muscle et améliore la forme du bras.",["Laisse les bras pendre vers le sol avant chaque répétition.","Tourne les paumes vers le haut en montant pour accentuer la {supination|sup}."]],
cp:["Le crunch à la poulie sollicite principalement le {grand droit|gdroit} de l'abdomen. Les {obliques|obl} aident à stabiliser.","La charge permet de progresser comme sur n'importe quel muscle, pour des abdominaux plus forts et plus visibles.",["Enroule le dos vertèbre par vertèbre : ce sont les abdos qui tirent, pas les bras.","Garde les hanches immobiles, sans t'asseoir sur les talons."]],
rj:["Le relevé de jambes sollicite principalement le bas du {grand droit|gdroit}. Les {fléchisseurs de hanche|psoas} et les {obliques|obl} participent.","Il renforce le bas du ventre, souvent difficile à cibler, et améliore le contrôle du bassin.",["Plaque le bas du dos au sol pendant tout le mouvement.","Descends les jambes lentement, sans les poser entre les répétitions."]],
rjs:["Le relevé de jambes suspendu sollicite principalement le {grand droit|gdroit}, surtout sa partie basse. Les {fléchisseurs de hanche|psoas}, les {obliques|obl} et les avant-bras travaillent aussi.","Un des exercices d'abdominaux les plus complets et les plus exigeants.",["Évite de te balancer : monte les jambes sous contrôle.","Enroule le bassin vers le haut en fin de mouvement pour vraiment faire travailler les abdos."]],
gain:["Le gainage planche sollicite principalement le {transverse|trans} et le {grand droit|gdroit}. Les {obliques|obl}, les {érecteurs du rachis|lomb} et les épaules participent.","Un tronc solide protège le dos et rend tous les autres exercices plus sûrs et plus efficaces.",["Aligne tête, épaules, hanches et talons : ni fesses en l'air, ni dos creusé.","Serre les fessiers et respire calmement pendant tout le maintien."]],
pc:["La presse à cuisses sollicite principalement les {quadriceps|quad} et le {grand fessier|gfes}. Les {ischio-jambiers|isch} et les {adducteurs|add} participent aussi.","Elle permet de charger lourd les jambes avec un dos bien soutenu, idéal pour la force et le volume des cuisses.",["Ne décolle jamais le bas du dos du dossier en bas du mouvement.","Pieds hauts sur le plateau : plus de fessiers ; pieds bas : plus de quadriceps."]],
sq:["Le squat sollicite principalement les {quadriceps|quad} et le {grand fessier|gfes}. Il travaille aussi les {ischio-jambiers|isch}, les {adducteurs|add}, les {érecteurs du rachis|lomb} et les abdominaux.","Le roi des exercices de jambes : il développe la force, le volume des cuisses et la stabilité de tout le corps.",["Descends au moins cuisses parallèles au sol en gardant le {dos neutre|neutre_d}.","Pousse les genoux dans l'axe des pieds, sans les laisser rentrer vers l'intérieur."]],
sqpc:["Le squat au poids du corps sollicite principalement les {quadriceps|quad} et le {grand fessier|gfes}. Les {ischio-jambiers|isch} et les {adducteurs|add} participent.","Il apprend le bon geste du squat et renforce les jambes partout, sans matériel.",["Garde les talons au sol et la poitrine sortie.","Pour progresser, ralentis la descente ou ajoute une pause en bas."]],
rdl:["Le soulevé de terre roumain sollicite principalement les {ischio-jambiers|isch} et le {grand fessier|gfes}. Les {érecteurs du rachis|lomb} travaillent pour tenir le dos.","Il renforce la {chaîne postérieure|chp}, protège le dos et améliore la souplesse de l'arrière des cuisses.",["Pousse les hanches vers l'arrière comme pour fermer une porte avec les fesses.","Descends la barre le long des jambes jusqu'à sentir l'étirement, pas plus bas."]],
fb:["Les fentes bulgares sollicitent principalement les {quadriceps|quad} et le {grand fessier|gfes} de la jambe avant. Les {ischio-jambiers|isch} et le {moyen fessier|mfes} stabilisent.","Une jambe à la fois : tu corriges les déséquilibres et travailles l'équilibre, avec moins de charge sur le dos.",["Place le pied avant assez loin pour que le genou reste au-dessus de la cheville.","Buste légèrement penché en avant : plus de fessiers ; buste droit : plus de quadriceps."]],
fent:["Les fentes marchées sollicitent principalement les {quadriceps|quad} et le {grand fessier|gfes}. Les {ischio-jambiers|isch}, les {adducteurs|add} et le {moyen fessier|mfes} participent.","Elles développent la force des jambes, l'équilibre et la coordination, proches des gestes du quotidien et du sport.",["Fais de grands pas et descends jusqu'à frôler le sol avec le genou arrière.","Garde le buste droit et le regard devant toi."]],
pist:["Le pistol squat sollicite principalement les {quadriceps|quad} et le {grand fessier|gfes} de la jambe d'appui. Le {moyen fessier|mfes}, les abdominaux et les mollets travaillent pour l'équilibre.","Un exercice très exigeant sur une jambe, qui développe la force, l'équilibre et la mobilité de la cheville.",["Tiens-toi à un support ou à une sangle au début.","Descends lentement en gardant le talon d'appui au sol."]],
lc:["Le leg curl assis sollicite principalement les {ischio-jambiers|isch}. Les {gastrocnémiens|gastro} aident un peu.","Un {exercice d'isolation|isol} qui renforce l'arrière de la cuisse et aide à protéger les genoux.",["Règle la machine pour que le genou soit aligné avec l'axe de rotation.","Remonte lentement : la {phase excentrique|exc} compte autant que la flexion."]],
lex:["Le leg extension sollicite uniquement les {quadriceps|quad}.","Il cible l'avant de la cuisse sans fatiguer le dos, utile pour compléter les squats et la presse.",["Tends complètement les jambes en haut et marque une pause d'une seconde.","Redescends lentement, sans laisser tomber la charge."]],
mol:["Les mollets debout sollicitent principalement les {gastrocnémiens|gastro}. Le {soléaire|sol} participe aussi.","Des mollets forts améliorent la stabilité de la cheville, la course et les sauts.",["Descends le talon le plus bas possible pour bien étirer, puis monte sur la pointe.","Fais une pause d'une seconde en haut, sans rebondir."]],
c_rameur:["Le rameur sollicite principalement le {grand dorsal|gd} et les {quadriceps|quad}. Il travaille aussi les {ischio-jambiers|isch}, le {grand fessier|gfes} et le {biceps brachial|bic}, et surtout le {système cardio-vasculaire|cv}.","Un cardio très complet qui fait travailler environ 85 % des muscles, sans choc pour les articulations.",["Pousse d'abord avec les jambes, puis bascule le buste, puis tire avec les bras.","Au retour, fais l'inverse : bras, buste, puis jambes."]],
c_velo:["Le vélo sollicite principalement les {quadriceps|quad}. Le {grand fessier|gfes} et les mollets participent, et il entraîne le {système cardio-vasculaire|cv}.","Un cardio doux pour les genoux et le dos, idéal pour l'échauffement ou la récupération.",["Règle la selle pour que la jambe soit presque tendue en bas du pédalage.","Garde une cadence régulière plutôt que de forcer sur la résistance."]],
c_tapis:["Le tapis sollicite principalement les mollets et les {quadriceps|quad}. Le {grand fessier|gfes} travaille davantage en marche inclinée, et le {système cardio-vasculaire|cv} est entraîné.","La marche inclinée est un cardio efficace et facile à doser, avec peu d'impact sur les articulations.",["Ne te tiens pas aux barres : tu perdrais une grande partie de l'effort.","Augmente la pente avant la vitesse pour progresser."]],
c_elliptique:["L'elliptique sollicite principalement les {quadriceps|quad} et le {grand fessier|gfes}. Les bras poussent et tirent les poignées, et le {système cardio-vasculaire|cv} est entraîné.","Un cardio sans impact qui fait travailler le haut et le bas du corps en même temps.",["Garde le buste droit et appuie sur tout le pied, pas seulement sur la pointe.","Utilise vraiment les bras pour répartir l'effort."]],
c_cordeasauter:["La corde à sauter sollicite principalement les mollets ({gastrocnémiens|gastro} et {soléaire|sol}). Les épaules et les avant-bras font tourner la corde, et le {système cardio-vasculaire|cv} est fortement sollicité.","Un cardio intense et court qui améliore la coordination, l'explosivité et l'endurance.",["Saute bas, sur la pointe des pieds, genoux légèrement fléchis.","Fais tourner la corde avec les poignets, pas avec les bras entiers."]]}}
function GZ(){return{gp:['pecs'],fclav:['pecs'],dant:['delt_ant'],dlat:['delt_lat'],dpost:['delt_post'],tri:['triceps'],bic:['biceps'],brach:['biceps'],brr:['avbras'],gd:['dorsaux'],trap:['haut_dos'],rhom:['haut_dos'],omo:['haut_dos'],ret:['haut_dos'],coif:['delt_post'],lomb:['lombaires'],gfes:['fessiers'],mfes:['fessiers'],quad:['quads'],isch:['ischios'],add:['add'],gastro:['mollets'],sol:['mollets'],gdroit:['abdos'],obl:['obliques'],trans:['abdos'],gain:['abdos','obliques','lombaires'],chp:['mollets','ischios','fessiers','lombaires'],ext:['fessiers','ischios']}}
function txH(t){const G=GL();return esc(t).replace(/\{([^|}]+)\|([a-z_]+)\}/g,(m,w,k)=>G[k]?`<button class="tm" data-tm="${k}">${w}</button>`:w)}
function txBlock(k,n,g){const T=TX()[k];if(!T)return null;return`<p class="txp">${txH(T[0])}</p><p class="txp"><b>Pourquoi le développer ?</b> ${txH(T[1])}</p><div class="txc"><b>Conseils</b><ul>${T[2].map(c=>`<li>${txH(c)}</li>`).join('')}</ul></div>`}
(function(){const bub=document.createElement('div');bub.id='tmb';bub.className='tmb';bub.setAttribute('role','tooltip');document.body.appendChild(bub);let cur=null;
const hide=()=>{bub.classList.remove('on');if(cur)cur.classList.remove('on');cur=null;focusZ(null)};
window.focusZ=function(zz){document.querySelectorAll('.mubig svg.body').forEach(sv=>{sv.classList.toggle('focus',!!zz);sv.querySelectorAll('[data-z]').forEach(p=>p.classList.toggle('fz',!!zz&&zz.includes(p.dataset.z)))})};
document.addEventListener('click',e=>{const b=e.target.closest('.tm');if(!b){if(cur&&!e.target.closest('#tmb')){hide();e.stopPropagation();e.preventDefault()}return}e.stopPropagation();e.preventDefault();if(cur===b){hide();return}const g=GL()[b.dataset.tm];if(!g)return;if(cur)cur.classList.remove('on');cur=b;b.classList.add('on');
const zz=GZ()[b.dataset.tm];bub.innerHTML=(zz?`<div class="tmf">${bodySVG(zz,[],'xs')}</div>`:'')+`<b>${g[0]}</b>${g[1]}`;focusZ(zz);bub.classList.add('on');const r=b.getBoundingClientRect(),w=Math.min(300,innerWidth-24);bub.style.width=w+'px';const x=Math.max(12,Math.min(innerWidth-w-12,r.left+r.width/2-w/2));bub.style.left=x+'px';bub.style.setProperty('--ax',(r.left+r.width/2-x)+'px');
const h=bub.offsetHeight;let y=r.top-h-10,up=true;if(y<56){y=r.bottom+10;up=false}bub.style.top=y+'px';bub.classList.toggle('dn',!up);if(window.hap)hap()},true);
addEventListener('scroll',hide,{passive:true,capture:true});})();


// ===== Lift 3.0 : cœur fiabilisé (dates, données, records, progression, export) =====
function localISO(d){d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
// 1RM estimé (Epley) de la meilleure série ; poids du corps : reps (+1 rep par 2,5 kg de lest)
function e1g(p,bw){const rs=p[5]&&p[5].length?p[5]:[p[2]||0],ws=p[6]||null;let m=0;rs.forEach((r,i)=>{const w=ws&&ws[i]!=null?ws[i]:p[1];m=Math.max(m,bw||!w?r+(w||0)/2.5:w*(1+r/30))});return Math.round(m*10)/10}
function SC(k,p){return e1g(p,!!(D[k]&&D[k].bw))}
// --- échec d'enregistrement : jamais silencieux ---
function saveFail(){const n=$('sfail');if(!n)return;n.hidden=false}
// --- résumé du mois + cardio dans Progression ---
function progExtra(){const el=$('msum'),cd=$('cdo');if(!el||!cd)return;const mo=TI.slice(0,7),ds=new Set();let pb=0,se=0;
Object.keys(D).forEach(k=>D[k].s.forEach(p=>{if(p[0].slice(0,7)!=mo)return;ds.add(p[0]);se+=p[5]?p[5].length:(p[3]||0);if(pr(k,p))pb++}));xDates().forEach(d=>{if(d.slice(0,7)==mo)ds.add(d)});
const nm=new Date(TI).toLocaleDateString('fr-FR',{month:'long',timeZone:'UTC'}).replace(/^./,c=>c.toUpperCase());
el.innerHTML=ds.size?`<div class="msum"><div><b>${ds.size}</b><span>séance${ds.size>1?'s':''}</span></div><div><b>${pb}</b><span>record${pb>1?'s':''} ${lxq('pb')}</span></div><div><b>${se}</b><span>séries</span></div><em>${nm}</em></div>`:'';
const t=dt(TI),mon=+t-((t.getUTCDay()+6)%7)*864e5,W=[0,0,0,0],per={};Object.keys(XS.d||{}).forEach(d=>{const c=XS.d[d].c;if(!c)return;const w=Math.floor((mon+7*864e5-1-+dt(d))/(7*864e5));if(w<0||w>3)return;c.forEach(x=>{W[3-w]+=x.m;per[x.n]=(per[x.n]||0)+x.m})});
const mx=Math.max(1,...W),tot=W.reduce((a,b)=>a+b,0);
cd.innerHTML=tot?`<div class="card cdo"><div class="nm">Cardio · 4 dernières semaines</div><div class="cdb">${W.map((m,i)=>`<div><i style="height:${Math.max(m?6:2,m/mx*64)}px"></i><b>${m}</b><span>${i==3?'Cette sem.':'S-'+(3-i)}</span></div>`).join('')}</div><div class="gp">${Object.keys(per).map(n=>`${esc(n)} : ${per[n]} min`).join(' · ')}</div></div>`:''}
// --- export CSV ---
function csvOut(){const q=v=>{v=String(v??'');return /[";\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v},rows=[['Date','Exercice','Groupe','Charge (kg)','Reps','Séries','RIR','1RM estimé (kg)','Reps par série']];
Object.keys(D).forEach(k=>D[k].s.forEach(p=>rows.push([p[0],D[k].n,D[k].g,p[1],p[2]??'',p[3]??'',p[4]??'',D[k].bw?'':e1g(p),p[5]?p[5].join('/'):''])));
Object.keys(XS.d||{}).forEach(d=>(XS.d[d].c||[]).forEach(c=>rows.push([d,c.n,'Cardio','','',c.m+' min','',INT()[c.i],''])));
rows.sort((a,b)=>a[0]<b[0]?1:-1);const data='﻿'+rows.map(r=>r.map(q).join(';')).join('\n');
try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/csv;charset=utf-8'}));a.download='lift-seances-'+TI+'.csv';document.body.appendChild(a);a.click();a.remove();toast('Tableur prêt (s\'ouvre dans Excel, Numbers, Sheets)')}catch(e){toast('Export impossible sur ce navigateur')}}
// --- import Hevy / Strong ---
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
// --- rappels dans l'agenda (.ics) ---
function openRap(){const P=PF.rap||{d:['MO','WE','FR'].slice(0,Math.min(3,G())),h:'18:30'},J=[['MO','L'],['TU','M'],['WE','M'],['TH','J'],['FR','V'],['SA','S'],['SU','D']];RP={d:P.d.slice(),h:P.h};
const draw=()=>{$('rapp').innerHTML=`<h3>Rappels de séance</h3><div class="mut" style="margin-bottom:12px">Lift ajoute tes jours d'entraînement à l'agenda de ton téléphone, avec une alerte. Tu pourras les modifier ou les supprimer depuis l'agenda.</div>
<div class="gh">Jours</div><div class="rjs">${J.map(([c,l])=>`<button data-rj="${c}" class="${RP.d.includes(c)?'on':''}">${l}</button>`).join('')}</div>
<div class="fr"><span>Heure</span><input type="time" id="raph" value="${RP.h}"></div>
<button class="cta" id="rapgo">Ajouter à mon agenda</button><button class="ghost" id="rapx">Annuler</button>`};draw();
$('rapp').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.rj){const i=RP.d.indexOf(b.dataset.rj);i>=0?RP.d.splice(i,1):RP.d.push(b.dataset.rj);RP.h=$('raph').value||RP.h;draw();return}
if(b.id=='rapx'){$('rapsheet').classList.remove('open');return}
if(b.id=='rapgo'){RP.h=$('raph').value||'18:30';if(!RP.d.length){toast('Choisis au moins un jour');return}PF.rap=RP;pfS();icsOut(RP);$('rapsheet').classList.remove('open')}};
$('rapsheet').classList.add('open')}
var RP=null;
function icsOut(P){const[hh,mm]=P.h.split(':'),now=new Date(),st=localISO(now).replace(/-/g,''),stamp=new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z',ord=['SU','MO','TU','WE','TH','FR','SA'];
const ev=P.d.map(c=>{const d=new Date();d.setDate(d.getDate()+((ord.indexOf(c)-d.getDay()+7)%7));const ds=localISO(d).replace(/-/g,'');
return['BEGIN:VEVENT','UID:lift-'+c+'-'+st+'@lift','DTSTAMP:'+stamp,'DTSTART:'+ds+'T'+hh+mm+'00','DURATION:PT1H','RRULE:FREQ=WEEKLY;BYDAY='+c,'SUMMARY:Séance Lift','DESCRIPTION:Ouvre Lift et démarre ta séance.','BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Séance Lift','TRIGGER:-PT15M','END:VALARM','END:VEVENT'].join('\r\n')});
const data=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Lift//FR','CALSCALE:GREGORIAN',...ev,'END:VCALENDAR'].join('\r\n');
try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/calendar'}));a.download='lift-rappels.ics';document.body.appendChild(a);a.click();a.remove();toast('Ouvre le fichier pour ajouter les rappels à ton agenda')}catch(e){toast('Impossible de créer le fichier')}}

// ===== Lift 2.2 : accueil, séance (ajout + cardio), tutoriel, lexique, ressenti, objectifs =====
function xDates(){const d=(XS&&XS.d)||{};return Object.keys(d).filter(k=>d[k].c&&d[k].c.length)}
function ck(n){return 'c_'+String(n).toLowerCase().normalize('NFD').replace(/[^a-z]/g,'')}
function INT(){return['Facile','Soutenu','Dur']}
// --- phrase d'accueil ---
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
// --- lexique ---
function LX(){return{
rir:['RIR · répétitions en réserve','Le nombre de reps que tu aurais encore pu faire à la fin d\'une série. RIR 0 : impossible d\'en faire une de plus. RIR 2 : tu t\'arrêtes 2 reps avant l\'échec.'],
pb:['PB · record personnel','Ta meilleure performance sur cet exercice : un 1RM estimé plus haut que jamais, donc plus lourd ou plus de reps. Au poids du corps, plus de reps.'],
sb:['SB · meilleure de la saison','Ta meilleure performance des 8 dernières semaines, sans battre ton record.'],
ecart:['Écart','La différence de charge avec ta séance précédente sur cet exercice.'],
orm:['1RM estimé','La charge que tu pourrais soulever une seule fois, calculée à partir de ta charge, tes reps et ton RIR. Sert de repère en force, sans test au maximum.'],
alg:['Semaine d\'allègement','Une semaine plus légère (charges −10 % ou une série de moins, RIR 3) pour récupérer et repartir plus fort.'],
ss:['Superset','Deux exercices enchaînés sans repos entre les deux, puis le repos normal.']}}
function lxq(k){return`<button class="lxq" data-lx="${k}" aria-label="Définition : ${LX()[k][0]}">?</button>`}
document.addEventListener('click',e=>{const b=e.target.closest('[data-lx]');if(!b)return;e.stopPropagation();const x=LX()[b.dataset.lx];if(!x)return;$('lxt').textContent=x[0];$('lxd').textContent=x[1];$('lxsheet').classList.add('open')},true);
$('lxok').onclick=()=>$('lxsheet').classList.remove('open');
$('lxall').onclick=()=>{$('lxsheet').classList.remove('open');document.querySelectorAll('.sheet.open').forEach(s=>{if(s.id!='live')s.classList.remove('open')});if(L)return toast('Lexique disponible dans les réglages après la séance');go('r');setTimeout(()=>{const l=$('lexique');l&&l.scrollIntoView({block:'start',behavior:'smooth'})},60)};
// --- objectifs ---
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
$('objp').onclick=e=>{const b=e.target.closest('[data-tp]');if(!b)return;const id=b.dataset.tp;$('objsheet').classList.remove('open');if(!id||id==(XS.o||'masse'))return;applyObj(id,false);render();if(view=='r'&&window.setR)setR();toast('Objectif : '+OBJS()[id].n+' · programme prêt')};
// --- tutoriel ---
function openOnb(h){OB={h:!!h,s:0,tp:XS.o||'masse'};onbR();$('osheet').classList.add('open')}
function onbR(){const pk=obPick(),N=pk?4:3,s=OB.s,last=s==N-1;
const dots=Array.from({length:N},(_,i)=>`<i class="${i==s?'on':''}"></i>`).join('');
const S=[
`<div class="obv"><img src="icon-192.png" alt="" width="72" height="72" style="border-radius:16px"></div><h3>${OB.h?'Le guide de Lift':'Bienvenue sur Lift'}</h3><p class="obp">Ton carnet de musculation. Tu suis ton programme, tu notes chaque série en quelques secondes, et tu vois ta progression exercice par exercice.</p>`,
`<div class="obv"><div class="obr">${[['0','r0','À fond, impossible d\'en faire une de plus'],['1','r1','Encore 1 rep possible'],['2','r2','Encore 2 reps possibles'],['3+','r3','Assez facile']].map(([n,c,l])=>`<div><span class="rir ${c}">${n}</span>${l}</div>`).join('')}</div></div><h3>Le RIR</h3><p class="obp"><b>Répétitions en réserve</b> : le nombre de reps que tu aurais encore pu faire. Tu fais 8 reps et tu aurais pu en faire 2 de plus : c'est RIR 2. Lift s'en sert pour te dire quand monter la charge.</p>`,
`<div class="obv"><div class="obx"><span>Développé couché</span><b>72,5 kg<em class="pr">PB</em></b></div><div class="obx"><span>Squat</span><b>100 kg<em class="sbt">SB</em></b></div></div><h3>Tes records</h3><p class="obp"><b>PB</b> : record personnel, que tu aies soulevé plus lourd ou fait plus de reps. <b>SB</b> : ta meilleure performance des 8 dernières semaines. Touche un <b>?</b> dans l'appli pour retrouver chaque définition.</p>`,
`<h3>Toi</h3><div class="gh" style="margin-top:12px">Ton prénom</div><input class="tx" id="opn" maxlength="20" placeholder="Prénom (facultatif)" autocomplete="given-name" value="${esc(PF.n||'')}"><div class="gh">Ton objectif</div>${objList(OB.tp)}<button class="ghost" data-tp="vide" style="${OB.tp=='vide'?'color:var(--tx);font-weight:800':''}">${OB.tp=='vide'?'✓ ':''}Je crée mon programme moi-même</button><div class="gp">Lift prépare un programme adapté. Tu pourras le modifier, ou changer d'objectif, dans les réglages.</div>`];
$('op').innerHTML=`<div class="obh"><div class="obd">${dots}</div>${last?'':`<button class="obs" data-o="skip">Passer</button>`}</div>${S[s]}<button class="cta" data-o="next">${last?(OB.h?'Terminer':'Commencer'):'Suivant'}</button>${s?`<button class="ghost" data-o="prev">Retour</button>`:''}`}
$('op').onclick=e=>{const b=e.target.closest('button');if(!b)return;const pn=$('opn');if(pn)PF.n=cleanT(pn.value).slice(0,20);
if(b.dataset.tp!==undefined){OB.tp=b.dataset.tp;onbR();return}
const o=b.dataset.o,pk=obPick(),N=pk?4:3;
if(o=='prev'){OB.s=Math.max(0,OB.s-1);onbR();return}
if(o=='next'&&OB.s<N-1){OB.s++;onbR();$('op').scrollTop=0;return}
if(!o)return;if(pk)applyObj(OB.tp,true);PF.ob=1;pfS();try{cpush()}catch(x){}$('osheet').classList.remove('open');render();if(pk&&OB.tp=='vide')openEd()};
// --- séance en direct : ajout d'exercice et cardio ---
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
// --- ressenti après séance ---
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
function cRows(d){const x=XS.d&&XS.d[d];return((x&&x.c)||[]).map(c=>`<div class="exw"><div class="ex"><span><em class="gd" style="background:#6E747A"></em>${esc(c.n)}<i>Cardio</i></span><b>${c.m} min · ${INT()[c.i].toLowerCase()}</b></div></div>`).join('')}
function fbRow(d){const f=XS.d&&XS.d[d]&&XS.d[d].f;if(!f)return'';const T=Object.fromEntries(FBTAGS());const p=[];if(f.r)p.push('Ressenti : '+f.r.toLowerCase());Object.keys(f.t||{}).forEach(g=>p.push(g+' : '+f.t[g].map(x=>T[x].toLowerCase()).join(', ')));return`<div class="gp note">${p.join(' · ')}</div>`}
function sessSub(n,tv,d){const x=XS.d&&XS.d[d],cm=((x&&x.c)||[]).reduce((a,c)=>a+c.m,0),p=[];if(n)p.push(n+' exercice'+(n>1?'s':'')+' · '+tv+' série'+(tv>1?'s':''));if(cm)p.push(cm+' min de cardio');return p.join(' · ')}
