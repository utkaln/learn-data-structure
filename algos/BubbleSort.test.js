const bubbleSort = require("./BubbleSort");

describe("Test Bubble Sort", () => {
  let bsort = new bubbleSort();

  test("Test constructor of Bubble sort", () => {
    expect(bsort).toBeTruthy();
  });

  test("Test ascending sorting 4 elements", () => {
    //console.log(bsort.sortAscending([10, 30, 20, 5]));
    expect(bsort.sortAscending([10, 30, 20, 5])).toEqual([5, 10, 20, 30]);
  });
});
