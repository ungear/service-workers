let cacheKey = 'v1';
self.addEventListener('install', function(event) {
  console.log('SW1 Installation stage')
});

self.addEventListener('fetch', function(event) {
  console.log("SW1 is processing the resource " + event.request.url)
  let pr = caches.match(event.request).then(function(response) {
    // if(response)
    //   console.log(event.request.url + ' has been found in cache')
    // else
    //   console.log(event.request.url + ' has not been cached')

    return response || fetch(event.request)
      .then(response => caches.open(cacheKey)
        .then(cache => { 
          if(!response.ok){
            //console.log(event.request.url + ' failed')
          } else{
            cache.put(event.request, response.clone()); 
            //console.log(event.request.url + ' has been added to cache')
          }
          return response;
        }) 
      )
  }).catch(_ => {console.log('fail')})
  event.respondWith(pr);
});