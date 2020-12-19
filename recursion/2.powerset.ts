// https://www.youtube.com/watch?v=Yg5a2FxU4Fo&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=12
// https://www.geeksforgeeks.org/recursive-program-to-generate-power-set/

const input = "abc";

const powerSet = (input: string[], output: string[]) => {
  if (input.length == 0) {
    console.log(output);
    return;
  }
  let firstElement = input.shift();
  let op1 = [...output];
  let op2 = [...output];
  op2.push(firstElement);
  powerSet([...input], op1);
  powerSet([...input], op2);
};
powerSet(input.split(""), []);
