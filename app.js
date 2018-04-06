if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')//, {scope: '/sw-test/'})
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}

add1.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "/samples/snake.jpg");
  document.body.appendChild(img);
}


add2.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "/samples/platform.jpg");
  document.body.appendChild(img);
}

