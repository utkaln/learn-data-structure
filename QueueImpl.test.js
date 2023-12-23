const queue = require("./QueueImpli");

describe("Test Queue Implementation", () => {
  let que = new queue(10);

  test("Test queue constructor top element", () => {
    expect(que.first.value).toEqual(10);
  });

  test("Test queue constructor length", () => {
    expect(que.length).toBe(1);
  });

  test("Test queue enqueue of 3 items", () => {
    que.enqueue(20);
    que.enqueue(30);
    que.enqueue(40);
    expect(que.length).toEqual(4);
  });

  test("Test queue dequeue first item", () => {
    stackImpl.pop();
    expect(stackImpl.first.value).toEqual(20);
  });

  test("Test pop for only element", () => {
    let queSingle = new queue("Only Element");
    stackImplSingle.pop();
    expect(stackImplSingle.first).toEqual(null);
  });
});
