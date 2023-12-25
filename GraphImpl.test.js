const graph = require("./GraphImpl");

describe("Test Grtaph Implementation", () => {
  let graph = new graph();

  test("Test Graph constructor top element", () => {
    expect(graph.nodeCount).toEqual(0);
  });

});
