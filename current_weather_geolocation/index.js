let villeChoisie;

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lon=" +
        position.coords.longitude +
        "&lat=" +
        position.coords.latitude +
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
            document.querySelector("#temperature_label").textContent =
              temperature;

            let villeActuelle = reponse.name;
            document.querySelector("#ville").textContent = villeActuelle;
          } else {
            alert("Un problème est survenu, veuillez revenir ulterieurement !");
          }
        }
      };
    },
    error,
    options
  );
} else {
  villeChoisie = "Paris";
  recupererTemperature(villeChoisie);
}

var options = {
  enableHightAccuracy: true,
};

let changerVille = document.querySelector("#changer");
changerVille.addEventListener("click", () => {
  villeChoisie = prompt("Veuillez entrer une ville");
  recupererTemperature(villeChoisie);
});

// en cas d'erreur
function error() {
  villeChoisie = "Paris";
  recupererTemperature(villeChoisie);
}

function recupererTemperature(ville) {
  const url =
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
