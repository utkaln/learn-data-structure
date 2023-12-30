const dynamicP = require("./DynamicProgramming");

describe("Test Dynamic Programming", () => {
  let dP = new dynamicP();

  test("Test fibonacci with recursion 7", () => {
    expect(dP.fibonacciR(7)).toEqual(13);
  });

  test("Test fibonacci with Dynamic Programming 7", () => {
    const fibDy = dP.fibonacciDy();
    expect(fibDy(7)).toEqual(13);
  });
});
