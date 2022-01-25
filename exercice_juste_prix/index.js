// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("input");
let error = document.querySelector("small");
let formulaire = document.querySelector("formulaire");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", (e) => {
  if (isNaN(input.value)) {
    e.preventDefault();
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});
// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier