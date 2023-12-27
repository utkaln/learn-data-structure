const insertionSort = require("./InsertionSort");

describe("Test Insertion Sort", () => {
  let isort = new insertionSort();

  test("Test constructor of Insertion sort", () => {
    expect(isort).toBeTruthy();
  });
});
