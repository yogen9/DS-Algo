// https://www.geeksforgeeks.org/check-whether-k-th-bit-set-not/

let num = 75;
let k = 4;

let mask = 1 << (k - 1); // 1000 // k-1 because 1st position is already 1 in binary of 1
console.log((num & mask) > 0);
