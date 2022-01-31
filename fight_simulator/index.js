// mes classes

// Personnage
class Personnage {
  constructor(pseudo, sante, attaque) {
    this.pseudo = pseudo;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  // getter
  get informations() {
    console.log(
      this.pseudo +
        " a " +
        this.sante +
        " points de vie et est au niveau " +
        this.niveau +
        "."
    );
  }

  // methodes
  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau);
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante == 0;
      console.log(this.pseudo + " a perdu !");
    }
  }
}

// Magicien
class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, 350, 50, "magicien");
  }

  // methodes
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort de " +
        this.attaque +
        " dégâts"
    );

    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec un coup spécial: 'puissance des arcanes' " +
        personnage.pseudo
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

// Guerrier
class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, 350, 90, "guerrier");
  }

  // methodes
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec un sabre, provoquant: " +
        this.attaque +
        " dégâts"
    );

    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec un coup spécial: 'Bazooka Terminator' " +
        personnage.pseudo +
        " " +
        this.attaque * 5 +
        " degats"
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

var gandalf = new Magicien("Gandalf");
gandalf.informations;

var thor = new Guerrier("Thor");
thor.informations;

console.log("---------------");

gandalf.attaquer(thor);
thor.informations;

console.log("---------------");

thor.attaquer(gandalf);
gandalf.informations;

console.log("---------------");

thor.coupSpecial(gandalf);
