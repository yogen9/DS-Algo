// https://www.geeksforgeeks.org/count-number-of-bits-to-be-flipped-to-convert-a-to-b/

const countBits = (num) => {
  let count = 0;
  while (num != 0) {
    if ((1 & num) == 1) {
      count++;
    }
    num = num >> 1;
  }
  return count;
};

console.log(countBits(7 ^ 0));
