// https://www.geeksforgeeks.org/length-longest-consecutive-1s-binary-representation/

const maxConsequative1s = (num) => {
  let count = 0;
  while (num != 0) {
    num = num & (num << 1);
    count++;
  }
  return count;
};

console.log(maxConsequative1s(14));
console.log(maxConsequative1s(122));
