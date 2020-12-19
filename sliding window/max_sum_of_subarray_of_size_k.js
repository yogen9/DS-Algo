const a = [2, 5, 1, 8, 2, 9, 1];
const window = 2;
const maxSum = (array, window) => {
  let sum = 0;
  let max = 0;
  if (array.length > window) {
    for (let i = 0; i < window; i++) {
      sum += array[i];
    }
  } else {
    return -1;
  }
  for (let i = window; i < array.length; i++) {
    sum = sum - array[i - window];
    sum += array[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(maxSum(a, window));
