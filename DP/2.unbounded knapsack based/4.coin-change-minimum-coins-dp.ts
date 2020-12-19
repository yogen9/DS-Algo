// https://www.youtube.com/watch?v=I-l6PBeERuc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=16
// https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

const coin = [25, 10, 5];
const sum = 30;
let matrix = [...Array(coin.length + 1)].map(() =>
  [...Array(sum + 1)].map(() => -1)
);

const solve = (coin: number[], sum: number) => {
  for (let i = 0; i < coin.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j == 0) {
        matrix[i][j] = 0;
      }
      if (i == 0) {
        matrix[i][j] = Number.MAX_VALUE - 1;
      }
    }
  }

  for (let j = 1; j < sum + 1; j++) {
    if (j % coin[0] == 0) {
      matrix[1][j] = j / coin[0];
    } else {
      matrix[1][j] = Number.MAX_VALUE - 1;
    }
  }
  console.log(matrix);

  for (let i = 2; i < coin.length + 1; i++) {
    // 2
    for (let j = 1; j < sum + 1; j++) {
      if (j >= coin[i - 1]) {
        matrix[i][j] = Math.min(
          matrix[i][j - coin[i - 1]] + 1,
          matrix[i - 1][j]
        );
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }
};
solve(coin, sum);
console.log(matrix);
