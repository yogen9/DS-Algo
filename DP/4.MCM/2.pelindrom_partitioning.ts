// https://www.youtube.com/watch?v=szKVpQtBHh8&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=36
// https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/

const a = "nitik";

const isPelindrom = (a: string, i: number, j: number): boolean => {
  return (
    a
      .split("")
      .slice(i, j + 1)
      .join("") ==
    a
      .split("")
      .slice(i, j + 1)
      .reverse()
      .join("")
  );
};

const solve = (a: string, i: number, j: number): number => {
  if (i >= j) {
    return 0;
  }
  if (isPelindrom(a, i, j)) {
    return 0;
  }
  let min = 10000000;
  for (let k = i; k <= j - 1; k++) {
    let temp = solve(a, i, k) + solve(a, k + 1, j) + 1;
    if (min > temp) {
      min = temp;
    }
  }
  return min;
};

console.log(solve(a, 0, a.length - 1));
