const binTree = require("../ds/BinaryTreeImpl");
const dFS = require("./DFS");

describe("Test DFS", () => {
  let bT = new binTree();
  let dfs = new dFS();

  test("DFS Binary Tree Test Constructor", () => {
    expect(bT.root).toEqual(null);
  });
  test("DFS Binary insert test", () => {
    bT.insert(9);
    bT.insert(4);
    bT.insert(6);
    bT.insert(20);
    bT.insert(170);
    bT.insert(15);
    bT.insert(1);
    expect(bT.root.value).toEqual(9);
  });

  test("DFS In Order Recurison test", () => {
    expect(dfs.depthInOrderR(bT.root, [])).toEqual([1, 4, 6, 9, 15, 20, 170]);
  });

  test("DFS Pre Order Recurison test", () => {
    expect(dfs.depthPreOrderR(bT.root, [])).toEqual([9, 4, 1, 6, 20, 15, 170]);
  });

  test("DFS Post Order Recurison test", () => {
    expect(dfs.depthPostOrderR(bT.root, [])).toEqual([1, 6, 4, 15, 170, 20, 9]);
  });
});
