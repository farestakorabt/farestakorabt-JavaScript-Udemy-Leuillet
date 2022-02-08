// portée des variables

let variableLet = "globale";
var variableVar = "globale";

if (true) {
  let variableLet = "locale";
  var variableVar = "locale";

  // console.log("let: " + variableLet); // locale
  //   console.log("var: " + variableVar); // locale
}

// console.log("let: " + variableLet); // globale
// console.log("var: " + variableVar); // locale

// => a favoriser (let), plus fléxible.
// var garde sa meme valeur, et si on a 2 variable du meme nom, on ecrase l'ancienne

// --------------------------------------------------
// récursivité

// function timer(secondes) {
//   if (secondes > 0) {
//     console.log("seconde n° " + secondes);
//     timer(secondes - 1);
//   } else {
//     console.log("seconde n° " + secondes); // 0
//   }
// }

// timer(10);

function somme(number) {
  if (number == 1) {
    return 1;
  } else {
    return number + somme(number - 1);
  }
  // 6 + 5 + 4 + 3 + 2 + 1 = 21
}
// console.log(somme(6));

// --------------------------------------------------

let monTableau = ["un", "deux", "trois", "quatre", "chat", "Bill"];
// console.log(monTableau.indexOf("Bill")); // retourne 5 => sensible à la casse
monTableau.splice(1, 2, "dog", "kalb"); // params(index, nombre de trucs à supprimer, on ajoute quoi ?)
// console.log(monTableau);
// ['un', 'dog', 'kalb', 'quatre', 'chat', 'Bill']

let monTableauB = ["un", "deux", "trois", "quatre"];
// console.log(monTableauB.join(", "));

let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
// console.log(monTableau2D.join("||"));
monTableau2D[0].splice(1, 0, "minoushe", "caniche");
// console.log(monTableau2D);
// ['Mark', 'minoushe', 'caniche', 'Jeff', 'Bill']
// ['Zuckerberg', 'Bezos', 'Gates']
monTableau2D[1].splice(0, 1, "Baghee");
// console.log(monTableau2D);
// ['Mark', 'minoushe', 'caniche', 'Jeff', 'Bill']
// ['Baghee', 'Bezos', 'Gates']

monTableau2D.splice(2, 0, ["30", "45", "70"]);
// console.log(monTableau2D);
// ['Mark', 'minoushe', 'caniche', 'Jeff', 'Bill']
// ['Baghee', 'Bezos', 'Gates']
// ['30', '45', '70']

// --------------------------------------------------
// boucles

let panier = ["fraise", "banane", "kiwi", "orange"];

for (const fruit in panier) {
  // console.log(panier[fruit]); // fraise , banane , kiwi , orange
}
console.log("-------------------------");

for (const fruit of panier) {
  // console.log(fruit);                 // fraise , banane , kiwi , orange
  // console.log(panier.indexOf(fruit)); // 0 , 1 , 2 , 3
}

let listeDePays = ["belgique", "france", "usa", "allemagne"];

// listeDePays.forEach((pays) => console.log(pays));

// --------------------------------------------------

let monTableauAssociatif = {
  prenom: "Lioushi",
  nom: "Baghee",
  post: "PDG",
};

let footArray = {
  prenom: "Leo",
  nom: "Messi",
  post: "attaquant",
};

// console.log(monTableauAssociatif);

function concatener(tableau) {
  let chaine = "";

  for (const valeur in tableau) {
    chaine += valeur + " : " + tableau[valeur] + "\n";
  }

  console.log(chaine);
}

concatener(monTableauAssociatif);

console.log("-------------------------");

concatener(footArray);
