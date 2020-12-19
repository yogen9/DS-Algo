// https://www.geeksforgeeks.org/given-a-number-find-next-sparse-number/

const isSparsr = (num) => {
  return (num & (num >> 1)) == 0;
};

console.log(isSparsr(72));
console.log(isSparsr(12));
