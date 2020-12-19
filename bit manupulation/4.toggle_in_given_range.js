// https://www.geeksforgeeks.org/toggle-bits-given-range/

let n = 25;
let left = 2;
let right = 4;

let num = ((1 << right) - 1) ^ ((1 << (left - 1)) - 1);

console.log(num ^ n);
console.log((1 << right) - 1);
console.log(1 << (left - 1 - 1));
