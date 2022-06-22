// addtionner
// soustraire
// multiplier
// diviser

// deux fractions

class Fraction {
  numerateur;
  denominateur;

  constructor(num, den) {
    this.numerateur = num;
    this.denominateur = den;
  }

  multiplier(fraction) {
    return new Fraction(
      this.numerateur * fraction.numerateur,
      this.denominateur * fraction.denominateur
    );
  }

  additionner(fraction) {
    return new Fraction(
      this.numerateur * fraction.denominateur +
        fraction.numerateur * this.denominateur,
      this.denominateur * fraction.denominateur
    );
  }
  soustraire(fraction) {
    return new Fraction(
      this.numerateur * fraction.denominateur -
        fraction.numerateur * this.denominateur,
      this.denominateur * fraction.denominateur
    );
  }
}


function multiplication(a, b) {
  const resultat = new Fraction();

  resultat.numerateur = a.numerateur * b.numerateur;
  resultat.denominateur = a.denominateur * b.denominateur;

  return resultat;
}

function division(a, b) {
  const inverse = new Fraction(b.denominateur, b.numerateur);
  const resultat = multiplication(a, inverse);

  return resultat;
}

function addition(a, b) {
  const resultat = new Fraction();

  resultat.numerateur =
    a.numerateur * b.denominateur + b.numerateur * a.denominateur;
  resultat.denominateur =
    a.denominateur * b.denominateur;

  return resultat;
}
function soustraction(a, b) {
  const resultat = new Fraction();

  resultat.numerateur =
    a.numerateur * b.denominateur - b.numerateur * a.denominateur;
  resultat.denominateur =
    a.denominateur * b.denominateur;

  return resultat;
}

const fractionA = new Fraction(10, 3);
const fractionB = new Fraction(4, 5);

console.log(multiplication(fractionA, fractionB));
console.log(division(fractionA, fractionB));
console.log(addition(fractionA, fractionB));
console.log(soustraction(fractionA, fractionB));