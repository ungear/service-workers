var swCurrentVersion;
const swVersionStorageName = 'current-sw-version';

if ('serviceWorker' in navigator) {
  swCurrentVersion = window.localStorage.getItem(swVersionStorageName) || 1;
  currentSwVersionIndicator.innerHTML = swCurrentVersion;
  navigator.serviceWorker.register(`/service-worker-${swCurrentVersion}.js`)//, {scope: '/sw-test/'})
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

add3.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "/samples/bullshit.jpg");
  document.body.appendChild(img);
}

swChangeVersion.onclick = function(){
  let newVersion = parseInt(swCurrentVersion) === 1 ? 2 : 1;
  swVersion = window.localStorage.setItem(swVersionStorageName, newVersion);
  currentSwVersionIndicator.innerHTML = newVersion;
}
add4.onclick = function(){
  var img = document.createElement("img");
  img.setAttribute("src", "/samples/banana.jpg");
  document.body.appendChild(img);
}

getJson1.onclick = function(){
  fetch('https://dog.ceo/api/breeds/list/all')
}

