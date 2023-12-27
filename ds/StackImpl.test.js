const stack = require("./StackImpl");

describe("Test stack Implementation", () => {
  let stackImpl = new stack(10);

  test("Test stack constructor top element", () => {
    expect(stackImpl.top.value).toEqual(10);
  });

  test("Test stack constructor length", () => {
    expect(stackImpl.length).toBe(1);
  });

  test("Test stack constructor bottom element", () => {
    expect(stackImpl.bottom).toEqual(null);
  });

  test("Test stack push of 3 items", () => {
    stackImpl.push(20);
    stackImpl.push(30);
    stackImpl.push(40);
    expect(stackImpl.length).toEqual(4);
  });

  test("Test stack pop to last items", () => {
    stackImpl.pop();
    expect(stackImpl.length).toEqual(3);
  });

  test("Test pop for only element", () => {
    let stackImplSingle = new stack("Only Element");
    stackImplSingle.pop();
    expect(stackImplSingle.length).toEqual(0);
  });

  test("Test stack peek the last item", () => {
    expect(stackImpl.peek()).toEqual(30);
  });
});
