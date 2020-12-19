// https://www.youtube.com/watch?v=St0Jf_VmG_g&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=8
// https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/

let MAH = require("./max_area_histogam");

const modifiedMatrix = (matrix) => {
  let matrixHistogram = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i == 0) {
      matrixHistogram.push(matrix[0]);
    } else {
      let row = matrix[i];
      let matrixHistRow = matrixHistogram[i - 1];
      let ans = [];
      for (let j = 0; j < matrixHistRow.length; j++) {
        ans.push(row[j] == 0 ? 0 : row[j] + matrixHistRow[j]);
      }
      matrixHistogram.push(ans);
    }
  }
  return matrixHistogram;
};

const maxArea = (matrix) => {
  let temp = [];
  for (let i = 0; i < matrix.length; i++) {
    temp.push(MAH(matrix[i]));
  }
  return Math.max(...temp);
};

let matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];
let matHist = modifiedMatrix(matrix);
console.log(matHist);
console.log(maxArea(matHist));
