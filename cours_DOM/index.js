// Accéder aux éléments du DOM

let header = document.getElementsByTagName("header");
let logo = document.getElementById("logo");
let conteneur = document.getElementsByClassName("container");
let h1 = document.querySelector("h1");
let paragraphes = document.querySelectorAll("p");

// console.log("paragraphes:", paragraphes);
// console.log("h1:", h1);
// console.log("conteneur:", conteneur);

// Modifier des éléments du DOM (textContent, innerHTML)

let h1Bis = document.querySelector("h1");
// on peut utiliser cette methode egalement
// => let h1Bis = document.getElementsByTagName("h1")[0];
// h1Bis.textContent = "Hello there !";
// h1Bis.innerHTML = "<div style='background: lime'>Welcome home</div> ";

// Ajouter des éléments au DOM (append, prepend, insertBefore)

// 1ere methode, juste pour ecrire du texte

document.write("Ecrire"); // s'ajoute à la fin
document.write("-------------"); // s'ajoute à la fin

// 2eme methode, ajouter un element brut

let h1Bis2 = document.querySelector("h1");
// h1Bis2.append("test");

// 3eme methode, (celle pour les objets)
// 1 creer un element
let helloWorld = document.createElement("div");
// 2 le personnaliser
helloWorld.textContent = "Hello world !";

// 3 l'ajouter

document.body.append(helloWorld); // a utiliser
// document.body.appendChild(helloWorld); // a ne pas utiliser, ca ne prend uniquement une variable et pas de text

//document.body.insertBefore(helloWorld, document.querySelector(".container"));
document.querySelector(".container").prepend(helloWorld);

// append() => apres
// prepend() => avant

// Supprimer des éléments du DOM
//  methode longue
// let h11 = document.querySelector("h1");
// h1.remove();

// methode courte
// document.querySelector("h1").remove();

// ecrire sur une seule ligne

// let newElement = (document.createElement("div").textContent =
//   "Salut les marsiens !");

// Modifier le style des éléments
// 1ere methode : décomposée
let header2 = document.querySelector("header");
// header2.style.backgroundColor = "tomato";

// 2eme methode : directe
// document.querySelector("h1").style.color = "green";
// document.querySelector("h1").style.marginTop = 50 + "px";

// 3eme methode : avec classe => a favoriser

let h1Last = (document.querySelector("p").classList = "monStyle");
// querySelector selectionne le 1er element
