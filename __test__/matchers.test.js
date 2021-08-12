describe("Comparadores comunes", () => {
  const user = {
    name: "hector",
    lastname: "moreira",
  };

  const user2 = {
    name: "hector",
    lastname: "moreira",
  };

  const user3 = {
    name: "hector",
    lastname: "moreira2",
  };

  test("Igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  test("No son exactamente iguales", () => {
    expect(user).not.toEqual(user3);
  });
});
