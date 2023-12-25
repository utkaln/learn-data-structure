const binTree = require("./BinaryTreeImpl");

describe("Test Binary Tree Implementation", () => {
  let bT = new binTree();

  test("Binary Tree Test Constructor", () => {
    expect(bT.root).toEqual(null);
  });

  test("Binary Tree Test root element creation", () => {
    bT.insert(100);
    expect(bT.root.value).toEqual(100);
  });
  test("Binary Tree Test first left element creation", () => {
    bT.insert(10);
    expect(bT.root.left.value).toEqual(10);
  });
  test("Binary Tree Test multi element creation", () => {
    bT.insert(20);
    bT.insert(40);
    bT.insert(30);
    bT.insert(200);
    bT.insert(250);
    bT.insert(120);
    expect(bT.root.value).toEqual(100);
  });
});
