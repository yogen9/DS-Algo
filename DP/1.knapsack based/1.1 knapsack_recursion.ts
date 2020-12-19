// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// https://www.youtube.com/watch?v=kvyShbFVaY8&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=3
const wt = [1, 2, 3];
const val = [10, 15, 40];
const capacity = 6;

const knapsackRecursion = (
  wt: number[],
  val: number[],
  capacity: number
): number => {
  if (val.length == 0 || capacity == 0) {
    return 0;
  }
  if (capacity >= wt[wt.length - 1]) {
    return Math.max(
      val[val.length - 1] +
        knapsackRecursion(
          wt.slice(0, -1),
          val.slice(0, -1),
          capacity - wt[wt.length - 1]
        ),
      knapsackRecursion(wt.slice(0, -1), val.slice(0, -1), capacity)
    );
  } else if (capacity < wt[wt.length - 1]) {
    return knapsackRecursion(wt.slice(0, -1), val.slice(0, -1), capacity);
  }
};

console.log(knapsackRecursion(wt, val, capacity));
