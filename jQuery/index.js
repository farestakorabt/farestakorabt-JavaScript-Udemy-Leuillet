// with JS
let monTitre = document.querySelector("h1");
monTitre.textContent = "Bonjour avec JS";
// monTitre.classList.add("important");
document.querySelectorAll("p").textContent = "ce sont des parag"; // impossible
monTitre.className = ""; // impossible
document.querySelector(".maClass").innerHTML = "<p><b>HTML modifié</b></p>";
// document.querySelectorAll("p").style.color = "blue"; // impossible

// ------------------------------------------------------------------------------
// ajouter || supprimer un element

monTitre.prepend("oh : ");
monTitre.append(" !");

// selectionner un element

monTitre.getAttribute("class");
// console.log(monTitre); // => h1

monTitre.setAttribute("style", "text-transform: uppercase");

// ------------------------------------------------------------------------------

// document.querySelector("h1").addEventListener("click", () => {
//   document.querySelector("h1").style.color = "orange";
// });

// for (let i = 0; i < 2; i++) {
//      document.querySelectorAll("p")[i].addEventListener('click', ()=>{
//          document.querySelector('h1').style.color = 'red'
//      });
// }

// with jQuery
let monTitre2 = $("h1");
// monTitre2.text("Hello there jQuery!");

// $(monTitre2).addClass("important");
//  OR
// $("h1").addClass("important");

// $("h1").removeClass("important");

let paragraphes2 = $("p").text("div en jQuery");
$(".maClass").html("<p><b>HTML modifié avec jQuery</b></p>");
paragraphes2.css("color", "brown");

// ------------------------------------------------------------------------------
// ajouter || supprimer un element
$("h1").prepend("ah :");
$("h1").append("?");
$("h1").before("<div>Hey</div>");
$(".maClass").after("<h2>Azul</h2>");
// $('p').remove();

// selectionner un element
monTitre2.attr("class");
// console.log('monTitre2:', monTitre2); // h1
monTitre2.attr("style", "text-transform: lowercase");
monTitre2.after("<a href='https://wikipedia.org'>Wikipedia</a> ");
$("a").attr("href", "https://nba.com");

// ------------------------------------------------------------------------------

// $("p").click(() => {
//   $("h1").css("color", "green");
// });

// $("p").on("click", () => {
//   $("h1").css("color", "yellow");
// });

$("h1").on("mouseover", () => {
  $("#monId").addClass("important");
});

// ------------------------------------------------------------------------------
// AJAX request

const url = "https://blockchain.info/ticker";

$.ajax({
  type: "GET",
  url: url,
  dataType: "json",
  success: (data) => {
    // console.log(data);
    $("h1").html("Prix du bitcoin: </ br>" + data.EUR.last + " euro");
    // OR
    // $("h1").text("Prix du bitcoin: " + data.EUR.last + " euro");
  },
  error: () => {
    alert("Merci de revenir plus tard");
  },
});

const url_bis = "https://lesoublisdelinfo.com/api.php";

$.ajax({
  type: "POST",
  url: url_bis,
  data: "prenom=Eric",
  dataType: "json",
  success: (data) => {
    $("#monId").text(data.resultat);
  },
  error: () => {
    alert("something going wrong !");
  },
});

// animations

$("h1").hide(); // cacher
$("h1").show();

$("p").on("click", () => {
  //   $("h1").toggle();

  // $('h1').fadeOut();
  // $('h1').fadeIn();
  // $('h1').fadeToggle();
  // $('h1').slideToggle();
  //   $("h1").animate({
  //     //   only numeric props
  //     opacity: 0.5,
  //     margin: 30,
  //   });
  $("h1").slideUp().slideDown().animate({ opacity: 0.7, margin: 30 });
});

// ------------------------------------------------------------------------
// let ville;
// recupererTemperature("Paris");

// let changerVille = document.querySelector("#changer");
// changerVille.addEventListener("click", () => {
//   ville = prompt("Veuillez entrer une ville");
//   recupererTemperature(ville);
// });

// function recupererTemperature(ville) {
//    url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     ville +
//     "&appid=931e40e38851bdf64ba5eae34af556dd&units=metric";

//   let requete = new XMLHttpRequest();

//   // recuperation des données avec GET
//   requete.open("GET", url);
//   requete.responseType = "json";
//   requete.send();

//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         let temperature = reponse.main.temp;
//         document.querySelector("#temperature_label").textContent = temperature;

//         let villeActuelle = reponse.name;
//         document.querySelector("#ville").textContent = villeActuelle;
//       } else {
//         alert("Un problème est survenu, veuillez revenir ulterieurement !");
//       }
//     }
//   };
// }
