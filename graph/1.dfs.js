// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

// const adjacencyList = new Map();
// adjacencyList.set(1, new Set([2, 3]));
// adjacencyList.set(2, new Set([3, 4]));
// adjacencyList.set(3, new Set());
// adjacencyList.set(4, new Set([3]));
const graph = {};
graph[1] = new Set([2, 3]);
graph[2] = new Set([3, 4]);
graph[3] = new Set();
graph[4] = new Set([3]);

const visited = {};
const DFS = (node) => {
  visited[node] = true;
  console.log(node);
  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      DFS(neighbour);
    }
  }
};

DFS(1);
// it does't give guarantee of traversal of all nodes
