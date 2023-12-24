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
    if (val >= this.root.value) {
      if (!checkNode.right) {
        this.root.right = checkNode;
      } else {
        while (checkNode.right) {}
      }
    } else {
      if (!checkNode.left) {
        this.root.left = checkNode;
      } else {
        while (checkNode) {}
      }
    }
  }
};
