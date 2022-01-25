// decompte

let btn = document.querySelector("button");
let intervalle;
let secondes = 10;

// lancement du decompte
btn.addEventListener("click", start);

function start() {
  intervalle = setInterval(() => {
    decompte();
  }, 100);
}

function stop() {
  clearInterval(intervalle);
  document.body.innerHTML += "Stop !";
}

function decompte() {
  secondes--;
  if (secondes == 0) {
    stop();
  } else {
    document.body.innerHTML += secondes + "<br>";
  }
}