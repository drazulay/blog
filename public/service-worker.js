var CACHE_NAME = 'danielazulay.eu';
var urlsToCache = [
  '/',
  '/logo96.png',
  '/logo144.png',
  '/styles.css',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});
