const CACHE_VERSION = '3'

self.addEventListener('install', function(event) {
  console.log('Hello DevFest Berlin 2016!');
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
    .then(response => {

      if (event.request.url.endsWith('/get')) {
        caches.open(CACHE_VERSION)
          .then(cache => {
            cache.put(event.request, response);
          });

        return response.clone();
      }
      return response;
    })
    .catch(err => {
      console.log(event.request)
      return caches.match(event.request)
        .then(response => {
          // check if response is cached with cached statusText
          if (response && response.statusText == 'OK') {
            const init = {
              "status" : 200,
              "statusText" : "Cached"
            };
            return response.blob()
              .then(blob => {
                var newResponse = new Response(blob, init);
                caches.open(CACHE_VERSION)
                  .then(cache => {
                    cache.put(event.request, newResponse);
                  });
                console.log(newResponse.clone())
                return newResponse.clone();
              });
          }
          // already modfied
          return response;
        });
    }));
  }
);
