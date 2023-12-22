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

  test("Test stack pop to leave items", () => {
    stackImpl.pop();
    expect(stackImpl.length).toEqual(3); 
  });
});
