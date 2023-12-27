module.exports = class BubbleSort {
  constructor() {
    this.answerValue = 1;
    return this;
  }

  sortAscending(inputArr) {
    for (let i in inputArr) {
      for (let j = 0; j < inputArr.length; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          let temp = inputArr[j + 1];
          inputArr[j + 1] = inputArr[j];
          inputArr[j] = temp;
        }
      }
    }
    return inputArr;
  }
};
