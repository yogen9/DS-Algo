// https://www.youtube.com/watch?v=3RhGdmoF_ac&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=15
// https://www.geeksforgeeks.org/find-minimum-difference-pair/

export const binarySearch = (array: number[], num: number): number => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    console.log({ start, end });

    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    if (array[mid] == num) {
      return mid;
    } else if (array[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return Math.abs(key - array[start]) < Math.abs(key - array[end])
    ? start
    : end;
};

const a = [1, 2, 3, 4, 4, 8, 9, 10];
const key = 5;

console.log(binarySearch(a, key));
