// https://www.youtube.com/watch?v=S49zeUjeUL0&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=43
// https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/

const eggs = 2;
const floors = 10;

const solve = (eggs: number, floors: number): number => {
  if (floors == 0 || floors == 1) {
    return floors;
  }
  if (eggs == 1) {
    return floors;
  }
  let min = Number.MAX_VALUE;
  for (let k = 1; k <= floors; k++) {
    let temp = 1 + Math.max(solve(eggs - 1, k - 1), solve(eggs, floors - k));
    min = Math.min(temp, min);
  }
  return min;
};

console.log(solve(eggs, floors));
