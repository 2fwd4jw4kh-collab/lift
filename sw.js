// Lift – hors-ligne : réseau d'abord (sans cache HTTP, pour recevoir tout de suite les mises à jour), cache en secours.
const C='lift-v21',FILES=['./','index.html','css/app.css','js/contenu.js','js/donnees.js','js/progression.js','js/programme.js','js/seance.js','js/app.js','js/reglages.js','js/gestes.js','js/finitions.js','fonts/archivo.woff2','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!='GET'||u.origin!=location.origin)return;
const req=e.request.mode=='navigate'?fetch(u.href,{cache:'no-cache',credentials:'same-origin'}):fetch(e.request,{cache:'no-cache'});
e.respondWith(req.then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))))});
