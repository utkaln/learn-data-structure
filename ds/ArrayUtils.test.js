const reverseStr = require("./ArrayUtils");

test("Test Empty String", () => {
  expect(reverseStr()).toBe("");
});

test("Test One char String", () => {
  expect(reverseStr("A")).toBe("A");
});

test("Test Two char String", () => {
  expect(reverseStr("Abc")).toBe("cbA");
});
