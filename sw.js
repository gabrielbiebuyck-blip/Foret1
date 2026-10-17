// Service worker : sert les tuiles téléchargées sans réseau, et l’application elle-même.
const SHELL = 'shell-v1', TILES = 'tuiles-v1', TILE_HOST = 'geoegl.msp.gouv.qc.ca';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL)
    .then(c => c.addAll(['./', './index.html', './manifest.webmanifest', './icon-192.png']))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.hostname === TILE_HOST) {
    // Tuiles : d’abord celles du téléphone, sinon le réseau
    e.respondWith(
      caches.open(TILES)
        .then(c => c.match(req.url, { ignoreVary: true }))
        .then(hit => hit || fetch(req))
        .catch(() => Response.error()));
  } else if (u.origin === location.origin) {
    // Application : copie locale tout de suite, mise à jour en arrière-plan
    e.respondWith(caches.open(SHELL).then(async c => {
      const hit = await c.match(req, { ignoreSearch: true });
      const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
      return hit || (await net) || Response.error();
    }));
  }
});
