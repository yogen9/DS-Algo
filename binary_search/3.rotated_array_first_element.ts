// https://www.youtube.com/watch?v=4WmTRFZilj8&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=7
// https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/
// https://www.youtube.com/watch?v=Id-DdcWb5AU&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=8

const modifiedBinarySearch = (array: number[]): number => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    let next = (mid + 1) % array.length;
    let prev = (mid + array.length - 1) % array.length;
    if (array[mid] < array[prev] && array[mid] < array[next]) {
      return mid;
    } else if (array[mid] > array[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const a = [6, 7, 8, 9, 10, 1, 2, 6, 6, 6, 6, 6, 6, 6];

console.log(modifiedBinarySearch(a));
