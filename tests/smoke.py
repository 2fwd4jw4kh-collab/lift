"""Tests de fumée de Lift (navigateur réel, sans réseau).
Lancer depuis la racine du dépôt :  python3 -m http.server 8765 &  puis  python3 tests/smoke.py
Nécessite : pip install playwright  (et un Chrome/Chromium)."""
import json,datetime,sys,os,tempfile
from playwright.sync_api import sync_playwright
URL=os.environ.get('LIFT_URL','http://localhost:8765/index.html')
CHROME=os.environ.get('CHROME','/usr/bin/google-chrome')
LAUNCH={'args':['--no-sandbox']}
if CHROME and os.path.exists(CHROME):LAUNCH['executable_path']=CHROME
T=datetime.date(2026,11,16)
def d(n):return (T-datetime.timedelta(days=n)).isoformat()
ex={'dcs':('Développé couché (Smith)','Couché Smith','Pectoraux',[60,62.5,62.5,65,65,67.5,67.5,70]),
'tv':('Tirage vertical prise large','Tirage vertical','Dos',[55,57.5,57.5,60,62.5,62.5,65,62.5]),
'pc':('Presse à cuisses','Presse cuisses','Jambes',[140,150,150,160,165,170,170,180])}
D={k:{'n':n,'sn':sn,'g':g,'s':[[d(7*(7-i)+1),w[i],8 if i%2 else 10,3,1] for i in range(8)]} for k,(n,sn,g,w) in ex.items()}
# même charge, plus de reps : doit être un record (1RM estimé)
D['cm']={'n':'Curl marteau','sn':'Curl marteau','g':'Bras','s':[[d(15),16,8,3,1],[d(8),16,11,3,1]]}
ST=json.dumps({'D':D,'SE':{},'NT':{},'DL':[]})
ok=True
EV=[]
def check(name,cond):
  global ok;print(('OK   ' if cond else 'ÉCHEC'),name);ok=ok and bool(cond)
with sync_playwright() as p:
  b=p.chromium.launch(**LAUNCH)
  def ctx(seed=True,when='2026-11-16T18:00:00'):
    c=b.new_context(viewport={'width':390,'height':844},device_scale_factor=1,is_mobile=True,has_touch=True,locale='fr-FR',timezone_id='Europe/Paris',accept_downloads=True)
    c.route('https://cdn.jsdelivr.net/**',lambda r:r.abort())
    c.route('**/rest/v1/lift_events',lambda r:(EV.extend(json.loads(r.request.post_data or '[]')),r.fulfill(status=201,body='')))
    pg=c.new_page();errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.clock.install(time=datetime.datetime.fromisoformat(when+'+01:00'))
    pg.goto(URL)
    if seed:pg.evaluate(f"localStorage.setItem('lift-v4',{json.dumps(ST)});localStorage.setItem('lift-pf',JSON.stringify({{ob:1,n:'Max'}}))");pg.reload()
    pg.wait_for_timeout(800);return c,pg,errs
  # 1. date locale après minuit
  c,pg,errs=ctx(when='2026-11-17T00:30:00');check('date du jour à 0 h 30 = 17 nov.',pg.evaluate('TI')=='2026-11-17');c.close()
  c,pg,errs=ctx()
  # 2. record en reps à charge égale
  check('PB détecté à charge égale avec plus de reps',pg.evaluate("pr('cm',D.cm.s[1])"))
  # 3. séance : 1re série visible sans défiler
  pg.evaluate("startLive('A')");pg.wait_for_timeout(500);y=pg.locator('#lp .setr').first.bounding_box()['y'];check(f'1re série visible sans défiler (y={int(y)})',y<700)
  pg.evaluate("endLive()")
  # 4. Progression : résumé du mois
  pg.click('.tabbar button[data-v="p"]');pg.wait_for_timeout(300);check('résumé du mois affiché',pg.evaluate("!!document.querySelector('#msum .msum')"))
  check('graphique en 1RM estimé par défaut',pg.evaluate("met")=='e')
  # 5. export CSV
  with pg.expect_download() as dl:pg.evaluate("csvOut()")
  path=dl.value.path();txt=open(path,encoding='utf-8-sig').read();check('export CSV',txt.startswith('Date;Exercice') and 'Presse à cuisses' in txt)
  # 6. import Hevy + Strong
  hevy='title,start_time,end_time,description,exercise_title,superset_id,exercise_notes,set_index,set_type,weight_kg,reps,distance_km,duration_seconds,rpe\n"Push","10 Nov 2026, 18:00","10 Nov 2026, 19:00","","Bench Press (Barbell)",,"",0,warmup,40,10,,,\n"Push","10 Nov 2026, 18:00","10 Nov 2026, 19:00","","Bench Press (Barbell)",,"",1,normal,80,6,,,8\n"Push","10 Nov 2026, 18:00","10 Nov 2026, 19:00","","Bench Press (Barbell)",,"",2,normal,80,5,,,9\n'
  strong='Date;Workout Name;Duration;Exercise Name;Set Order;Weight;Reps;Distance;Seconds;Notes;Workout Notes;RPE\n2026-11-11 18:00:00;Legs;1h;Squat (Barbell);1;100;5;0;0;;;\n2026-11-11 18:00:00;Legs;1h;Squat (Barbell);2;100;5;0;0;;;\n'
  for name,data in (('Hevy',hevy),('Strong',strong)):
    f=os.path.join(tempfile.gettempdir(),name+'.csv');open(f,'w').write(data)
    r=pg.evaluate("t=>importCSV(t)",data);check(f'import {name} : {r}',r[1]==1)
  check('import Hevy : échauffement ignoré, RPE 9 -> RIR 1',pg.evaluate("(()=>{const k=Object.keys(D).find(k=>D[k].n=='Bench Press (Barbell)');const p=D[k].s[0];return p[3]==2&&p[4]==1&&D[k].g=='Pectoraux'})()"))
  # 7. échec d'écriture signalé
  pg.evaluate("Storage.prototype._s=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new DOMException('plein','QuotaExceededError')};save();0")
  check('échec d\'écriture signalé',pg.evaluate("!$('sfail').hidden"))
  pg.evaluate("Storage.prototype.setItem=Storage.prototype._s;0")
  # 8. rappels agenda
  pg.evaluate("$('sfail').hidden=true;openRap()");pg.wait_for_timeout(400)
  with pg.expect_download() as dl:pg.click('#rapgo')
  ics=open(dl.value.path()).read();check('fichier agenda .ics',ics.startswith('BEGIN:VCALENDAR') and 'RRULE:FREQ=WEEKLY' in ics)
  pg.evaluate("window._m='';const d=Object.getOwnPropertyDescriptor(Location.prototype,'href');window.giveFeedback.toString().includes('mailto')&&(window._m='ok')")
  check('bouton Donner mon avis (mail pré-rempli)',pg.evaluate("window._m")=='ok')
  check('aucune erreur JavaScript',not errs);print(errs) if errs else None
  c.close()
  # 9. premier lancement : tutoriel d'abord, compte après la 1re séance
  EV.clear();c,pg,errs=ctx(seed=False)
  check('premier lancement : tutoriel ouvert, pas le compte',pg.evaluate("$('osheet').classList.contains('open')&&!$('wsheet').classList.contains('open')"))
  for i in range(4):pg.click('#op [data-o="next"]');pg.wait_for_timeout(200)
  pg.evaluate("startLive(Object.keys(PLAN)[0]);L.it[0].ok=true;saveLive()");pg.wait_for_timeout(1700)
  check('compte proposé après la 1re séance',pg.evaluate("$('wsheet').classList.contains('open')"))
  check('statistiques : début + 1re séance + séance envoyés',sorted(set(e['ev'] for e in EV))==['first_session','session','start'] and all(set(e)=={'aid','ev','d','v'} for e in EV))
  check('aucune erreur JavaScript (premier lancement)',not errs);print(errs) if errs else None
  c.close();b.close()
print('\nRÉSULTAT :','tout est bon' if ok else 'des tests échouent');sys.exit(0 if ok else 1)
