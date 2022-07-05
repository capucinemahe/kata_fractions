const assert = require("assert");
const Fraction = require("./app_capucine.js");

//dans le terminal : npx mocha test.js pour lancer les tests

describe("tests d'opérations entre fractions", () => {
  it("additionner deux fractions", () => {
    const fraction1 = new Fraction(1, 2);
    const fraction2 = new Fraction(1, 3);

    assert.deepStrictEqual(
      fraction1.additionner(fraction2),
      new Fraction(5, 6)
    );
  });

  it("soustraire deux fractions", () => {
    const fraction1 = new Fraction(10, 2);
    const fraction2 = new Fraction(3, 5);

    assert.deepStrictEqual(
      fraction1.soustraire(fraction2),
      new Fraction(44, 10)
    );
  });

  it("multiplier deux fractions", () => {
    const fraction1 = new Fraction(10, 2);
    const fraction2 = new Fraction(3, 5);

    assert.deepStrictEqual(
      fraction1.multiplier(fraction2),
      new Fraction(30, 10)
    );
  });

  it("diviser deux fractions", () => {
    const fraction1 = new Fraction(10, 2);
    const fraction2 = new Fraction(3, 5);

    assert.deepStrictEqual(fraction1.diviser(fraction2), new Fraction(50, 6));
  });

  it("simplifier une fraction", () => {
    const fraction1 = new Fraction(5, 10);

    assert.deepStrictEqual(fraction1.simplifier(), new Fraction(1, 2));
  });

  it("tester une erreur : denominateur = 0", () => {
    const e = new Error(
      "le dénominateur d'une fraction ne doit pas être egal à 0"
    );

    assert.throws(() => new Fraction(10, 0), e);
  });
});
