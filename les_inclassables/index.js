// localisaion

let options = {
  enableHighAccuracy: true,
  // maximumAge: 0, // 0 par défaut
  // timeout: 10000, // par defaut
};

if ("geolocation" in navigator) {
  // 1. getCurrentPosition() ou 2. watchPosition() :
  // 1 => connaitre la position 1 fois, 2. continuer à connaitre la position en temps réel
  // 3 params (success, error, options)

  // getCurrentPosition
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(position.coords);
    },
    error,
    options
  );

  // watchPosition

  // let watch = navigator.geolocation.watchPosition(
  //   (position) => {
  //     console.log(position.coords.latitude);
  //     console.log(position.coords.longitude);
  //     console.log(position.coords);
  //   },
  //   error,
  //   options
  // );

  // navigator.geolocation.clearWatch();

  function error() {
    alert("Vous avez refusé la géolocalisation !");
  }
} else {
  alert("La geolocalisation n'est pas disponible");
}

// ----------------------------------------------------------------

// // les modules

// // inscription ?

// // attention: serveur

// // index.js
// import { direBonjour } from './modules/direBonjour.js';

// direBonjour('John'); // => Bonjourn John

// // modules/ direBonjour.js
// export direBonjour(prenom){
//   console.log("Bonjour " + prenom);
// }

// // dans notre fichier index.html

// <script type='module' src='index.js' ></script>

// ----------------------------------------------------------------
// strict mode => hidden errors

// le mode strict doit toujours etre placé au début de notre fichier

// "use strict";

// prenom = "john";
// console.log("prenom:", prenom);
// console.log("----------------------");

// avec "use strict" ça devrait afficher une erreur car (prenom nest pâs déclaré(let, var, const))

function direBonjour() {
  // "use strict";
  nom = "Jane";
  console.log(nom); // affiche erreur avec 'use strict' car nom n'est pas déclaré (var, let...)
}

direBonjour();

function addition(nombreA, nombreA) {
  // "use strict";
  console.log(nombreA + nombreA); // Uncaught SyntaxError: Duplicate parameter name not allowed in this context
}

addition(4, 11);
