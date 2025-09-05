const cacheName = 'lucefa-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon_192x192.png',
  './icon_512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
