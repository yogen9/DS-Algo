// https://www.youtube.com/watch?v=qe_pQCh09yU
// leetcode 210
// https://www.geeksforgeeks.org/topological-sorting/
// alien dictionary

// This will work in DAG only, if you find cycle (DeadLock) then return empty array
// Topological Sorting is mainly used for scheduling jobs from the given dependencies among jobs

const graph = {};
graph[0] = new Set();
graph[1] = new Set();
graph[2] = new Set([3]);
graph[3] = new Set([1]);
graph[4] = new Set([0, 1]);
graph[5] = new Set([0, 2]);

const visited = {};
const stack = [];
const modifiedDFS = (node) => {
  visited[node] = true;
  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      modifiedDFS(neighbour);
    }
  }
  stack.push(node);
};

Object.keys(graph).forEach((key) => {
  if (!visited[key]) {
    modifiedDFS(key);
  }
});
console.log(stack.reverse());
