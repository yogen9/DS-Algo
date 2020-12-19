// https://www.youtube.com/watch?v=t1shZ8_s6jc
// https://www.geeksforgeeks.org/minimum-cost-path-left-right-bottom-moves-allowed/

const graph = [
  [31, 100, 65, 12, 18],
  [10, 13, 47, 157, 6],
  [100, 113, 174, 11, 33],
  [88, 124, 41, 20, 140],
  [99, 32, 111, 41, 20],
];

const isVisited = graph.reduce((acc, curr) => {
  acc.push(new Array(curr.length).fill(false));
  return acc;
}, []);

const cost = graph.reduce((acc, curr) => {
  acc.push(new Array(curr.length).fill(Infinity));
  return acc;
}, []);

const queue = [];

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const isSafe = (i, j) => {
  return i >= 0 && j >= 0 && i < graph.length && j < graph[0].length;
};

const minCost = () => {
  return queue.reduce((minKey, curr) => {
    if (minKey == null || cost[minKey[0]][minKey[1]] > cost[curr[0]][curr[1]]) {
      if (!isVisited[curr[0]][curr[1]]) {
        minKey = curr;
      }
    }
    return minKey;
  }, null);
};

const dijkstra = () => {
  let start = minCost();
  while (start) {
    let xIndex = start[0];
    let yIndex = start[1];
    isVisited[xIndex][yIndex] = true;
    for (let dir = 0; dir < direction.length; dir++) {
      let x = xIndex + direction[dir][0];
      let y = yIndex + direction[dir][1];
      if (isSafe(x, y) && !isVisited[x][y]) {
        if (cost[x][y] > cost[xIndex][yIndex] + graph[x][y]) {
          cost[x][y] = cost[xIndex][yIndex] + graph[x][y];
          queue.push([x, y]);
        }
      }
    }
    start = minCost();
  }
};

cost[0][0] = 31;
queue.push([0, 0]);
dijkstra();
console.log({ isVisited, cost });
