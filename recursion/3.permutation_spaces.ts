// https://www.geeksforgeeks.org/print-possible-strings-can-made-placing-spaces/
// https://www.youtube.com/watch?v=1cspuQ6qHW0&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=14

const input = "abc";

const spacePermutation = (input: string[], output: string[]) => {
  if (input.length == 0) {
    console.log(output);
    return;
  }
  let firstElement = input.shift();
  let op1 = [...output];
  let op2 = [...output];
  op1.push("_");
  op1.push(firstElement);
  op2.push(firstElement);
  spacePermutation([...input], op1);
  spacePermutation([...input], op2);
};

let arrayOfInput = input.split("");
let firstChar = arrayOfInput.shift();
spacePermutation(arrayOfInput, [firstChar]);
