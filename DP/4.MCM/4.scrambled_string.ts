// https://www.interviewbit.com/problems/scramble-string/
// https://www.youtube.com/watch?v=SqA0o-DGmEw&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=41
// https://www.geeksforgeeks.org/check-if-a-string-is-a-scrambled-form-of-another-string/

const a = "coder";
const b = "ocred";
const map = {};

const solve = (a: string, b: string): boolean => {
  if (a.length != b.length) {
    return false;
  }
  if (a.length == 0 && b.length == 0) {
    return true;
  }
  if (a == b) {
    return true;
  }
  if (a.length <= 1) {
    return false;
  }
  if (map[`${a}_${b}`]) {
    return map[`${a}_${b}`];
  }
  let n = a.length;
  let flag = false;
  for (let i = 1; i < n; i++) {
    if (
      (solve(a.substring(0, n - i), b.substring(i, n)) &&
        solve(a.substring(n - i, n), b.substring(0, i))) ||
      (solve(a.substring(0, i), b.substring(0, i)) &&
        solve(a.substring(i, n), b.substring(i, n)))
    ) {
      flag = true;
      break;
    }
  }
  map[`${a}_${b}`] = flag;
  return flag;
};

console.log(solve(a, b));
console.log(map);
