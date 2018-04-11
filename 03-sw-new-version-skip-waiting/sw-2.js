let cacheKey = 'v2';
self.addEventListener('install', function(event) {
  console.log('SW2 Installation stage.')
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('SW2 has been activated')
  var cacheWhitelist = [cacheKey];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("SW2 is processing the resource " + event.request.url)
  let pr = caches.match(event.request).then(function(response) {
    return response || fetch(event.request)
      .then(response => caches.open(cacheKey)
        .then(cache => { 
          if(!response.ok){
          } else{
            cache.put(event.request, response.clone()); 
          }
          return response;
        }) 
      )
  })
  event.respondWith(pr);
});