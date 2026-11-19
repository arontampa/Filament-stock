const CACHE = 'filament-v1';
const ASSETS = ['index.html', 'manifest.json', 'icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  if(e.request.method === 'GET' && !e.request.url.includes('googleapis.com') && !e.request.url.includes('firebaseio.com')){
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
