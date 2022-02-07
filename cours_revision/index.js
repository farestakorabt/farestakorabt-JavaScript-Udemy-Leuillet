// portée des variables

let variableLet = "globale";
var variableVar = "globale";

if (true) {
  let variableLet = "locale";
  var variableVar = "locale";

  console.log("let: " + variableLet); // locale
  console.log("var: " + variableVar); // locale
}

console.log("let: " + variableLet); // globale
console.log("var: " + variableVar); // locale

// => a favoriser (let), plus fléxible.
// var garde sa meme valeur, et si on a 2 variable du meme nom, on ecrase l'ancienne

// --------------------------------------------------
// récursivité

function timer(secondes) {
  if (secondes > 0) {
    console.log("seconde n° " + secondes);
    timer(secondes - 1);
  } else {
    console.log("seconde n° " + secondes); // 0 
  }
}

timer(10);
