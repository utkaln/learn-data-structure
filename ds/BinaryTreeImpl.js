class BinNode {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
    return this;
  }

  insert(val) {
    const newNode = new BinNode(val);
    // if no root node then incoming value becomes root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let checkNode = this.root;
    while (checkNode) {
      if (val < checkNode.value) {
        if (!checkNode.left) {
          checkNode.left = newNode;
          return this;
        }
        checkNode = checkNode.left;
      } else {
        if (!checkNode.right) {
          checkNode.right = newNode;
          return this;
        }
        checkNode = checkNode.right;
      }
    }
  }
};
