// https://www.geeksforgeeks.org/swap-all-odd-and-even-bits/

const swapBits = (num) => {
  let evenBits = 0xaaaaaaaa & num;
  let oddBits = 0x55555555 & num;
  evenBits = evenBits >> 1;
  oddBits = oddBits << 1;
  return evenBits | oddBits;
};

console.log(swapBits(23));
