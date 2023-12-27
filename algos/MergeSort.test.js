const mergeSort = require("./MergeSort");

describe("Test Insertion Sort", () => {
  let msort = new mergeSort();

  test("Test constructor of Merge sort", () => {
    expect(msort).toBeTruthy();
  });

  test("Test mergeSort method", () => {
    expect(msort.mergeSort([99, 44, 6, 2, 87, 283, 4])).toEqual([
      2, 4, 6, 44, 87, 99, 283,
    ]);
  });
});
