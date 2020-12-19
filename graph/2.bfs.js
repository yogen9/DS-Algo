// https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

const graph = {};
graph[0] = new Set([1, 2, 3]);
graph[2] = new Set([4]);
graph[1] = new Set();
graph[3] = new Set();
graph[4] = new Set();

const BFS = (node) => {
  const visited = {};
  const queue = [];
  queue.push(node);
  visited[node] = true;

  while (queue.length > 0) {
    let currentNode = queue.shift();
    console.log(currentNode);
    for (const neighbour of graph[currentNode]) {
      if (!visited[neighbour]) {
        queue.push(neighbour); // every time pushing unique node only
        visited[neighbour] = true;
      }
    }
  }
};

BFS(0);
// it does't give guarantee of traversal of all nodes
