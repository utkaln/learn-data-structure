module.exports = class SelectionSort {
  constructor() {
    return this;
  }

  sortAscending(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
      //assume current i is the minimum and start comparing with rest
      let minIndex = i;
      let tempVal = inputArr[i];
      for (let j = i + 1; j < inputArr.length; j++) {
        if (inputArr[j] < tempVal) {
          minIndex = j;
        }
      }
      inputArr[i] = inputArr[minIndex];
      inputArr[minIndex] = tempVal;
    }
    return inputArr;
  }
};
