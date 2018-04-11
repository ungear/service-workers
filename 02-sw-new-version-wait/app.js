var swCurrentVersion;
const swVersionStorageName = 'ex-2-sw-version';

if ('serviceWorker' in navigator) {
  swCurrentVersion = window.localStorage.getItem(swVersionStorageName) || 1;
  currentSwVersionIndicator.innerHTML = swCurrentVersion;
  navigator.serviceWorker.register(`sw-${swCurrentVersion}.js`)
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}

add1.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "snake.jpg");
  document.body.appendChild(img);
}
swChangeVersion.onclick = function(){
  let newVersion = parseInt(swCurrentVersion) === 1 ? 2 : 1;
  swVersion = window.localStorage.setItem(swVersionStorageName, newVersion);
  currentSwVersionIndicator.innerHTML = newVersion;
}


