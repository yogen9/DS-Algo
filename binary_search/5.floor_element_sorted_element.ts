// https://www.youtube.com/watch?v=5cx0xerA8XY&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=10
// https://www.geeksforgeeks.org/floor-in-a-sorted-array/

export const binarySearch = (array: number[], num: number): number => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    if (array[mid] == num) {
      return mid;
    } else if (array[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start - 1; // for floor
  // return end + 1; // for seal
};

const a = [1, 2, 3, 5, 6, 8, 9];

console.log(binarySearch(a, 7));
