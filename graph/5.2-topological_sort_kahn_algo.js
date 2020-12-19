// https://www.youtube.com/watch?v=tggiFvaxjrY
// leetcode 210
// https://www.geeksforgeeks.org/topological-sorting/

// This will work in DAG only, if you find cycle (DeadLock) then return empty array
//

const calculateInDegree = (graph) => {
  const inDegreeMap = Object.keys(graph).reduce((acc, node) => {
    acc[node] = 0;
    return acc;
  }, {});

  Object.keys(graph).forEach((node) => {
    graph[node].forEach((node) => {
      inDegreeMap[node]++;
    });
  });

  return inDegreeMap;
};

modifiedBFS = (graph, initialQueue, inDegreeMap, count) => {
  let ans = [];
  let queue = [...initialQueue];
  while (queue.length > 0) {
    let node = queue.shift();
    ans.push(node);
    count.count++;
    graph[node].forEach((key) => {
      inDegreeMap[key]--;
      if (inDegreeMap[key] == 0) {
        queue.push(key);
      }
    });
  }
  return count.count == Object.keys(graph).length ? ans : [];
};

const graph = {};
graph[0] = new Set();
graph[1] = new Set();
graph[2] = new Set([1]);
graph[3] = new Set([0, 2]);
graph[4] = new Set([0, 1]);
graph[5] = new Set([0, 3]);
const inDegreeMap = calculateInDegree(graph);

// start with only 0th inDegree node
const initialQueue = Object.keys(inDegreeMap).filter(
  (node) => inDegreeMap[node] == 0
);

const count = { count: 0 };
console.log(modifiedBFS(graph, initialQueue, inDegreeMap, count));
