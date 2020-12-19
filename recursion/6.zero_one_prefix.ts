// https://www.youtube.com/watch?v=U81n0UYtk98&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=18
// https://www.geeksforgeeks.org/print-n-bit-binary-numbers-1s-0s-prefixes/

const n = 3;

const prefix = (output: string[], n: number, zeros: number, ones: number) => {
  if (n == 0) {
    console.log(output);
    return;
  }
  if (zeros < ones && ones > 0) {
    let op2 = [...output];
    op2.push("0");
    prefix(op2, n - 1, zeros + 1, ones);
  }
  let op1 = [...output];
  op1.push("1");
  prefix(op1, n - 1, zeros, ones + 1);
};
prefix([], n, 0, 0);
