// https://www.youtube.com/watch?v=Rs6DXyWpWrI
// Usecase : Many people in these groups generally like some common pages or play common games.
// The SCC algorithms can be used to find such groups and suggest the commonly liked pages or games to the people in the group who have not yet liked commonly liked a page or played a game.

const graph = {};
graph[0] = new Set([1]);
graph[1] = new Set([2]);
graph[2] = new Set([0, 3]);
graph[3] = new Set([4]);
graph[4] = new Set([5, 7]);
graph[5] = new Set([6]);
graph[6] = new Set([7, 4]);
graph[7] = new Set([]);

const intializeIsVisited = () => {
  return Object.keys(graph).reduce((map, node) => {
    map[node] = false;
    return map;
  }, {});
};
let isVisited = intializeIsVisited();
const stack = [];

// First step - DFS Traversal and on return push node into stackconst stack
const DFS1 = (node) => {
  isVisited[node] = true;
  for (let neighbour of graph[node]) {
    if (!isVisited[neighbour]) {
      DFS1(neighbour);
    }
  }
  stack.push(node);
};

Object.keys(graph).forEach((node) => {
  if (!isVisited[node]) {
    DFS1(node);
  }
});

console.log(stack);

// Second step - Reverse all edges
const revGraph = {};
const reverseGraph = (graph) => {
  Object.keys(graph).forEach((node) => {
    for (let neighbour of graph[node]) {
      if (revGraph[neighbour]) {
        revGraph[neighbour].add(node);
      } else {
        revGraph[neighbour] = new Set([node]);
      }
    }
  });
};
reverseGraph(graph);
console.log(revGraph);

// Third step - stack traversal for SSC
isVisited = intializeIsVisited();

const DFS2 = (node) => {
  isVisited[node] = true;
  for (let neibour of revGraph[node]) {
    if (!isVisited[neibour]) {
      DFS2(neibour);
    }
  }
};

let count = 0;
while (stack.length > 0) {
  let node = stack.pop();
  if (!isVisited[node]) {
    DFS2(node);
    count++;
  }
}

console.log(count);
