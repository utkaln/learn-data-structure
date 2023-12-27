module.exports = class GraphImpl {
  constructor() {
    this.adjacencyList = {};
    this.nodeCount = 0;
    return this;
  }

  addNode(node) {
    this.adjacencyList[node] = [];
    this.nodeCount++;
    return this.adjacencyList[node];
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
    return this.adjacencyList[node1];
  }
};
