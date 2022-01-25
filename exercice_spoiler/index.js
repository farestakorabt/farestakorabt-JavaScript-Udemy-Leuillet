// spoiler

let btn2 = document.getElementById("afficher");
let div = document.querySelector("div");
let hidden;

div.style.display = "none";

btn2.addEventListener("click", () => {
  if (hidden) {
    div.style.display = "block";
    btn2.textContent = "Cacher";
    hidden = false;
  } else {
    div.style.display = "none";
    btn2.textContent = "Afficher";
    hidden = true;
  }
});
