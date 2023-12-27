const recursion = require("./Recursion");

describe("Test Linked List Implementation", () => {
  let rec = new recursion();

  test("Test factorial of 4", () => {
    expect(rec.factorial(4)).toBe(24);
  });

  test("Test factorial of 0", () => {
    expect(rec.factorial(0)).toBe(0);
  });

  test("Test factorial of 1", () => {
    expect(rec.factorial(1)).toBe(1);
  });

  test("Test factorial of 10", () => {
    expect(rec.factorial(10)).toBe(3628800);
  });

  test("Test fibonnaci of 4", () => {
    expect(rec.fibonacci(4)).toBe(3);
  });
});
