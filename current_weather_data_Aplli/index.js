let ville;
recupererTemperature("Paris");

let changerVille = document.querySelector("#changer");
changerVille.addEventListener("click", () => {
  ville = prompt("Veuillez entrer une ville");
  recupererTemperature(ville);
});

function recupererTemperature(ville) {
   url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=931e40e38851bdf64ba5eae34af556dd&units=metric";

  let requete = new XMLHttpRequest();

  // recuperation des données avec GET
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        document.querySelector("#temperature_label").textContent = temperature;

        let villeActuelle = reponse.name;
        document.querySelector("#ville").textContent = villeActuelle;
      } else {
        alert("Un problème est survenu, veuillez revenir ulterieurement !");
      }
    }
  };
}
