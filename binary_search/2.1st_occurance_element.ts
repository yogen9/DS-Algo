// https://www.youtube.com/watch?v=zr_AoTxzn0Y&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=5
// https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/
// https://www.youtube.com/watch?v=Ru_HhBFV3Xo&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=6

const binarySearch = (array: number[], num: number): number => {
  let start = 0;
  let end = array.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    if (array[mid] == num) {
      result = mid;
      end = mid - 1;
    } else if (array[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
};

const a = [1, 2, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 9, 10];

console.log(binarySearch(a, 6));
