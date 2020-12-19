// https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

const array = [3, 4, 5, 2];
const sum = 6;
let matrix = [...Array(array.length + 1)].map(() =>
  [...Array(sum + 1)].map(() => false)
);

const solve = (array: number[], sum: number) => {
  for (let i = 0; i < array.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) {
        matrix[i][j] = false;
      }
      if (j == 0) {
        matrix[i][j] = true;
      }
    }
  }

  for (let i = 1; i < array.length + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (j >= array[i- 1]) {
        matrix[i][j] = matrix[i-1][j] || matrix[i-1][j - array[i - 1]];
      } else {
        matrix[i][j] = matrix[i-1][j];
      }
    }
  }
};
solve(array, sum);
console.log(matrix);
