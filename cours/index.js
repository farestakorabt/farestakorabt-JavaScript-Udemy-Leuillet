// exercice 1

// function abracadbra() {
//   let prenom = prompt("Your prenom");
//   let name = prompt("Your name");
//   let age = prompt("Your age");

//   alert(
//     "Siprasti ! On ne m'avait pas prévenu que c'était vous, " +
//       prenom +
//       " ! Euh... Je veux dier...Monsieur le grand magicien " +
//       name.toUpperCase() +
//       " ! cela fait déjà " +
//       age +
//       " ans que vous faites rayonner notre contrée !"
//   );
// }

// abracadbra();

// exercice 1
// let taille = prompt("Quelle est votre taille ?");
// let poids = prompt("Quel est votre poids ?");

// function calculerIMC(poids, taille) {
//   let tailleEnMetre = taille / 100;
//   let tailleCalculee = Math.pow(tailleEnMetre, 2);
//   let resultat = poids / tailleCalculee;

//   return Math.round(resultat) ;

//   // on peut resumer ça avec cette formule
//   // => return Math.round(poids / Math.pow(taille / 100, 2));
// }

// alert(calculerIMC(poids, taille));

// do {
//   var prenom = prompt("C'est quoi votre nom ?");
// } while (prenom == "" || prenom == null);

// alert("Bonjour " + prenom);

// for (i = 0; i < 11; i++) {
//   console.log(i);
// }

// ------------------
// LES EXCEPTIONS
// ------------------

// try {
//   let recompense = prompt("Choisissez une récompense : épée, arc, haches");
//   let degats;

//   switch (recompense) {
//     case "épée":
//       degats = 40;
//       break;

//     case "arc":
//       degats = 30;
//       break;

//     case "haches":
//       degats = 20;
//       break;

//     default:
//       throw new Error("Arme non reconnue !");
//   }

//   alert(
//     "Vous avez choisi " +
//       recompense +
//       ", ce qui provoque (" +
//       degats +
//       " degats)"
//   );
// } catch (error) {
//   alert(error);
// } finally {
//   alert("Fin du programme !");
// }

// ------------------
// Les variables
// ------------------

// La portee des variables
// let variableLet = "globale"; // avec let la portée change
// var variableVar = "globale"; // avec var la porte reste la meme (à utiliser)

// if (true) {
//   let variableLet = "locale";
//   var variableVar = "locale";

//   console.log("Let: " + variableLet); // => donne locale
//   console.log("Var: " + variableVar); // => donne locale
// }

// console.log("Let: " + variableLet); // => donne golable
// console.log("Var: " + variableVar); // => donne locale

// ------------------
// La recurcivite
// ------------------

// Les fonctions recursives (elles s'auto appellent elles-meme)

// function timer(secondes) { // 10
//   if (secondes > 0) {
//       console.log(secondes); // proche de la boucle for
//       timer(secondes - 1); // 9 ...
//   }else{
//       console.log(secondes);
//   }
// }

// timer(10);

function somme(numero) { // 5
  if (numero == 1) {
    return 1;
  }

  return numero + somme(numero - 1); // 11
  
  // 8 + 7 + 6 + 5
}

console.log(somme(12)); 

// 2 + (2 + 1)  