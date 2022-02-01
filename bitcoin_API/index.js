// url
const url = "https://www.blockchain.com/ticker";

// créer une requete

function recupererPrix() {
  let requete = new XMLHttpRequest(); // créer un objet
  requete.open("GET", url); // 1st param => GET or POST, 2nd param => url

  requete.responseType = "json"; // nous attendons du JSON
  requete.send(); // envoyer la requete

  // dès qu'on reçois une réponse, cette fonction sera éxécutée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stocke la réponse
        let prixEnEuro = reponse.EUR.last;
        document.querySelector("span").innerHTML = prixEnEuro;
      } else {
        alert("Un problème est survenu, merci de revenir plus tard");
      }
    }
  };
  console.log("prix actualisé");
}

setInterval(recupererPrix, 1000);


