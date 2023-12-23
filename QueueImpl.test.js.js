const queue = require("./QueueImpl");

describe("Test Queue Implementation", () => {
  let que = new queue(10);

  test("Test stack constructor top element", () => {
    expect(que.first.value).toEqual(10);
  });

  test("Test stack constructor length", () => {
    expect(que.length).toBe(1);
  });

  test("Test stack enqueue of 3 items", () => {
    que.enqueue(20);
    que.enqueue(30);
    que.enqueue(40);
    expect(que.length).toEqual(4);
  });

  test("Test stack dequeue first item", () => {
    stackImpl.pop();
    expect(stackImpl.first.value).toEqual(20);
  });

  test("Test pop for only element", () => {
    let queSingle = new queue("Only Element");
    stackImplSingle.pop();
    expect(stackImplSingle.first).toEqual(null);
  });
});
