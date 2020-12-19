// https://www.geeksforgeeks.org/find-maximum-subset-xor-given-set/

let maxXor = 0;
let set = [];
const findMaxXOR = (input, output) => {
  if (input.length == 0) {
    set.push(output);
    return;
  }
  let firstELement = input.shift();
  let op1 = [...output];
  let op2 = [...output];
  op2.push(firstELement);
  findMaxXOR([...input], op1);
  findMaxXOR([...input], op2);
};

findMaxXOR([8, 1, 2, 12, 7, 6], []);
let xOrs = set
  .map((element) =>
    element.reduce((acc, curr) => {
      acc = acc ^ curr;
      return acc;
    }, 0)
  )
  .reduce(
    (acc, curr, index) => {
      if (acc.max < curr) {
        acc.max = curr;
        acc.index = index;
      }
      return acc;
    },
    { max: 0, index: 0 }
  );
console.log(xOrs, set[xOrs.index]);
