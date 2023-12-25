module.exports = class GraphImpl {
  constructor() {
    this.adjacencyList = {};
    this.nodeCount = 0;
  }

  addNode(node) {
    this.adjacencyList[node] = [];
    this.nodeCount++;
  }

  addEdge(node1, node2) {
      this.adjacencyList[node1].push(node2);
  }
};
