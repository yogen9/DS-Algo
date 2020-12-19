// https://www.youtube.com/watch?v=t2d-XYuPfg0&t=146s&pbjreload=101
// https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 }, // node A is connected to nodes C and D
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

const cost = {};
const isProcessed = {};
const parent = {};

const initialization = () => {
  Object.keys(graph).forEach((node) => {
    cost[node] = Infinity;
    isProcessed[node] = false;
    parent[node] = null;
  });
};

initialization();
cost["start"] = 0;

const minCost = () => {
  return Object.keys(cost).reduce((minKey, curr) => {
    if (minKey == null || cost[minKey] > cost[curr]) {
      if (!isProcessed[curr]) {
        minKey = curr;
      }
    }
    return minKey;
  }, null);
};

const dijkstra = () => {
  let start = minCost();
  while (start) {
    isProcessed[start] = true;
    Object.keys(graph[start]).forEach((neighbour) => {
      if (!isProcessed[neighbour]) {
        if (cost[neighbour] > cost[start] + graph[start][neighbour]) {
          cost[neighbour] = cost[start] + graph[start][neighbour];
          parent[neighbour] = start;
        }
      }
    });
    start = minCost();
  }
};

dijkstra();
console.log({ isProcessed, parent, cost });
