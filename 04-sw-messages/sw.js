let cacheKey = 'v3';
self.addEventListener('install', function(event) {
  console.log('Installation stage.')
});

self.addEventListener('message', function(event){
  if(event.data.clear){
    var cacheWhitelist = [cacheKey];
    event.waitUntil(async function(){
      let keys = await caches.keys();
      return Promise.all(keys.map(k => caches.delete(k)))
    }());
  }
});

self.addEventListener('fetch', function(event) {
  event.waitUntil(async function() {
    const client = await clients.get(event.clientId);
    client.postMessage({
      msg: "trying to fetch resource",
      url: event.request.url
    });
  }());
  console.log("SW is processing the resource " + event.request.url)
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