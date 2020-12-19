const arrayz = [10, 20, 30, 40, 30];
export let matrix = [...Array(arrayz.length + 1)].map(() =>
  [...Array(arrayz.length + 1)].map(() => -1)
);

const solve = (array: number[], i: number, j: number): number => {
  if (i >= j) {
    matrix[i][j] = 0;
    return 0;
  }
  if (matrix[i][j] != -1) {
    return matrix[i][j];
  }
  let min: number = 100000000000;
  for (let k = i; k <= j - 1; k++) {
    let temp =
      solve(array, i, k) +
      solve(array, k + 1, j) +
      array[i - 1] * array[k] * array[j];
    if (min > temp) {
      min = temp;
    }
  }
  matrix[i][j] = min;
  return matrix[i][j];
};

console.log(solve(arrayz, 1, arrayz.length - 1));
console.log(matrix);
