// https://www.youtube.com/watch?v=_k_c9nqzKN0&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9&index=9
// https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/

const ropes = [1, 2, 5, 10, 35, 89];
const heap = ropes.sort((a, b) => a - b);
console.log(heap);
let ans = 0;
while (heap.length > 1) {
  let firstElement = heap.shift();
  let secondElement = heap.shift();
  ans += firstElement + secondElement;
  heap.push(firstElement + secondElement);
  heap.sort((a, b) => a - b);
}

console.log(ans); // minimum cost
console.log(heap); // rope length
