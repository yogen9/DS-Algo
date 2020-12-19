// https://www.youtube.com/watch?v=J2Er5XceU_I&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=15
// https://www.geeksforgeeks.org/permute-string-changing-case/
// https://leetcode.com/problems/letter-case-permutation/
// https://www.youtube.com/watch?v=4eOPYDOiwFo&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=16

const input = "abc";

const spacePermutation = (input: string[], output: string[]) => {
  if (input.length == 0) {
    console.log(output);
    return;
  }
  let firstElement = input.shift();
  let op1 = [...output];
  let op2 = [...output];
  op1.push(firstElement.toLocaleUpperCase());
  op2.push(firstElement);
  spacePermutation([...input], op1);
  spacePermutation([...input], op2);
};

spacePermutation(input.split(""), []);
