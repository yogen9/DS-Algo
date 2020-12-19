// https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/
// https://www.youtube.com/watch?v=D7AFvtnDeMU&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=33&pbjreload=101

const arrayz = [10, 20, 30, 40, 30];

const solve = (array: number[], i: number, j: number): number => {
  if (i >= j) {
    return 0;
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
  return min;
};

console.log(solve(arrayz, 1, arrayz.length - 1));
