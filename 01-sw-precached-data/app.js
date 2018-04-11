if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/01-sw-precached-data/sw.js')//, {scope: '/sw-test/'})
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}

add1.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "/01-sw-precached-data/snake.jpg");
  socket.appendChild(img);
}