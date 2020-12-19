const wt = [1, 2, 3];
const val = [10, 15, 40];
const capacity = 6;


const knapsackRecursionWithMemoization = (
  wt: number[],
  val: number[],
  capacity: number
): number => {
  if (val.length == 0 || capacity == 0) {
    return 0;
  }
  if (matrix[val.length][capacity] !== -1) {
    return matrix[val.length][capacity];
  }
  if (capacity >= wt[wt.length - 1]) {
    matrix[val.length][capacity] = Math.max(
      val[val.length - 1] +
        knapsackRecursionWithMemoization(
          wt.slice(0, -1),
          val.slice(0, -1),
          capacity - wt[wt.length - 1]
        ),
      knapsackRecursionWithMemoization(
        wt.slice(0, -1),
        val.slice(0, -1),
        capacity
      )
    );
    return matrix[val.length][capacity];
  } else if (capacity < wt[wt.length - 1]) {
    matrix[val.length][capacity] = knapsackRecursionWithMemoization(
      wt.slice(0, -1),
      val.slice(0, -1),
      capacity
    );
    return matrix[val.length][capacity];
  }
};

knapsackRecursionWithMemoization(wt, val, capacity);

console.log(matrix);
