
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`sw.js`)
    .then(function(reg) {
      console.log('Registration succeeded. Scope is ' + reg.scope);
      navigator.serviceWorker.addEventListener('message', swEventHandler);
    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });

}

btn1.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "snake.jpg");
  document.body.appendChild(img);
}
clearButton.onclick = function(){
  navigator.serviceWorker.controller.postMessage({clear: true});
}
function swEventHandler(e){
  console.log(e.data)
}


