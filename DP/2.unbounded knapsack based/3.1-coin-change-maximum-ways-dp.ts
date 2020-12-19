// https://www.youtube.com/watch?v=I4UR2T6Ro3w&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=15
// https://www.geeksforgeeks.org/coin-change-dp-7/

const coin = [2, 5, 3, 6];
const sum = 10;
let matrix = [...Array(coin.length + 1)].map(() =>
  [...Array(sum + 1)].map(() => -1)
);

const solve = (coin: number[], sum: number) => {
  for (let i = 0; i < coin.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) {
        matrix[i][j] = 0;
      }
      if (j == 0) {
        matrix[i][j] = 1;
      }
    }
  }

  for (let i = 1; i < coin.length + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (j >= coin[i - 1]) {
        matrix[i][j] = matrix[i][j - coin[i - 1]] + matrix[i - 1][j];
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }
};
solve(coin, sum);
console.log(matrix);
