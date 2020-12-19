const coin = [2, 5, 3, 6];
const sum = 10;
let matrix = [...Array(coin.length + 1)].map(() =>
  [...Array(sum + 1)].map(() => -1)
);

const solve = (coin: number[], sum: number): number => {
  if (coin.length == 0) {
    return 0;
  }
  if (sum == 0) {
    return 1;
  }
  if (matrix[coin.length][sum] != -1) {
    return matrix[coin.length][sum];
  }
  if (sum >= coin[coin.length - 1]) {
    matrix[coin.length][sum] =
      solve(coin, sum - coin[coin.length - 1]) + solve(coin.slice(0, -1), sum);
    return matrix[coin.length][sum];
  } else {
    matrix[coin.length][sum] = solve(coin.slice(0, -1), sum);
    return matrix[coin.length][sum];
  }
};

console.log(solve(coin, sum));
console.log(matrix);
