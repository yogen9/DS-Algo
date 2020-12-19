// https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n-set-2/

const countSetBits = (num) => {
  num += 1;
  let powerOf2 = 2;
  let count = num / 2;
  while (powerOf2 <= num) {
    let totalPairs = num / powerOf2;
    count += (totalPairs / 2) * powerOf2;
    count += totalPairs % 2 == 1 ? num % powerOf2 : 0;
    powerOf2 = powerOf2 << 1;
  }
  return count;
};

console.log(countSetBits(14));
