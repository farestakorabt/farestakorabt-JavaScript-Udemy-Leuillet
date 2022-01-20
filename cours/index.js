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

// function somme(numero) {
//   if (numero == 1) {
//     return 1;
//   }

//   return numero + somme(numero - 1);

// }

// console.log(somme(12));

// ------------------
// arrays, tableau, table
// ------------------
let tableauSimple = [true, "karl", 121, "Last Kingdom"];
// console.log(tableauSimple[tableauSimple.length - 1]); // => Last Kingdom
// console.log(tableauSimple.indexOf('Last Kingdom')); // => 3
// console.log(tableauSimple.join("/ "));
tableauSimple.splice(1, 0, "random", "pie");
// console.log("tableauSimple:", tableauSimple); // => (index, combien a supprmier) => [true, 'random', 'pie', 'karl', 121, 'Last Kingdom']

let monTableau2D = [
  ["Maerk", "Jane", "Camille"],
  ["Carl", "Honey", "Lille"],
];

// monTableau2D[1].push("test");
// console.log("monTableau2D:", monTableau2D); // => 0: (3) ['Maerk', 'Jane', 'Camille']
// => 1: (4) ['Carl', 'Honey', 'Lille', 'test']
// monTableau2D.join(" / ");
// console.log(monTableau2D);
// monTableau2D[0].splice(0, 1, "milk");
// console.log("monTableau2D:", monTableau2D); // => ['milk', 'Jane', 'Camille'], ['Carl', 'Honey', 'Lille']

// console.log(monTableau2D[0][2]); // => Camille

// tableaux associatifs
let monTableauAssociatif = { prenom: "mark", nom: "zuck", age: 55 };
// console.log(monTableauAssociatif.prenom); // => mark

// delete monTableauAssociatif.prenom;
// console.log("monTableauAssociatif:", monTableauAssociatif);

// ------------------
// Les boucles
// ------------------

// boucle for in
let panier = ["fraise", "banane", "kiwi", "pomme"];

// for (const fruit in panier) {
//   console.log(panier[fruit]); // => fraise banane kiwi pomme
// }

// boucle for of
for (const fruit of panier) {
  // console.log(panier.indexOf(fruit)); // => 0 1 2 3
}

// boucle forEach

let listePays = ["Belgique", "Malawi", "Argentine", "Thailande"];

// for (const pays of listePays) {
//   console.log(pays);
// }

// console.log("-------------------");

// listePays.forEach((pays) => {
//   console.log(pays);
// });

// console.log("-------------------");

// listePays.forEach(function (pays) {
//   console.log(pays);
// });

// console.log("-------------------");

// listePays.forEach((pays) => console.log(pays));

let monTableauAssociatifCat = {
  nom: "Baghee",
  poil: "court",
  age: 200,
  couleur: "noire",
};

function concatenation(tableau) {
  chaine = "";

  for (const valeur in tableau) {
    chaine += valeur + " : " + tableau[valeur] + "\n";
  }

  console.log(chaine);
}

// concatenation(monTableauAssociatifCat);

// ------------------
// Les fonctions fléchées
// ------------------

// let maFonction = (materiel, materiel2) => {
//   console.log("test");
//   return materiel + materiel2;
// };

// maFonction();

// let maFonction2 = () => console.log("test2");
// maFonction2();

// ------------------
// Les closures
// ------------------

// function bonjour(prenom) {
//   let resultat = console.log("Bonjour " + prenom);
//   let maClosure = () => console.log(resultat);

//   return maClosure;
// }

// let maFonction = bonjour("Evan");
// // maFonction();

// function timer() {
//   let secondes = 0;

//   let maClosure = () => {
//     return ++secondes;
//   };

//   return maClosure;
// }

// let monTimer = timer();
// console.log(monTimer()); // => 0
// console.log(monTimer()); // => 1

// console.log('---------------');

// // la closure permet de sauvegarder la valeure precedente

// let monDeuxiemeTimer = timer();
// console.log(monDeuxiemeTimer());

// console.log('---------------');

// console.log(monTimer());

// ------------------
// Les objets
// ------------------

// let chien = {
//   couleur: "noire",
//   age: 33,
//   nom: "Baghee",
//   poil: "court",
//   // aboyer: function () {
//   //   console.log("ouaf ouaf !");
//   // },
//   aboyer: () => console.log("ouaf ouaf !"),
// };

// chien.aboyer();

// let magicien = {
//   attaquer: function () {
//     console.log("Le magicien lance un sort");
//   },
// };

// let guerrier = {
//   attaquer: function () {
//     console.log("Le guerrier lance son épée");
//   },
// };

// magicien.attaquer();
// guerrier.attaquer();

// ------------------
// Le destructuring
// ------------------

// let informations = ["seperLeger", 57, "homme"];

// // let pseudo = informations[0];
// // let age = informations[1];
// // let sexe = informations[2];

// // avec la decomposition
// let [pseudo, age, sexe] = informations;
// console.log(age);

// ------------------
// Les set
// ------------------

// let nombres = [21, 85, 6, 6, 87, 9, 45, 45];
// // let monSet = new Set(nombres);
// let monSet = new Set();

// monSet.add(54); // => 54
// monSet.add(54); // => ne compte pas les doublons
// monSet.add("Voiture"); // => 54, 'voiture'
// monSet.add(["mon", "tableau"]); // => 54, 'voiture', ['mon', 'tableau']
// monSet.delete(54); // => 'voiture', ['mon', 'tableau']

// console.log(monSet); // => {21, 85, 6, 87, 9, 45} => pas de doublons
// console.log(monSet.size); // => 2 => ne compte pas les doublons

// ------------------
// L'objet Map
// ------------------

// let utilisateurs = new Map();

// utilisateurs.set("Mark", {
//   email: "facebook@gmail.com",
//   phone: "0188486542",
// });

// utilisateurs.set("Maradona", {
//   poste: "attaquant",
//   numero: 10,
//   drogue: true,
// });

// console.log(utilisateurs);

// ------------------
// L'objet weakSet
// ------------------

// let voitureA = {
//   constructeur: "Lada",
//   modele: "Niva",
// };

// let voitureB = {
//   constructeur: "Peugeot",
//   modele: "Lion",
// };

// let voitures = new WeakSet([voitureA, voitureB]);
// console.log(voitures);

// ------------------
// L'objet weakMap
// ------------------

// let voiturette = new WeakMap();

// let index = {
//   id: 1,
// };

// let voituretteA = {
//   constructeur: "Ferrari",
//   modele: "3 chevaux",
// };

// voiturette.set(index, voituretteA);

// // voiturette.delete(index);

// console.log(voiturette);

// ------------------
// Le parametre REST
// ------------------

// function addition(...nombres) {
//   let resultat = 0;
//   nombres.forEach((nombre) => {
//     resultat += nombre;
//   });
//   console.log(resultat);
// }

// addition(4, 9, 5, 415, 78, 5, 54); // => 4 + 9 + 5 + 415 + 78 + 5 + 54 = 570

// ------------------
// Le spread operateur (deconposition)
// ------------------

// Exemple 1: fusionner plsuieurs tableaux

let fruits = ["banane", "kiwi", "pomme"];
let sucreries = ["chocolat", "bonbon", "gateaux"];

// let fruitsEtSucreries = [...fruits, ...sucreries];
// let fruitsEtSucreries = ["chocolat", "bonbon", "gateaux", ...fruits];
// let fruitsEtSucreries = fruits.concat(sucreries);

// console.log(fruitsEtSucreries);

// Exemple 2: decouper une chaine de caractere en plusieurs elements

let phrase = "Bonjour !";
let phraseTableau = [...phrase];
// console.log("phraseTableau:", phraseTableau); //  => ['B', 'o', 'n', 'j', 'o', 'u', 'r', '!']

// Exemple 3: selectionner un element et stocker les autres dans une variable

let money = ["dinar", "dollar", "franc"];
//sans decomposition
// let firstMoney = money[0];
// let others = [money[1], money[2]];

// avec decomposition

let [firstMoney, ...others] = money;
console.log("firstMoney:", firstMoney);
console.log("money:", money);
