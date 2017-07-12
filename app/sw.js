const CACHE_VERSION = '3'

self.addEventListener('install', function(event) {
  console.log('Hello FullStack 2017!');
  event.waitUntil(function() {
    return caches.open(CACHE_VERSION)
      .then(cache => {
        return cache.addAll([
          '/',
          'style.css',
          'bundle.js',
          '7160c3f41f57796b29fff534eadc43c.jpeg'
        ]);
      });
  });
});
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request)
    .catch(err => {
      return caches.match(event.request)
        .then(response => {
          return response;
        });
    }));
  }
);
