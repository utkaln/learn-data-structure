const binTree = require("../ds/BinaryTreeImpl");
const bFS = require("./BFS");

describe("Test BFS", () => {
  let bT = new binTree();
  let bfs = new bFS();

  test("BFS Binary Tree Test Constructor", () => {
    expect(bT.root).toEqual(null);
  });
  test("BFS insert test", () => {
    bT.insert(9);
    bT.insert(4);
    bT.insert(6);
    bT.insert(20);
    bT.insert(170);
    bT.insert(15);
    bT.insert(1);
    expect(bT.root.value).toEqual(9);
  });

  test("BFS Iterative test", () => {
    //console.log(bfs.breadthSearch(bT));
    expect(bfs.breadthSearch(bT)).toBeTruthy();
  });

  test("BFS Recurison test", () => {
    //console.log(bfs.bfsRecursive([bT.root], []));
    expect(bfs.bfsRecursive([bT.root], [])).toEqual([9, 4, 20, 1, 6, 15, 170]);
  });
});
