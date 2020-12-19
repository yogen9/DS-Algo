// https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/
// https://www.youtube.com/watch?v=pGVguAcWX4g&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=39

const s = "T|T&F^T";
const map = {};

const solve = (s: string, i: number, j: number, isTrue: boolean): number => {
  if (i > j) {
    return 0;
  }
  if (i == j) {
    return isTrue ? 1 : 0;
  }
  let ans = 0;
  if (map[`${i}_${j}_${isTrue}`]) {
    return map[`${i}_${j}_${isTrue}`];
  }
  for (let k = i + 1; k <= j - 1; k = k + 2) {
    let lt = solve(s, i, k - 1, true);
    let lf = solve(s, i, k - 1, false);
    let rt = solve(s, k + 1, j, true);
    let rf = solve(s, k + 1, j, false);
    if (s[k] == "&") {
      if (isTrue) {
        ans = ans + rt * lt;
      } else {
        ans = ans + lf * rt + lf * rf + lf * rf;
      }
    } else if (s[k] == "|") {
      if (isTrue) {
        ans = ans + lt * rf + lt * rt + lf * rt;
      } else {
        ans = ans + lf * rf;
      }
    } else if (s[k] == "^") {
      if (isTrue) {
        ans = ans + lf * rt + lt * rf;
      } else {
        ans = ans + lt * rt + lf * rf;
      }
    }
  }
  map[`${i}_${j}_${isTrue}`] = ans;
  return ans;
};

console.log(solve(s, 0, s.length - 1, true));
console.log(map);
