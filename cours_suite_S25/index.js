// les dates en JS

// 1er janvier 1970
let maDatePrecise = new Date(2922, 0, 31, 16, 33);
// console.log(maDatePrecise); // Sat Jan 31 2922 16:33:00

let dateActuelle = new Date();
// console.log(dateActuelle.getFullYear());
// console.log(dateActuelle.getDay()); // jour de la semaine (1 => lundi)
// jour de la semaine commence a partir de dimanche (index 0)

// console.log("today: " + maDatePrecise.getDate()); // jour du mois => 31

// console.log("getUTCDay: " + dateActuelle.getUTCDay());

dateActuelle.setFullYear(1988);
// console.log("dateActuelle:", dateActuelle.getFullYear()); // => 1988

// format local

let dateActuelle2 = new Date();

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

let dateLocale = dateActuelle2.toLocaleString(navigator.language, {
  weekday: "long", // short (3 premières lettres), narrow (première lettre),
  // long (toutes les lettres)
  year: "numeric", // numeric (xxxx), 2-digit (xx)
  month: "long", // short, narrow, long, numeric
  day: "numeric", // numeric, 2-digit
  hour: "numeric", // ...
  minute: "numeric",
  second: "numeric",
});

// console.log(dateLocale);
// console.log("--------------------------");
// -------------------------------------------------------------
// template string

// let prenom = "Yuri";
// let bonjour = "privet " + prenom;
// console.log("bonjour:", bonjour);

// now
// let prenom = "Yuri";
// let bonjour = `Bonjour ${prenom} `;
// console.log("bonjour:", bonjour);

let date = new Date().getFullYear();
let copyright = `${date} @ Azulation `;
// console.log(copyright);
// console.log("--------------------------");

//

let aliment = {
  fruits: 5,
  legumes: 10,
  biscuits: 111,
};

let panier = `Dans votre panier, vous avez ${aliment.fruits} fruit(s), 
${aliment.legumes} légume(s) et ${aliment.biscuits} biscuit(s)`;

let panier2 = `Dans votre panier, vous avez ${
  aliment.fruits + aliment.legumes + aliment.biscuits
} articles.`;
console.log(panier);
console.log("--------------------");
console.log(panier2);
