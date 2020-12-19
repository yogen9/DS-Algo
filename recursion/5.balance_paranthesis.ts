// https://www.youtube.com/watch?v=eyCj_u3PoJE&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=17
// https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/

const n = 3;

const balancedParanthesis = (output: string[], open: number, close: number) => {
  if (open == 0 && close == 0) {
    console.log(output);
    return;
  }
  if (open != 0) {
    let op = [...output];
    op.push("(");
    balancedParanthesis(op, open - 1, close);
  }

  if (open < close) {
    let op1 = [...output];
    op1.push(")");
    balancedParanthesis(op1, open, close - 1);
  }
};
balancedParanthesis([], n, n);
