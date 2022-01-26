// Etape 1 - Sélectionner nos éléments
// let input = document.querySelector("#prix");
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let instructions = document.querySelector("#instructions");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 100);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  let instruction = document.createElement("div");

  if (nombre > nombreAleatoire) {
    // moins
    instruction.textContent =
      "Essai #" + coups + " ( " + nombre + " )" + " C'est moins !";
    instruction.className = "instruction moins";
  } else if (nombre < nombreAleatoire) {
    // plus
    instruction.textContent =
      "Essai #" + coups + " ( " + nombre + " ) " + "C'est plus !";
    instruction.className = "instruction plus";
  } else {
    // bravo !
    instruction.textContent =
      "Essai #" + coups + " ( " + nombre + " ) " + "Bravo ! juste prix !";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  // ajouter l'element avant les autres
  document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", (e) => {
  if (isNaN(input.value)) {
    // message d'erreur
    error.style.display = "inline";
  } else {
    // pas d'erreur
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    // cas erreur, bordure rouge
    input.style.borderColor = "red";
  } else {
    // pas d'erreur, bordure grise
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});
