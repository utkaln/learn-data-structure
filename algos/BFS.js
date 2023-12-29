module.exports = class Bfs {
  breadthSearch(binTree) {
    let currNode = binTree.root;
    let returnArr = [];
    // keep track of children under a traversed node
    let nodeQueue = [];
    // add the node under consideration into the queue
    nodeQueue.push(binTree.root);
    // iterate through nodes as long there are more elements
    while (nodeQueue.length > 0) {
      // take the first element out of the queue array and assign that as current node
      // shift call returns the first element of an array and removes it from array
      currNode = nodeQueue.shift();
      // put the value of the current node to the output array
      returnArr.push(currNode.value);
      // check if the current node has a left child
      if (currNode.left) {
        // add the left node to queue
        nodeQueue.push(currNode.left);
      }
      // Since it is BFS  check if the current node has a right child
      if (currNode.right) {
        // add the right node to queue
        nodeQueue.push(currNode.right);
      }
    }
    return returnArr;
  }

  bfsRecursive(nodeQueue, returnArr) {
    if (!nodeQueue.length) return returnArr;
    let currNode = nodeQueue.shift();
    returnArr.push(currNode.value);
    if (currNode.left) {
      // add the left node to queue
      nodeQueue.push(currNode.left);
    }
    // Since it is BFS  check if the current node has a right child
    if (currNode.right) {
      // add the right node to queue
      nodeQueue.push(currNode.right);
    }
    return this.bfsRecursive(nodeQueue, returnArr);
  }
};
