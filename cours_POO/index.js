// objets literaux

// let mark = {
//   prenom: "Minouch",
//   age: 55,
//   email: "zedfzerf@efef.fr",

//   sePresenter: function () {
//     // console.log("bonjour, je mappelle " + this.prenom);
//   },
// };

// mark.sePresenter();

// function recevoirLesCoordonnees() {
//   return { latitude: 35, longitude: 139 };
// }

// let coordonnees = recevoirLesCoordonnees();
// // console.log(coordonnees.latitude);
// // console.log(coordonnees.longitude);

// --------------
// constructeur
// --------------

// mettre une majuscule pour dire que c'est un constructeur et non pas une fonction
function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;

  Utilisateur.prototype.sePresenter = function () {
    // console.log(
    //   "Bonjour, je m'appelle " +
    //     this.prenom +
    //     " " +
    //     this.nom +
    //     ", contactez moi sur mon email" +
    //     " " +
    //     this.email
    // );
  };
}

var jane = new Utilisateur("Jane", "Doe", "janedoe32@hello.de");
var pibeDeOro = new Utilisateur("Diego", "Maradona", "d10s@argen.nap");
// jane.sePresenter();
pibeDeOro.sePresenter();

jane.post = "développeur";

function Logement(type, annee, placeParking, proprietaire) {
  this.type = type;
  this.annee = annee;
  this.placeParking = placeParking;
  this.proprietaire = proprietaire;
}

var sonLogement = new Logement("appart", 2002, true, pibeDeOro);
// console.log("sonLogement:", sonLogement);
// console.log(sonLogement.proprietaire.prenom); // Diego

// ----------------------------
// Créer un objet avec Object()
// ----------------------------

var monObjet = new Object();
monObjet.titre = "Le rouge et le noire";

// --------------
// Comprendre l'héritage
// --------------

// Animal (nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;

  Animal.prototype.presentation = function () {
    console.log(
      "Bonjour, j'ai " +
        this.nombreDePattes +
        " pattes,  et je pèse " +
        this.poids +
        "."
    );
  };
}
// var monAnimal = new Object("ailes", "gros");
// console.log("monAnimal:", monAnimal);
// oiseau (nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  Animal.call(this, nombreDePattes, poids);
  // la fonction call() permet d'appeler une fonction constructeur:
  // en premier parametre (this), on donne l'objet actuel, ensuite, on donne les
  // arguments de son constructeur
  this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

// Mammifere (nombreDePattes, poids / typeDePoils)
function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids);
  this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2, "11kg", "grandes");
// perroquet.presentation();
// console.log("perroquet:", perroquet);

var chat = new Mammifere(4, "7kg", "court");
// console.log("chat:", chat);

// Bind, Call et Apply

// call() et apply() appellent directement une fonction
// exemple: Animal.call(this, nombreDePattes, poids);

let gandalf = { titre: "Magicien" };

function direBonjour() {
  console.log("Bonjour " + this.titre);
}

direBonjour();
