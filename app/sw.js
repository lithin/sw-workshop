

self.addEventListener('install', function(event) {
  console.log('Hello DevFest Berlin 2016!');
  event.waitUntil(function() {
    return caches.open('3')
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
    .then(response => {

      if (event.request.url.endsWith('/get')) {
        caches.open('3')
          .then(cache => {            
            const init = { 
              "status" : 200 , 
              "statusText" : "CACHED"
            };
            response.blob().then(blob => {
              cache.put(event.request, new Response(blob, init));
            });
          });

        return response.clone();
      }
      return response;
    })
    .catch(err => {
      return caches.match(event.request)
      .then(response => response);
    }));
  }
);
