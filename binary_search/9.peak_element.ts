// https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/
// https://www.youtube.com/watch?v=OINnBJTRrMU&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=17
// https://www.youtube.com/watch?v=BrrZL1RDMwc&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=18
// https://www.geeksforgeeks.org/find-the-maximum-element-in-an-array-which-is-first-increasing-and-then-decreasing/
// https://www.geeksforgeeks.org/find-element-bitonic-array/

const binarySearch = (array: number[]): number => {
  let start = 1;
  let end = array.length - 1;
  while (start <= end) {
    console.log({ start, end });

    let mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    console.log({ mid });

    if (array[mid] > array[mid + 1] && array[mid] > array[mid - 1]) {
      return mid;
    } else if (array[mid] > array[mid + 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log({ start, end });

  if (array.length > 0 && array[0] > array[1]) {
    return 1;
  }
  if (array.length > 0 && array[array.length - 1] > array[array.length - 2]) {
    return array.length - 1;
  }
  return -1;
};

const a = [5, 10, 20, 15];

console.log(binarySearch(a));
