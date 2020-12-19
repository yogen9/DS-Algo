// https://www.geeksforgeeks.org/set-k-th-bit-given-number/

let n = 10;
let k = 3;

console.log((1 << (k - 1)) | n);
