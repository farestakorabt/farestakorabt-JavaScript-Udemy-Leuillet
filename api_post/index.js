// envoyer des données (POST)
const url2 = "https://lesoublisdelinfo.com/api.php/";

let requete2 = new XMLHttpRequest();

// GET
// requete2.open("GET", url2);
// requete2.responseType = "json";
// requete2.send();

// POST
requete2.open("POST", url2);
requete2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
requete2.responseType = "json";
requete2.send('prenom=Eric');

requete2.onload = function () {
  if (requete2.readyState === XMLHttpRequest.DONE) {
    if (requete2.status === 200) {
      let reponse2 = requete2.response;
      console.log(reponse2);
    } else {
      alert("Un problème est survenu, merci de revenir plus tard");
    }
  }
};
