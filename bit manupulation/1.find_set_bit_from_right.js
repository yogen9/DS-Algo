// https://www.youtube.com/watch?v=Ztt-VtNyqL8
// https://www.geeksforgeeks.org/position-of-rightmost-set-bit/

// with calculation
const getFirstSetBitFromRight = (num) => {
  let count = 1;
  while ((num >> 1) % 2 == 1) {
    num = num >> 1;
    console.log(num);
    count++;
  }
  return count;
};

// with masking
const getFirstSetBitFromRightMask = (num) => {
  let count = 1;
  let mask = 1;
  while (num != 0) {
    if ((mask & num) == mask) {
      return count;
    }
    count++;
    num = num >> 1;
  }
  return count;
};

// with maths
const getFirstSetBitFromRightMath = (num) => {
  return Math.log2(num & -num) + 1;
};

console.log(getFirstSetBitFromRightMath(18));
