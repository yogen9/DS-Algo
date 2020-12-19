// https://www.geeksforgeeks.org/binary-search/
// https://www.youtube.com/watch?v=QNGL_t_o_QA&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=2

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
  return -1;
};
