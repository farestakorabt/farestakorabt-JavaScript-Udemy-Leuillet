// jQuery method
let ville = recupererTemperature("paris");

let btn = document.querySelector("#changer");
btn.addEventListener("click", () => {
  let villeChoisie = prompt("Quelle ville ?");
  recupererTemperature(villeChoisie);
});

function recupererTemperature(ville) {
  // jQuery
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=931e40e38851bdf64ba5eae34af556dd&units=metric";

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (data) => {
      $("#temperature_label").text(data.main.temp);
      $("#ville").text(ville);
    },
    error: () => {
      alert("Erreur survenue, revenez plus tard");
    },
  });

  // JS
  // let requete = new XMLHttpRequest();

  // requete.open("GET", url);

  // requete.responseType = "json";
  // requete.send();

  // requete.onload = function () {
  //   if (requete.readyState === XMLHttpRequest.DONE) {
  //     if (requete.status === 200) {
  //       let reponse = requete.response;
  //       let temperature = reponse.main.temp;

  //       document.querySelector("#temperature_label").textContent = temperature;

  //       document.querySelector("#ville").textContent = ville;
  //     }
  //   } else {
  //     alert("Un problème est survenu, revenez plus tard.");
  //   }
  // };
}
