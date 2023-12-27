module.exports = class LinkedListImpl {
  // constructor creates the first element of a LinkedList
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  //O(1)
  append(val) {
    const appendNode = new Node(val);

    this.tail.next = appendNode;
    this.tail = appendNode;
    this.length++;

    return this;
  }

  //O(1)
  prepend(val) {
    const prependNode = new Node(val);
    prependNode.next = this.head;
    this.head = prependNode;
    this.length++;
    return this;
  }

  //O(n)
  printList() {
    let listArr = [];
    let currNode = this.head;
    while (currNode !== null) {
      listArr.push(currNode.value);
      currNode = currNode.next;
    }
    return listArr;
  }

  //O(n)
  insert(index, val) {
    let nodeCounter = 0;
    let currNode = this.head;
    //O(1)
    if (index === 0) {
      this.prepend(val);
      return this;
    }

    //O(1)
    if (index === this.length) {
      this.append(val);
      return this;
    }

    //O(1)
    if (index < 0 || index > this.length) {
      return undefined;
    }

    //O(n)
    while (currNode !== null) {
      if (index - 1 === nodeCounter) {
        let insertNode = new Node(val);
        insertNode.next = currNode.next;
        currNode.next = insertNode;
        this.length++;
        return this;
      } else {
        currNode = currNode.next;
        nodeCounter++;
      }
    }

    return this;
  }
  //O(n)
  delete(index) {
    let nodeCounter = 0;
    let currNode = this.head;
    //O(1)
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }

    //O(1)
    if (index < 0 || index > this.length) {
      return undefined;
    }

    //O(n)
    while (currNode !== null) {
      if (index - 1 === nodeCounter) {
        currNode.next = currNode.next.next;
        this.length--;
        return this;
      } else {
        currNode = currNode.next;
        nodeCounter++;
      }
    }

    return this;
  }

  //O(n)
  reverse() {
    //O(1)
    // If just head element present then return the same
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
};

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
