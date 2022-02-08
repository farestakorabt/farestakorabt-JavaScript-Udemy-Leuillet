// ----------------------------------
// methode asynchrone , callback, promesses
// ----------------------------------

function chargerScript(script) {
  return new Promise((resolve, reject) => {
    // creer un element
    let element = document.createElement("script");
    element.src = script;
    document.head.append(element);

    // resolve()
    element.onload = () => resolve("Fichier " + script + " a été chargé");

    // reject()
    element.onerror = () => reject(new Error("Opération impossible " + script));
  });
}

async function resultat() {
  try {
    const scriptA = await chargerScript("test.js");
    console.log(scriptA);

    const scriptB = await chargerScript("other.js");
    console.log(scriptB);
  } catch (error) {
    console.log(error);
    document.head.lastChild.remove();
  }
}
resultat();

// chargerScript("test.js").catch(console.log());

// async & await => "sucres syntaxiques"

// async function direBonjour() {
//   const promesse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promesse tenu !");
//     }, 2000);
//   });

//   let resultat = await promesse;
//   console.log(resultat);
// }

// direBonjour();

// --------------------------------------------------
// fetch
