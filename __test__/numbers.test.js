import { numbers } from "../numbers";

describe("Comparacion de numeros", () => {
  test("Mayor que", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test("Mayor que o igual", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test("Menor que", () => {
    expect(numbers(2, 2)).toBeLessThan(10);
  });

  test("Menor que o igual", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });

  test('Numeros flotantes', () => {
    const value = 0.1 + 0.2;
    //This won't work because of rounding error
    //expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
