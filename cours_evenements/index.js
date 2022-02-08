// ------------------------------
// les evenements (events)
// ------------------------------

// let a = document.querySelector("a");
// let button = document.querySelector("button");

// a.onclick = () => {
//   if (confirm("etes vous sur de vouloir supprimer ?")) {
//     location.href = "https://www.worldometers.info";
//   }
// };

// button.onmouseover = () => {
//   document.body.style.backgroundColorColor = "orange";
// };

// button.onmouseout = () => {
//   document.body.style.backgroundColorColor = "white";
// };

// la meilleure methode

let a = document.querySelector("a");
let button = document.querySelector("button");

function borderRadiusButton() {
  button.style.borderRadius = "15px";
}

button.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "orange";
});

button.addEventListener("click", borderRadiusButton);

button.addEventListener("mouseout", () => {
  document.body.style.fontWeight = "bolder";
});

a.removeEventListener("mouseout", borderRadiusButton);

// stop propagation
let article = document.querySelector("article");

let h1 = document.querySelector("h1");

article.addEventListener("click", () => {
  alert("article cliqué");
});

h1.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("titre cliqué");
});

// ------------------------------
// setTimeout()

let timeOut = setTimeout(() => {
  console.log("Hello !!");
}, 1000);
// clearTimeout(timeOut);
// ------------------------------
// setInterval
// combien de temps entre chaque
// let interval = setInterval("console.log('Bonjour !')", 2000);
// clearInterval(interval);
