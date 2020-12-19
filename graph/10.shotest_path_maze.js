// https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/

const maze = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
];

const isVisited = maze.reduce((acc, curr) => {
  acc.push(new Array(curr.length).fill(false));
  return acc;
}, []);

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let start = [8, 0];
let end = [1, 6];
const queue = [];
queue.push([...start, 0]);

const isSafe = (i, j) => {
  return (
    i >= 0 && j >= 0 && i < maze.length && j < maze[0].length && maze[i][j] == 1
  );
};

const modifiedBFS = () => {
  while (queue.length > 0) {
    const [i, j, step] = queue.shift();
    if (i == end[0] && j == end[1]) {
      console.log([i, j, step]);
    }
    for (let dir = 0; dir < 4; dir++) {
      let xIndex = i + direction[dir][0];
      let yIndex = j + direction[dir][1];
      if (isSafe(xIndex, yIndex) && !isVisited[xIndex][yIndex]) {
        queue.push([xIndex, yIndex, step + 1]);
        isVisited[xIndex][yIndex] = true;
      }
    }
  }
};
modifiedBFS();
