const world = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const visited = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
let counter = 0;

const modifiedDFS = (i, j) => {
  // always add i and j condition first before accessing any element eg. !visited[i][j] should not come first in condition
  if (
    i >= 0 &&
    j >= 0 &&
    i < world.length &&
    j < world[0].length &&
    !visited[i][j] &&
    world[i][j] == 1
  ) {
    visited[i][j] = true;
    modifiedDFS(i + 1, j); // always pass i+1 not i++
    modifiedDFS(i, j + 1);
    modifiedDFS(i + 1, j + 1);
    modifiedDFS(i - 1, j);
    modifiedDFS(i, j - 1);
    modifiedDFS(i - 1, j - 1);
    modifiedDFS(i + 1, j - 1);
    modifiedDFS(i - 1, j + 1);
  }
};

for (let i = 0; i < world.length; i++) {
  for (let j = 0; j < world[0].length; j++) {
    if (!visited[i][j] && world[i][j] == 1) {
      modifiedDFS(i, j);
      counter++;
    }
  }
}
console.log(counter);
console.log(visited);
