module.exports = class StackImpl {
  constructor(val) {
    this.top = new Node(val);
    this.top.next = this.bottom;
    this.bottom = null;
    this.length = 1;
    return this;
  }

  // O(1)
  peek() {
    return this.top.value;
  }

  // O(1)
  pop() {
    // if there is only one element, then remote the top and make it empty
    if (this.top.next === null) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    // if there is more than one element, then remove the top and make it the new top
    this.top = this.top.next;
    this.length--;
    return this;
  }

  // O(1)
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }
};

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
