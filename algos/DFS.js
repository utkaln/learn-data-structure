module.exports = class Dfs {
  // Depth first search with In Order strategy using recursion
  depthInOrderR(node, returnArr) {
    // look if the node has existing left, then traverse further
    if (node.left) {
      this.depthInOrderR(node.left, returnArr);
    }

    // If no further left node found, then this must be the last one
    // Add the last one to output array
    returnArr.push(node.value);

    // After push check for existence of right node and traverse
    if (node.right) {
      this.depthInOrderR(node.right, returnArr);
    }
    // No need to add to output array since looping in again will get to push call
    return returnArr;
  }
  // Depth first search with Pre Order strategy using recursion
  // In Pre order, the root elements gets added first, then traverse to child node from left to right
  depthPreOrderR(node, returnArr) {
    // First add the node value starting with root
    returnArr.push(node.value);

    // look if the node has existing left, then traverse further
    if (node.left) {
      this.depthPreOrderR(node.left, returnArr);
    }
    // After push check for existence of right node and traverse
    if (node.right) {
      this.depthPreOrderR(node.right, returnArr);
    }

    // No need to add to output array since looping in again will get to push call
    return returnArr;
  }
  // Depth first search with Inn Order strategy using recursion
  depthPostOrderR(node, returnArr) {
    // look if the node has existing left, then traverse further
    if (node.left) {
      this.depthPostOrderR(node.left, returnArr);
    }
    // After push check for existence of right node and traverse
    if (node.right) {
      this.depthPostOrderR(node.right, returnArr);
    }
    // At the ennd add the node value starting with root
    returnArr.push(node.value);

    // No need to add to output array since looping in again will get to push call
    return returnArr;
  }
};
