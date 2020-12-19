// https://www.youtube.com/watch?v=KOsS5-1q9rU&list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx&index=2
// https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/

const a = [3, 6, 1, 4, 5, 6, 7];
const n = 7;

let sum = (n * (n + 1)) / 2;
let sumOfSquare = (n * (n + 1) * (2 * n + 1)) / 6;
let sumOfArray = a.reduce((acc, curr) => acc + curr);
let squareOfArray = a
  .map((element) => Math.pow(element, 2))
  .reduce((acc, curr) => acc + curr);

let diffOfSum = Math.abs(sum - sumOfArray); // missing - duplicate
let diffOfSquare = Math.abs(sumOfSquare - squareOfArray); // missing^2 + duplicate^2
let divide = diffOfSquare / diffOfSum; // missing + duplicate

const duplicate = (divide + diffOfSum) / 2;
const missing = Math.abs(diffOfSum - duplicate);

console.log({
  missing,
  duplicate,
  sum,
  sumOfSquare,
  divide,
  diffOfSum,
  diffOfSquare,
});
