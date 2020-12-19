// https://www.youtube.com/watch?v=FzvK5uuaki8&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=13
// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

const a = [1, 2, 3, 4, 15, 16, 17, 18, 19, 20, 100, 200, 525, 1001];

let start = 0;
let end = 1;
let key = 100;

while (a[end] < key) {
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
  return -1;
};

console.log(binarySearch(a, key, start, end));
