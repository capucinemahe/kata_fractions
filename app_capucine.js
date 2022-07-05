// addtionner
// soustraire
// multiplier
// diviser
// deux fractions : A et B

const e = new Error("le dénominateur d'une fraction ne doit pas être egal à 0");

class Fraction {
  constructor(num, den) {
    this.numerateur = num;
    this.denominateur = den;
    if (den === 0) throw e;
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

  simplifier() {
    const pgcd = calculPgcd(this.numerateur, this.denominateur);
    return new Fraction(this.numerateur / pgcd, this.denominateur / pgcd);
  }
}

//Math.abs met en valeur absolue
function calculPgcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

module.exports = Fraction;
