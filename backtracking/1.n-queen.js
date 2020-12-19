// https://www.youtube.com/watch?v=wGbuCyNpxIg
// https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/
const N = 4;
const matrix = [...Array(N)].map(() => [...Array(N)].map(() => 0));

const isSafe = (row, col) => {
  for (let i = 0; i < row; i++) {
    if (matrix[i][col] == 1) {
      return false;
    }
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (matrix[i][j] == 1) {
      return false;
    }
  }
  for (let i = row, j = col; i < N && j >= 0; i++, j--) {
    if (matrix[i][j] == 1) {
      return false;
    }
  }
  return true;
};

const solveNQueen = (row) => {
  if (row >= N) {
    return true;
  }
  for (let col = 0; col < N; col++) {
    if (isSafe(row, col)) {
      matrix[row][col] = 1;
      if (solveNQueen(row + 1)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
};

solveNQueen(0);
console.log(matrix);
