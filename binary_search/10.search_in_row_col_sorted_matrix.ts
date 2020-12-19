// https://www.youtube.com/watch?v=VS0BcOiKaGI&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=20
// https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/

const modifiedBinarySearch = (
  matrix: number[][],
  key: number
): { i: number; j: number } => {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i >= 0 && j >= 0 && i <= matrix[0].length && j <= matrix.length) {
    console.log({ i, j });

    if (matrix[i][j] == key) {
      return { i, j };
    } else if (matrix[i][j] > key) {
      j--;
    } else {
      i++;
    }
  }
  console.log({ i, j });
  return { i: -1, j: -1 };
};

const a = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
const key = 29;

console.log(modifiedBinarySearch(a, 29));
