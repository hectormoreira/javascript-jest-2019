import { sumar, restar, multiplicar, dividir } from "../maths.js";

describe("Calculos matemáticos", () => {
  test("Prueba de sumar", () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test("Prueba de restar", () => {
    expect(restar(3, 1)).toBe(2);
  });

  test("Prueba de multiplicar", () => {
    expect(multiplicar(3, 2)).toBe(6);
  });

  test("Prueba de dividir", () => {
    expect(dividir(6, 2)).toBe(3);
  });
});
