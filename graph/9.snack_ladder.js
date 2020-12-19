// The problem reduces to finding the shortest path in a graph.
// Since all edges are of equal weight, we can efficiently find shortest path using Breadth First Search of the graph.
// one node is connected to 6 nodes
// https://www.geeksforgeeks.org/snake-ladder-problem-2/

const totalBlockInMaze = 30;
const graph = [];

for (let i = 0; i < totalBlockInMaze; i++) {
  graph.push(-1);
}
// Ladders
graph[2] = 21;
graph[4] = 7;
graph[10] = 25;
graph[19] = 28;

// Snakes
graph[26] = 0;
graph[20] = 8;
graph[16] = 3;
graph[18] = 6;

const getMinDiceThrows = (graph) => {
  const isVisited = {};
  const queue = [];
  queue.push({ block: 0, distance: 0 });
  isVisited[0] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    if (node.block == totalBlockInMaze - 1) {
      break;
    }

    for (let i = 1; i <= 6 && i + node.block < totalBlockInMaze; i++) {
      if (!isVisited[i + node.block]) {
        if (node.block != -1) {
          queue.push({
            block: graph[i + node.block],
            distance: node.distance + 1,
          });
        } else {
          queue.push({ block: i + node.block, distance: node.distance + 1 });
        }
        isVisited[i + node.block] = true;
      }
    }
  }
};
getMinDiceThrows(graph);
