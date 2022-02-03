// localStorage && sessionStorage jamais envoyé au serveur mais ça reste sur le navigateur
// localStorage = stocké dans le navigateur, même après la fermeture du navigateur (a favoriser)
// sessionStorage = sotcké dans le navigateur, le temps de la session

// et les cookies ? => informations importantes mais de petites de tailles qu'on envoie à chaque fois au serveur

// setItem[clé], [valeur] / getItem[clé] / removeItem[clé]
// clear(): supprimer toutes les données
// key([index]): obtenir la clé située à l'index donné
// length: obtenir le nombre d'élements stockés

if (localStorage.getItem("prenom")) {
  document.body.append("Bonjour " + localStorage.getItem("prenom"));
} else {
  let prenom = prompt("Quel est votre prenom ?");
  localStorage.setItem("prenom", prenom);
  document.body.append("Bonjour " + prenom);
}

// localStorage.clear(); 