// Lift · Contenu pédagogique : muscles, schémas, fiches, lexique
// Fonctions chargées avant js/app.js (qui contient l'état et le démarrage).

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

function LX(){return{
rir:['RIR · répétitions en réserve','Le nombre de reps que tu aurais encore pu faire à la fin d\'une série. RIR 0 : impossible d\'en faire une de plus. RIR 2 : tu t\'arrêtes 2 reps avant l\'échec.'],
pb:['PB · record personnel','Ta meilleure performance sur cet exercice : un 1RM estimé plus haut que jamais, donc plus lourd ou plus de reps. Au poids du corps, plus de reps.'],
sb:['SB · meilleure de la saison','Ta meilleure performance des 8 dernières semaines, sans battre ton record.'],
ecart:['Écart','La différence de charge avec ta séance précédente sur cet exercice.'],
orm:['1RM estimé','La charge que tu pourrais soulever une seule fois, calculée à partir de ta charge, tes reps et ton RIR. Sert de repère en force, sans test au maximum.'],
alg:['Semaine d\'allègement','Une semaine plus légère (charges −10 % ou une série de moins, RIR 3) pour récupérer et repartir plus fort.'],
ss:['Superset','Deux exercices enchaînés sans repos entre les deux, puis le repos normal.']}}

function lxq(k){return`<button class="lxq" data-lx="${k}" aria-label="Définition : ${LX()[k][0]}">?</button>`}
