const findCommonElements = require("./index");
test("Base Test with Empty Input", () => {
  expect(findCommonElements()).toBe(true);
});

// test("Large elements array", () => {
//   const targetTxt = "hello";
//   const sourceArr = new Array(10).fill(targetTxt);
//   expect(findCommonElements(sourceArr, targetTxt)).toBe(true);
// });

// const reverseStr = require("./index");
// test("Reverse an empty string", () => {
//   let outputStr = reverseStr();
//   expect(outputStr).toMatch("");
// });
