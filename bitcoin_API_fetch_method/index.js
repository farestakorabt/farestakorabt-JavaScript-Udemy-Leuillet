// url
const url = "https://www.blockchain.com/ticker";

// créer une requete

async function recupererPrix() {
  // ---------------------------- 1st method ---------------------------------------
  // let requete = new XMLHttpRequest(); // créer un objet
  // requete.open("GET", url); // 1st param => GET or POST, 2nd param => url
  // requete.responseType = "json"; // nous attendons du JSON
  // requete.send(); // envoyer la requete
  // // dès qu'on reçois une réponse, cette fonction sera éxécutée
  // requete.onload = function () {
  //   if (requete.readyState === XMLHttpRequest.DONE) {
  //     if (requete.status === 200) {
  //       let reponse = requete.response; // on stocke la réponse
  //       let prixEnEuro = reponse.EUR.last;
  //       document.querySelector("span").innerHTML = prixEnEuro;
  //     } else {
  //       alert("Un problème est survenu, merci de revenir plus tard");
  //     }
  //   }
  // };
  // console.log("prix actualisé");
  // ---------------------------- fetch method ---------------------------------------
  // const requete = await fetch(url, {
  //   method: "GET",
  // });
  // if (requete.ok) {
  //   let donnees = await requete.json();
  //   document.querySelector("span").textContent = donnees.EUR.last;
  // } else {
  //   alert("Something wrong !");
  // }
  // ---------------------------- axios method ---------------------------------------
  // axios
  //   .get(url)
  //   .then(function (donnees) {
  //     // console.log(donnees);
  //     document.querySelector("span").textContent = donnees.data.EUR.last;
  //   })
  //   .catch(function () {
  //     alert("pay attention !!!");
  //   })
  //   .then(function () {
  //     console.log("prix mis à jour ");
  //   });
}

setInterval(recupererPrix, 3000);
// recupererPrix();

// envoyer des données (POST)

// ---------------------------- 1st method ---------------------------------------

const url2 = "https://lesoublisdelinfo.com/api.php/";

// let requete2 = new XMLHttpRequest();

// // POST
// requete2.open("POST", url2);
// requete2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// requete2.responseType = "json";
// requete2.send('prenom=Eric');

// requete2.onload = function () {
//   if (requete2.readyState === XMLHttpRequest.DONE) {
//     if (requete2.status === 200) {
//       let reponse2 = requete2.response;
//       console.log(reponse2);
//     } else {
//       alert("Un problème est survenu, merci de revenir plus tard");
//     }
//   }
// };

// ---------------------------- fetch method ---------------------------------------
async function envoyerDonnees(prenom) {
  // const requete2 = await fetch(url2, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: new URLSearchParams({
  //     prenom, // => prenom: prenom,
  //   }),
  // });
  // if (requete2.ok) {
  //   const donnees2 = await requete2.json();
  //   console.log(donnees2);
  // } else {
  //   alert("Something wrong !");
  // }
}

// envoyerDonnees("Eric");

// ---------------------------- fetch method ---------------------------------------

const axiosInstancePost = axios.create({
  header: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosInstancePost
  .post(
    url2,
    new URLSearchParams({
      // => autres méthodes: put, delete, patch
      prenom: "Lebron",
    })
  )
  .then(function (donnees) {
    console.log(donnees.data);
  })
  .catch(function (erreur) {
    alert("Probleme !");
  });
