let header = document.createElement("header");
let menu = document.createElement("div");
let p = document.createElement("p");

// 1 supprimer la div a#supprimer
document.getElementById("a-supprimer").remove();

// 2 creer du header
document.body.append(header, menu, p);
header.style.backgroundColorColor = "#e3b04b";
header.style.padding = "50px";
header.innerHTML =
  "<h1 style='color : white; text-align: center'>Bienvenue</h1>";

// 3 créér du sous-header
menu.style.padding = "20px";
menu.style.backgroundColorColor = "#f1d6ab";
menu.innerHTML =
  "<a href='#' style='text-decoration:none'>Accueil</a> / <a href='#' style='text-decoration:none'>Une autre page</a>";

// 4 creer un paragraphe
p.innerHTML =
  "<p style='color: '>Ceci est un paragraphe créé avec Javascript !</p>";
p.style.margin = "15px";
