// https://www.youtube.com/watch?v=4Urd0a0BNng&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=19
// https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
// https://www.geeksforgeeks.org/longest-common-substring-dp-29/

const a = "abcde";
const b = "bdea";
let matrix = [...Array(a.length + 1)].map(() =>
  [...Array(b.length + 1)].map(() => false)
);

const solve = (a: string, b: string): number => {
  if (a.length == 0 || b.length == 0) {
    return 0;
  }
  if (a[a.length - 1] == b[b.length - 1]) {
    return 1 + solve(a.slice(0, -1), b.slice(0, -1));
  } else {
    return Math.max(solve(a.slice(0, -1), b), solve(a, b.slice(0, -1))); // make it 0 in case of lognest common substring
  }
};

console.log(solve(a, b));
