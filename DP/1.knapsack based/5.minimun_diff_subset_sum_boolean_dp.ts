// https://www.youtube.com/watch?v=-GtpxG6l_Mc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=10
// https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/

const array = [1, 2, 7];
const target = array.reduce((acc, curr) => acc + curr, 0);
let matrix = [...Array(array.length + 1)].map(() =>
  [...Array(target + 1)].map(() => false)
);

const solve = (array: number[], target: number) => {
  for (let i = 0; i < array.length + 1; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (i == 0) {
        matrix[i][j] = false;
      }
      if (j == 0) {
        matrix[i][j] = true;
      }
    }
  }

  for (let i = 1; i < array.length + 1; i++) {
    for (let j = 1; j < target + 1; j++) {
      if (j >= array[i - 1]) {
        matrix[i][j] = matrix[i - 1][j] || matrix[i - 1][j - array[i - 1]];
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }
};
solve(array, target);
console.log(matrix[array.length]);

let minimum = Number.MAX_VALUE;
for (let i = 0; i < (target + 1) / 2; i++) {
  // only half way
  if (matrix[array.length][i])
    minimum = target - 2 * i < minimum ? target - 2 * i : minimum;
}

console.log(minimum);
