// https://www.youtube.com/watch?v=4BfL2Hjvh8g&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9&index=2

var a = [8, 5, 7, 4, 6, 3, 9];
var k = 3;
var heap = [];
for (var i = 0; i < a.length; i++) {
  heap.push(a[i]);
  heap.sort(function (a, b) {
    return a - b;
  });
  if (heap.length > k) {
    heap.pop();
  }
}
console.log(heap[heap.length - 1]);
