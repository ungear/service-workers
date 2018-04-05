self.addEventListener('install', function(event) {
  console.log('Installation stage. Started caching')
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/samples/banana.jpg',
        '/samples/platform.jpg',
        '/samples/snake.jpg',
      ]);
    })
  );
  console.log('Finished caching')
});

self.addEventListener('fetch', function(event) {
  let pr = caches.match(event.request).then(function(response) {
    if(response)
      console.log(event.request.url + ' has been found in cache')
    else
      console.log(event.request.url + ' has not been cached')

    return response || fetch(event.request);
  })
  event.respondWith(pr);
});