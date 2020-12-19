// https://www.youtube.com/watch?v=nV_wOZnhbog

const graph = {
  A: { B: 3, D: 5 }, // node A is connected to nodes C and D
  B: { A: 2, D: 8 },
  C: { B: 1 },
  D: { C: 2 },
};

// Initialization Of result
const result = JSON.parse(JSON.stringify(graph));
Object.keys(graph).forEach((node) => {
  Object.keys(graph).forEach((targetNode) => {
    if (!result[node][targetNode]) {
      result[node][targetNode] = Infinity;
    }
    if (node == targetNode) {
      result[node][targetNode] = 0;
    }
  });
});

console.log({ result });

// main algo

Object.keys(graph).forEach((node) => {
  Object.keys(graph).forEach((targetNode) => {
    Object.keys(graph).forEach((intermediateNode) => {
      if (
        result[node][intermediateNode] &&
        result[intermediateNode][targetNode] &&
        node != targetNode &&
        targetNode != intermediateNode
      )
        result[node][targetNode] = Math.min(
          result[node][targetNode],
          result[node][intermediateNode] + result[intermediateNode][targetNode]
        );
    });
  });
});

console.log({ result });
