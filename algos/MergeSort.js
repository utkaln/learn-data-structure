module.exports = class MergeSort {
  constructor() {
    return this;
  }

  mergeSort(inputArr) {
    if (inputArr.length === 1) {
      return inputArr;
    }
    // split input array to two parts
    const arrLen = inputArr.length;
    const middlePoint = Math.floor(arrLen / 2);
    const leftArr = inputArr.slice(0, middlePoint);
    const rightArr = inputArr.slice(middlePoint);
    console.log("left arr -> ", leftArr);
    console.log("right arr -> ", rightArr);

    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }

  merge(leftArr, rightArr) {
    const outputArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // loop as long as elements exists
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        outputArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        outputArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    outputArr
      .concat(leftArr.slice(leftIndex))
      .concat(rightArr.slice(rightIndex));
    return outputArr;
  }
};
