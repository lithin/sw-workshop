const staticAssets = [
  '/',
  'bundle.js',
  'style.css',
  '7160c3f41f57796b29fff534eadc43c6.jpeg'
]

self.addEventListener('install', (event) => {
  console.log('service worker installed');

  event.waitUntil(
    caches.open('hello').then(cache => {
      cache.addAll(staticAssets);
    })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).then((response) => {
    if (event.request.url.indexOf('/get') !== -1) {
      console.log('it\' the get!');
      caches.open('hello').then(cache => {

        response.blob().then( (blob) => {
          var newResp = new Response( blob, {
            status:200,
            statusText:"cached"
          });
          cache.put(event.request, newResp);
        })

      });
    }
    return response.clone();
  }).catch(() => {

      return caches.open('hello').then(cache => {

        return cache.match(event.request);
      })
  }));
});
