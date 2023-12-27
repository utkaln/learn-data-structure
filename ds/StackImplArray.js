module.exports = class StackImplArr {
  constructor(val) {
    this.arr = [];
    this.arr.push(val);
    this.length = this.arr.length;
    return this;
  }

  // O(1)
  peek() {
    return this.arr[this.length - 1];
  }

  // O(1)
  pop() {
    this.arr.pop();
    this.length--;
    return this;
  }

  // O(1)
  push(val) {
    this.arr.push(val);
    this.length++;
    return this;
  }
};
