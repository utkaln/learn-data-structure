const graph = require("./GraphImpl");

describe("Test Grtaph Implementation", () => {
  let gp = new graph();

  test("Test Graph constructor", () => {
    expect(gp.nodeCount).toEqual(0);
  });

  test("Test Graph add First node", () => {
    expect(JSON.stringify(gp.addNode("A"))).toEqual("[]");
  });

  test("Test Graph add multiple nodes", () => {
    gp.addNode("B");
    gp.addNode("C");
    gp.addNode("D");
    gp.addNode("E");

    expect(gp.nodeCount).toBe(5);
  });

  test("Test Graph add First edge", () => {
    expect(JSON.stringify(gp.addEdge("A", "B"))).toEqual('["B"]');
  });

  test("Test Graph add one more edge", () => {
    expect(JSON.stringify(gp.addEdge("A", "D"))).toEqual('["B","D"]');
  });

  test("Test Graph add Multiple edges", () => {
    gp.addEdge("B", "C");
    gp.addEdge("C", "D");
    gp.addEdge("D", "E");
    // for (let node in gp.adjacencyList) {
    //   console.log(node);
    // }

    expect(gp.nodeCount).toBe(5);
  });
});
