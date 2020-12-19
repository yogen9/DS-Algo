// https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
// https://www.youtube.com/watch?v=_gPcYovP7wc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=7

const array = [3, 4, 5, 2];
const sum = 6;

const solve = (array: number[], sum: number): boolean => {
  if (array.length == 0) {
    return false;
  }
  if (sum == 0) {
    return true;
  }
  if (sum >= array[array.length - 1]) {
    return (
      solve(array.slice(0, -1), sum) ||
      solve(array.slice(0, -1), sum - array[array.length - 1])
    );
  } else {
    return solve(array.slice(0, -1), sum);
  }
};

console.log(solve(array, sum));
