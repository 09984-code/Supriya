const CACHE_NAME = 'space-game-v1-สุปรียา2';
const ASSETS_TO_CACHE = [
  './',
  './index_สุปรียา2.html',
  './manifest_สุปรียา2.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600;700&display=swap'
];

// ติดตั้ง Service Worker และบันทึก Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// เรียกใช้ Cache เมื่อใช้งาน Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});