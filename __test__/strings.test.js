describe("Comprobar cadenas de texto", () => {
  const text = "Un bonito texto";
  test("Debe contener el siguiente text", () => {
    expect(text).toMatch(/bonito/);
  });
  test("No contiene el siguiente text", () => {
    expect(text).not.toMatch(/textos/);
  });
  test("Comprobar la cantidad de caracteres de un texto", () => {
    expect(text).toHaveLength(15);
  });
});
