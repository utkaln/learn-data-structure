module.exports = class BiLinkedListImpl {
  // constructor creates the first element of a LinkedList
  constructor(val) {
    this.head = new BiNode(val);
    this.tail = this.head;
    //this.head.next = this.tail;
    this.length = 1;
    return this;
  }

  //O(1)
  append(val) {
    let appendNode = new BiNode(val);

    appendNode.previous = this.tail;
    this.tail.next = appendNode;
    this.tail = appendNode;

    this.length++;

    return this;
  }

  //O(1)
  prepend(val) {
    let prependNode = new BiNode(val);
    this.head.previous = prependNode;
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
        let insertNode = new BiNode(val);
        insertNode.next = currNode.next;
        currNode.next = insertNode;
        insertNode.previous = currNode;
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
      this.head.previous = null;
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
        currNode.next.previous = currNode;
        this.length--;
        return this;
      } else {
        currNode = currNode.next;
        nodeCounter++;
      }
    }

    return this;
  }
};

class BiNode {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}
