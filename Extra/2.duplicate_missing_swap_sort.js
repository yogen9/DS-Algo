// https://www.youtube.com/watch?v=FYCWlQ2SaTY&list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx&index=5
// https://www.youtube.com/watch?v=Eo6N15ezLEU&list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx&index=6
// https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/

const a = [2, 3, 1, 8, 2, 3, 5, 1];
const n = a.length;

// swap sort
// for (let i = 0; i < a.length; i++) {
//   while (a[i] != a[a[i] - 1] && a[i] != i + 1) {
//     j = a[i] - 1;
//     let temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//   }
// }
let i = 0;
while (i < a.length) {
  if (a[i] != a[a[i] - 1]) {
    j = a[i] - 1;
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  } else {
    i++;
  }
}

let duplicates = [];
let missing = [];
for (let i = 0; i < a.length; i++) {
  if (i + 1 != a[i]) {
    duplicates.push(a[i]);
    missing.push(i + 1);
  }
}

console.log({ a, duplicates, missing });
