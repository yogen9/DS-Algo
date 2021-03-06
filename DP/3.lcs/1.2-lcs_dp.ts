// https://www.geeksforgeeks.org/printing-longest-common-subsequence/

const a = "abcde";
const b = "bdea";
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
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]); // make it 0 in case of lognest common substring
      }
    }
  }
};

const printLcs = (a: string, b: string) => {
  let i = a.length;
  let j = b.length;
  while (i > 0 || j > 0) {
    if (a[i - 1] == b[j - 1]) {
      console.log(a[i - 1]);
      i--;
      j--;
    } else {
      if (matrix[i - 1][j] > matrix[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
};

solve(a, b);
console.log(matrix);
printLcs(a, b);
