const wt = [1, 2, 3];
const val = [10, 15, 40];
const capacity = 6;
let matrix = [...Array(val.length + 1)].map(() =>
  [...Array(capacity + 1)].map(() => -1)
);
const knapsackTabular = (wt: number[], val: number[], capacity: number) => {
  for (let i = 0; i < val.length - 1; i++) {
    for (let j = 0; j < capacity; j++) {
      if (i == 0 || j == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let n = 1; n < val.length + 1; n++) {
    for (let w = 1; w < capacity + 1; w++) {
      if (wt[n - 1] <= w) {
        matrix[n][w] = Math.max(
          val[n - 1] + matrix[n - 1][w - wt[n - 1]],
          matrix[n - 1][w]
        );
      } else if (w < wt[n - 1]) {
        matrix[n][w] = matrix[n - 1][w];
      }
    }
  }
};

knapsackTabular(wt, val, capacity);
console.log(matrix);
