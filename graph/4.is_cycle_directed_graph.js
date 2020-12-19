// Presence of back edge indicates a cycle in directed graph.
// https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

const graph = {};
// graph[0] = new Set([1, 2, 3]);
// graph[1] = new Set([0, 2]);
// graph[2] = new Set([0, 1]);
// graph[3] = new Set([0, 4]);
// graph[4] = new Set([3]);

// non cycle graph
graph[0] = new Set([1]);
graph[1] = new Set([2]);
graph[2] = new Set([3]);
graph[3] = new Set([4]);
graph[4] = new Set();

// differenc is only visited map is local
const modifiedDFS = (node, visited) => {
  visited[node] = true;
  console.log(node);
  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      if (modifiedDFS(neighbour, { ...visited })) {
        return true;
      }
      // if visited and parent is not equal to neighbour
    } else {
      return true;
    }
  }
  return false;
};

// for all nodes
for (const iterator of Object.keys(graph)) {
  const visited = {}; // this visited is always different for each node , means it is not global
  if (modifiedDFS(iterator, { ...visited }, -1)) {
    console.log(true);
    return;
  }
}
