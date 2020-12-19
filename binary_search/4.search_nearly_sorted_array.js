// https://www.youtube.com/watch?v=W3-KgsCVH1U&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=9
// https://www.geeksforgeeks.org/search-almost-sorted-array/

var modifiedBinarySearch = function (array, num) {
  var start = 0;
  var end = array.length - 1;
  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2); // this will prevent overflow of number
    if (array[mid] == num) {
      return mid;
    } else if (mid - 1 >= start && array[mid - 1] == num) {
      return mid - 1;
    } else if (mid + 1 <= end && array[mid + 1] == num) {
      return mid + 1;
    }
    if (array[mid] < num) {
      start = mid + 2;
    } else {
      end = mid - 2;
    }
  }
  return -1;
};
var a = [10, 3, 40, 20, 50, 80, 70];
console.log(modifiedBinarySearch(a, 80));
