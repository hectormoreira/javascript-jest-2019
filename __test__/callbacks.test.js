import { callbackHell } from "../callbacks";

describe("Probando Callback", () => {
  test("Callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola JavaScripters");
      done();
    }
    callbackHell(otherCallback);
  });
});
