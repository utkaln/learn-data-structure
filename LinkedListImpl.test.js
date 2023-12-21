const LinkedList = require("./LinkedListImpl");

describe("Test Linked List Implementation", () => {
  let linkedList = new LinkedList(10);

  test("Linked List Test Constructor", () => {
    console.log(linkedList);
    expect(linkedList.printList()).toEqual([10]);
  });

  test("Linked List Test Append", () => {
    linkedList.append(5);
    console.log(linkedList);
    expect(linkedList.printList()).toEqual([10, 5]);
  });

  test("Linked List Test Prepend", () => {
    linkedList.prepend(15);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([15, 10, 5]);
  });

  test("Linked List Test Print List", () => {
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([15, 10, 5]);
  });

  test("Linked List Test Insert at index 2", () => {
    linkedList.insert(2, 9);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([15, 10, 9, 5]);
  });

  test("Linked List Test Insert at beginning", () => {
    linkedList.insert(0, 99);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([99, 15, 10, 9, 5]);
  });

  test("Linked List Test Insert at end", () => {
    linkedList.insert(5, 999);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([99, 15, 10, 9, 5, 999]);
  });

  test("Linked List Test Delete 3rd element (Index = 2)", () => {
    linkedList.delete(2);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([99, 15, 9, 5, 999]);
  });

  test("Linked List Test Delete head ", () => {
    linkedList.delete(0);
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([15, 9, 5, 999]);
  });

  test("Linked List Test Reverse method ", () => {
    linkedList.reverse();
    console.log(linkedList.printList());
    expect(linkedList.printList()).toEqual([999, 5, 9, 15]);
  });
});
