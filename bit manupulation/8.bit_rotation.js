// https://www.geeksforgeeks.org/rotate-bits-of-an-integer/

const rotationRight = (num, k) => {
  return (num >> k) | (num << (53 - k));
};

console.log(rotationRight(16));
