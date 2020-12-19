// https://www.youtube.com/watch?v=ULUNeD0N9yI&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=19
// https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/

const n = 14;
const k = 2;
let array = [];
for (let i = 0; i < n; i++) {
  array.push(i + 1);
}

const josephusProblem = (array: number[], index: number) => {
  if (array.length == 1) {
    console.log(array);
    return;
  }
  array.splice(((index + k) % array.length) - 1, 1);
  josephusProblem(array, ((index + k) % array.length) - 1);
};
josephusProblem(array, 0);
