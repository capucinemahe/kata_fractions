// addtionner
// soustraire
// multiplier
// diviser
// deux fractions : A et B

const e = new Error("le dénominateur d'une fraction ne doit pas être egal à 0");

class Fraction {
  numerateur;
  denominateur;


  constructor(num, den) {
    this.numerateur = num;
    this.denominateur = den;
    if(den === 0)
    throw e;
  }

  multiplier(fraction) {
    return new Fraction(
      this.numerateur * fraction.numerateur,
      this.denominateur * fraction.denominateur
    );
  }

  diviser(fraction) {
    return this.multiplier(
      new Fraction(fraction.denominateur, fraction.numerateur)
    );
    //on inverse denominateur et numerateur pour diviser une fraction
  }

  additionner(fraction) {
    const memeDenominateur = this.denominateur * fraction.denominateur;

    return new Fraction(
      this.numerateur * fraction.denominateur +
        fraction.numerateur * this.denominateur,
      memeDenominateur
    );
  }

  soustraire(fraction) {
    const memeDenominateur = this.denominateur * fraction.denominateur;

    return new Fraction(
      this.numerateur * fraction.denominateur -
        fraction.numerateur * this.denominateur,
      memeDenominateur
    );
  }
}

const fractionA = new Fraction(10, 3);
const fractionB = new Fraction(4, 5);

//const fractionB = new Fraction(4, 0);

console.log(fractionA.multiplier(fractionB));
console.log(fractionA.diviser(fractionB));
console.log(fractionA.additionner(fractionB));
console.log(fractionA.soustraire(fractionB));