const hashUtil = require("./HashMapUtils");

test("Test Array Method", () => {
  expect(hashUtil.findRepeatNumberArray([1, 2, 3, 5, 4, 5, 7, 2, 3, 5])).toBe(
    2
  );
});

test("Test Array Method unique numbers", () => {
  expect(hashUtil.findRepeatNumberArray([1, 2, 3, 4, 5, 6, 7])).toBe(undefined);
});

test("Test Hash Method with empty data", () => {
  expect(hashUtil.findRepeatNumberHashMap()).toBe(undefined);
});

test("Test Hash Method with valid data", () => {
  expect(hashUtil.findRepeatNumberHashMap([1, 2, 3, 5, 4, 5, 7, 2, 3, 5])).toBe(
    5
  );
});

test("Test Hash Method with no repeat data", () => {
  expect(hashUtil.findRepeatNumberHashMap([1, 2, 3, 4, 5, 6, 7])).toBe(
    undefined
  );
});

test("Test Hash Method with valid data", () => {
  expect(hashUtil.firstRecurringCharacter([1, 2, 3, 5, 4, 5, 7, 2, 3, 5])).toBe(
    5
  );
});
