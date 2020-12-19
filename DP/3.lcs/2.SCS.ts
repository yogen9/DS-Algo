// https://www.youtube.com/watch?v=823Grn4_dCQ&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=24
// https://www.geeksforgeeks.org/shortest-common-supersequence/
// https://www.youtube.com/watch?v=VDhRg-ZJTuc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=29
// https://www.geeksforgeeks.org/print-shortest-common-supersequence/

const a = "abcdaf";
const b = "acbcf";
export let matrix = [...Array(a.length + 1)].map(() =>
  [...Array(b.length + 1)].map(() => -1)
);

const solve = (a: string, b: string) => {
  for (let i = 0; i < a.length + 1; i++) {
    for (let j = 0; j < b.length + 1; j++) {
      if (i == 0 || j == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      if (a[i - 1] == b[j - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
};

const printSCS = (a: string, b: string): string => {
  let i = a.length;
  let j = b.length;
  let result = "";
  while (i > 0 || j > 0) {
    if (a[i - 1] == b[j - 1]) {
      result = result.concat(a[i - 1]);
      i--;
      j--;
    } else {
      if (matrix[i - 1][j] > matrix[i][j - 1]) {
        result = result.concat(a[i - 1]);
        i--;
      } else {
        result = result.concat(a[i - 1]);
        j--;
      }
    }
  }

  while (i > 0) {
    result = result.concat(a[i - 1]);
    i--;
  }
  while (j > 0) {
    result = result.concat(b[j - 1]);
    j--;
  }

  return result;
};

solve(a, b);
console.log(matrix);
console.log(printSCS(a, b));
