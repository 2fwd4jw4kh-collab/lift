// Lift · Progression et historique : graphique, records, listes, édition des perfs
// Fonctions chargées avant js/app.js (qui contient l'état et le démarrage).

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

function openAdd(d){if(!Object.keys(D).length){openNew();return}ed=null;nw=false;$('nw').hidden=true;xk=sel[0];const p=D[xk].s.at(-1);F={w:p[1],r:p[2]||10,s:p[3]||3,i:p[4]??2};$('sht').textContent='Ajouter une perf';$('dd').value=d;sl=SE[d]||'';sheet();$('sheet').classList.add('open')}

function lastS(){const el=$('last');if(!el)return;const d=[...new Set(Object.values(D).flatMap(e=>e.s.map(p=>p[0])))].sort().at(-1);if(!d){el.innerHTML='';return}
const ks=Object.keys(D).filter(k=>D[k].s.some(p=>p[0]==d)),dd=dt(d);let tv=0;ks.forEach(k=>{const q=D[k].s.find(x=>x[0]==d);tv+=q[5]?q[5].length:(q[3]||0)});
const rows=byG(ks).slice(0,5).map(k=>{const p=D[k].s.find(x=>x[0]==d);return`<div class="lr"><span><em class="gd" style="background:${gcol(k)}"></em>${D[k].sn}</span><b>${f1(p[1])} kg · ${p[5]?rtx(p):(p[3]??'–')+'×'+(p[2]??'–')}</b></div>`}).join('');
el.innerHTML=`<button class="card lastc" data-go="s"><div class="sh"><div><div class="mut">Dernière séance</div><div class="nm" style="font-size:16px;font-weight:600;margin-top:2px">${WD[dd.getUTCDay()]} ${dl(d)}</div><div class="gp">${ks.length} exercice${ks.length>1?'s':''} · ${tv} série${tv>1?'s':''}</div></div>${SE[d]?`<span class="pill sb">${SE[d]=='Alt'?'Séance alternative':'Séance '+SE[d]}</span>`:''}</div>${rows}${ks.length>5?`<div class="gp" style="margin-top:8px">+ ${ks.length-5} autre${ks.length>6?'s':''}</div>`:''}</button>`}

function fclick(e){const b=e.target.closest('button');if(!b)return;
if(b.dataset.tg){togSr();rf();return}
if(b.dataset.sa){const n=+b.dataset.sa;if(n>0&&F.sr.length<20)F.sr.push(F.sr.at(-1));else if(n<0&&F.sr.length>1)F.sr.pop();F.s=F.sr.length;rf();return}
if(b.dataset.sd){const i=+b.dataset.si;F.sr[i]=cl(F.sr[i]+ +b.dataset.sd,'r');rf();return}if(b.dataset.d){F[b.dataset.f]=cl(F[b.dataset.f]+ +b.dataset.d,b.dataset.f);rf()}else if(b.dataset.i!==undefined){F.i=b.dataset.i===''?null:+b.dataset.i;rf()}}

function fchg(e){const t=e.target;if(t.tagName=='INPUT'&&t.dataset.f=='sr'){const v=parseFloat(String(t.value).replace(',','.'));if(!isNaN(v))F.sr[+t.dataset.si]=cl(v,'r');rf();return}if(t.tagName=='INPUT'&&t.dataset.f){const v=parseFloat(String(t.value).replace(',','.'));if(String(t.value).trim()===''&&t.dataset.f!='w')F[t.dataset.f]=null;else if(!isNaN(v))F[t.dataset.f]=cl(v,t.dataset.f);rf()}}

function wk(){progExtra();if(!$('wk'))return;const g={};Object.values(D).forEach(e=>e.s.forEach(p=>{const a=(T0-dt(p[0]))/864e5;if(a<0||a>=14||!vol(p))return;const o=g[e.g]||(g[e.g]=[0,0]);o[a<7?0:1]+=vol(p)}));
const rows=CATS.filter(c=>g[c]),mx=Math.max(1,...rows.map(c=>g[c][0]));
$('wk').innerHTML=rows.length?rows.map(c=>{const a=g[c][0],b=g[c][1],d=b?Math.round((a/b-1)*100):null;return`<div class="wr"><span style="color:${GC[c]}">${c}</span><div class="bar"><i style="width:${a/mx*100}%;background:${GC[c]}"></i></div><b>${Math.round(a)} kg</b><em>${d==null?'':(d>=0?'+':'')+d+' %'}</em></div>`}).join('')+'<div class="gp" style="margin-top:6px">Variation vs les 7 jours précédents</div>':'<div class="gp">Aucune séance sur les 14 derniers jours.</div>'}

function openMerge(){const k=sel[0],ks=Object.keys(D).filter(x=>x!=k);if(!ks.length)return;$('mtx').textContent='Les perfs de « '+D[k].n+' » seront déplacées dans l\'exercice choisi (même date : celui-ci est conservé).';
$('mt').innerHTML=CATS.map(c=>{const a=ks.filter(x=>D[x].g==c);return a.length?`<optgroup label="${c}">`+a.map(x=>`<option value="${x}">${D[x].n}</option>`).join('')+'</optgroup>':''}).join('');$('msheet').classList.add('open')}

function openEdit(k,d){const p=D[k]&&D[k].s.find(x=>x[0]==d);if(!p)return;nw=false;$('nw').hidden=true;ed={k,d};xk=k;F={w:p[1],r:p[2],s:p[3],i:p[4],sr:p[5]?p[5].slice():null};pdq=false;$('sht').textContent='Modifier la perf';$('dd').value=d;sl=SE[d]||'';sheet();$('sheet').classList.add('open')}

function openNew(){ed=null;nw=true;nc=cat!='Tous'?cat:'Pectoraux';F={w:20,r:10,s:3,i:2};$('dd').value=TI;sl=SE[TD]||'';$('sht').textContent='Nouvel exercice';$('nm').value='';$('nw').hidden=false;sheet();$('sheet').classList.add('open')}

function saveX(){const P=PLAN[E.c],x=E.x,nm=cleanT(x.n).slice(0,40);if(!nm){$('exn').focus();return false}const lo=nm.toLowerCase(),old=E.i!=null?P.ex[E.i]:null;let k=old&&old.n.toLowerCase()==lo?old.k:Object.keys(D).find(q=>D[q].n.toLowerCase()==lo);
if(!k)Object.values(TPL).forEach(T=>Object.values(T.P).forEach(S=>S.ex.forEach(e=>{if(!k&&e.n.toLowerCase()==lo)k=e.k})));if(!k)Object.values(PLAN).forEach(S=>S.ex.forEach(e=>{if(!k&&e.n.toLowerCase()==lo)k=e.k}));if(!k)k='x'+Date.now();
if(P.ex.some((e,i)=>e.k==k&&i!==E.i)){toast('Cet exercice est déjà dans la séance');return false}
const o={k,n:nm,sn:D[k]?D[k].sn:(nm.length>18?nm.slice(0,17)+'…':nm),g:D[k]?D[k].g:x.g,s:x.s,lo:x.lo,hi:x.hi,rl:x.rl,rh:x.rh,rest:x.rest,w:x.w||0,inc:x.inc,ss:old?old.ss:undefined};
if(E.i==null)P.ex.push(o);else P.ex[E.i]=o;save();E={v:'s',c:E.c};return true}

function byG(ks){const F=['Pectoraux','Épaules','Dos','Bras','Jambes','Abdos'],o=c=>{const i=F.indexOf(c);return i<0?99:i};return ks.slice().sort((a,b)=>o(D[a].g)-o(D[b].g))}

function progExtra(){const el=$('msum'),cd=$('cdo');if(!el||!cd)return;const mo=TI.slice(0,7),ds=new Set();let pb=0,se=0;
Object.keys(D).forEach(k=>D[k].s.forEach(p=>{if(p[0].slice(0,7)!=mo)return;ds.add(p[0]);se+=p[5]?p[5].length:(p[3]||0);if(pr(k,p))pb++}));xDates().forEach(d=>{if(d.slice(0,7)==mo)ds.add(d)});
const nm=new Date(TI).toLocaleDateString('fr-FR',{month:'long',timeZone:'UTC'}).replace(/^./,c=>c.toUpperCase());
el.innerHTML=ds.size?`<div class="msum"><div><b>${ds.size}</b><span>séance${ds.size>1?'s':''}</span></div><div><b>${pb}</b><span>record${pb>1?'s':''} ${lxq('pb')}</span></div><div><b>${se}</b><span>séries</span></div><em>${nm}</em></div>`:'';
const t=dt(TI),mon=+t-((t.getUTCDay()+6)%7)*864e5,W=[0,0,0,0],per={};Object.keys(XS.d||{}).forEach(d=>{const c=XS.d[d].c;if(!c)return;const w=Math.floor((mon+7*864e5-1-+dt(d))/(7*864e5));if(w<0||w>3)return;c.forEach(x=>{W[3-w]+=x.m;per[x.n]=(per[x.n]||0)+x.m})});
const mx=Math.max(1,...W),tot=W.reduce((a,b)=>a+b,0);
cd.innerHTML=tot?`<div class="card cdo"><div class="nm">Cardio · 4 dernières semaines</div><div class="cdb">${W.map((m,i)=>`<div><i style="height:${Math.max(m?6:2,m/mx*64)}px"></i><b>${m}</b><span>${i==3?'Cette sem.':'S-'+(3-i)}</span></div>`).join('')}</div><div class="gp">${Object.keys(per).map(n=>`${esc(n)} : ${per[n]} min`).join(' · ')}</div></div>`:''}

function cRows(d){const x=XS.d&&XS.d[d];return((x&&x.c)||[]).map(c=>`<div class="exw"><div class="ex"><span><em class="gd" style="background:#6E747A"></em>${esc(c.n)}<i>Cardio</i></span><b>${c.m} min · ${INT()[c.i].toLowerCase()}</b></div></div>`).join('')}

function fbRow(d){const f=XS.d&&XS.d[d]&&XS.d[d].f;if(!f)return'';const T=Object.fromEntries(FBTAGS());const p=[];if(f.r)p.push('Ressenti : '+f.r.toLowerCase());Object.keys(f.t||{}).forEach(g=>p.push(g+' : '+f.t[g].map(x=>T[x].toLowerCase()).join(', ')));return`<div class="gp note">${p.join(' · ')}</div>`}

function sessSub(n,tv,d){const x=XS.d&&XS.d[d],cm=((x&&x.c)||[]).reduce((a,c)=>a+c.m,0),p=[];if(n)p.push(n+' exercice'+(n>1?'s':'')+' · '+tv+' série'+(tv>1?'s':''));if(cm)p.push(cm+' min de cardio');return p.join(' · ')}
