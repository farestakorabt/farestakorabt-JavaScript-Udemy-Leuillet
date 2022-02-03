// selectionner mes elements

let btn = document.querySelector("#mode");
let span = document.querySelector("span");

// check if theme is sombre or clair
if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") == "sombre") {
    modeSombre();
  }
}

btn.addEventListener("click", () => {
  // mode clair
  if (document.body.classList.contains("dark")) {
    document.body.className = "";
    btn.className = "";
    span.textContent = "Thème sombre";

    localStorage.setItem("theme", "clair");
  } else {
    // mode sombre
    modeSombre();
  }
});

function modeSombre() {
  document.body.classList.add("dark");
  span.textContent = "Thème clair";
  btn.classList.add("myButton");

  localStorage.setItem("theme", "sombre");
}
