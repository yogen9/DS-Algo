const array = [3, 4, 5, 2];
const sum = 6;
let matrix = [...Array(array.length + 1)].map(() =>
  [...Array(sum + 1)].map(() => false)
);

const solve = (array: number[], sum: number): boolean => {
  if (array.length == 0) {
    return false;
  }
  if (sum == 0) {
    return true;
  }
  if (sum >= array[array.length - 1]) {
    matrix[array.length][sum] =
      solve(array.slice(0, -1), sum) ||
      solve(array.slice(0, -1), sum - array[array.length - 1]);
    return matrix[array.length][sum];
  } else {
    matrix[array.length][sum] = solve(array.slice(0, -1), sum);
    return matrix[array.length][sum];
  }
};

console.log(solve(array, sum));
console.log(matrix);
