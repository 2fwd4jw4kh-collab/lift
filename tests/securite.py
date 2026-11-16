"""Vérifie qu'un inconnu (sans compte, avec la clé publique de l'appli) ne peut rien lire dans Supabase.
Lecture seule : ce test n'écrit jamais rien."""
import json,re,sys,urllib.request,urllib.error,glob
src=''.join(open(f).read() for f in glob.glob('js/*.js'))
U=re.search(r"SB_URL='([^']+)'",src).group(1);K=re.search(r"SB_KEY='([^']+)'",src).group(1)
ok=True
for t in ['lift_state','lift_events']:
  r=urllib.request.Request(f'{U}/rest/v1/{t}?select=*&limit=5',headers={'apikey':K,'Authorization':'Bearer '+K})
  try:
    body=urllib.request.urlopen(r,timeout=20).read().decode();rows=json.loads(body)
    if rows:print(f'DANGER {t} : {len(rows)} ligne(s) lisible(s) sans compte');ok=False
    else:print(f'OK     {t} : rien de lisible sans compte')
  except urllib.error.HTTPError as e:
    msg=e.read().decode()[:160]
    if e.code==404 or 'does not exist' in msg or 'PGRST205' in msg:print(f'INFO   {t} : table absente ({e.code})')
    else:print(f'OK     {t} : refusé ({e.code})')
print('\nRÉSULTAT :','aucune fuite' if ok else 'FUITE DE DONNÉES');sys.exit(0 if ok else 1)
