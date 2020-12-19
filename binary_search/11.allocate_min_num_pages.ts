// https://www.youtube.com/watch?v=2JSQIhPcHQg&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=21
// https://www.geeksforgeeks.org/allocate-minimum-number-pages/

const isValid = (array: number[], K: number, max: number): boolean => {
  let students = 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum > max) {
      students++;
      sum = array[i];
    }
    if (students > K) {
      return false;
    }
  }
  return true;
};
const binarySearch = (array: number[]): number => {
  if (array.length < K) {
    return -1;
  }
  let start = 0;
  let end = a.reduce((acc, curr) => acc + curr);
  let result = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    console.log({ start, end, mid });

    if (isValid(array, K, mid)) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
};

const a = [10, 20, 30, 40];
const K = 2;

console.log(binarySearch(a));
