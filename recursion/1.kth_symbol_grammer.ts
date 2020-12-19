// https://leetcode.com/problems/k-th-symbol-in-grammar/
// https://www.youtube.com/watch?v=5P84A0YCo_Y&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=10
// 0 -> 0 1
// 1 -> 1 0

const solve = (n: number, k: number) => {
  if (n == 1 || k == 1) {
    return 0;
  }
  let mid = Math.pow(2, n) / 2;
  if (mid >= k) {
    return solve(n - 1, k);
  } else {
    return solve(n - 1, k - mid) == 0 ? 1 : 0;
  }
};

console.log(solve(4, 5));
