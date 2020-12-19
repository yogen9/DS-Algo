// https://www.geeksforgeeks.org/position-rightmost-different-bit/

let m = 11;
let n = 9;

const getFirstSetBitFromRightMath = (num) => {
  return Math.log2(num & -num) + 1;
};

console.log(getFirstSetBitFromRightMath(m ^ n));
