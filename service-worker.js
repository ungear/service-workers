self.addEventListener('install', function(event) {
  console.log('Installation stage. Started caching')
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/samples/snake.jpg',
      ]);
    })
  );
  console.log('Finished caching')
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url + " - start processing")
  let pr = caches.match(event.request).then(function(response) {
    if(response)
      console.log(event.request.url + ' has been found in cache')
    else
      console.log(event.request.url + ' has not been cached')

    return response || fetch(event.request)
      .then(response => caches.open('v1')
        .then(cache => { 
          if(!response.ok){
            console.log(event.request.url + ' failed')
          } else{
            cache.put(event.request, response.clone()); 
            console.log(event.request.url + ' has been added to cache')
          }
          return response;
        }) 
      )
  }).catch(_ => {console.log('fail')})
  event.respondWith(pr);
});