import { arrayColors, arrayFruits } from "../arrays";
describe("Comprobar que existe un elemento", () => {
  test("¿Tiene una banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test('No contiene platano', () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test('Comprobar el tamaño de un array', () => {
    expect(arrayFruits()).toHaveLength(6);
  });

});
