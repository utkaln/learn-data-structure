const selectionSort = require("./SelectionSort");

describe("Test Selection Sort", () => {
  let selectSort = new selectionSort();

  test("Test constructor of Bubble sort", () => {
    expect(selectSort).toBeTruthy();
  });

  test("Test ascending sorting 4 elements", () => {
    expect(selectSort.sortAscending([10, 30, 20, 5])).toEqual([5, 10, 20, 30]);
  });
});
