module.exports = class QueueImpl {
  constructor(val) {
    this.first = new Node(val);
    this.last = null;
    this.first.next = this.last;
    this.length = 1;
    return this;
  }

  // O(1)
  peek() {
    return this.first.value;
  }

  // O(1)
  dequeue() {
    // if there is only one element, then remote the top and make it empty
    if (this.first.next === null) {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    // if there is more than one element, then remove the top and make it the new top
    this.first = this.first.next;
    this.length--;
    return this;
  }

  // O(1)
  enqueue(val) {
    const newNode = new Node(val);
    this.last.next = newNode;
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
