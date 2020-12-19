// https://www.youtube.com/watch?v=8x6dmO6XW8k&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=14
// https://www.geeksforgeeks.org/find-index-first-1-infinite-sorted-array-0s-1s/

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let start = 0;
let end = 1;

while (a[end] < 1) {
  start = end;
  end = end * 2;
}
console.log({ start, end });

const binarySearch = (
  array: number[],
  num: number,
  start: number,
  end: number
): number => {
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

console.log(binarySearch(a, 1, start, end));
