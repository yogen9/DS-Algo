// Each “cross edge” defines a cycle in an undirected graph.
// https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

const graph = {};
graph[0] = new Set([1, 2, 3]);
graph[1] = new Set([0, 2]);
graph[2] = new Set([0, 1]);
graph[3] = new Set([0, 4]);
graph[4] = new Set([3]);

// non cycle graph
// graph[0] = new Set([1]);
// graph[1] = new Set([0, 2]);
// graph[2] = new Set([1, 3]);
// graph[3] = new Set([2]);

const modifiedDFS = (node, visited, parent) => {
  visited[node] = true;
  console.log(node);
  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      if (modifiedDFS(neighbour, visited, node)) {
        return true;
      }
      // if visited and parent is not equal to neighbour
    } else if (parent != neighbour) {
      return true;
    }
  }
  return false;
};

// for all nodes
for (const iterator of Object.keys(graph)) {
  const visited = {};
  if (modifiedDFS(iterator, visited, -1)) {
    console.log(true);
    return;
  }
}
