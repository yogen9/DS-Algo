// https://www.youtube.com/watch?v=7VoJn544QrM&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9&index=6
// https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/

const a = [12, 16, 12, 30, 35, 30, 56, 12, 48, 50, 53, 50, 56];
const K = 3;

const b = a.reduce((acc, curr) => {
  acc[curr.toString()] = 0;
  return acc;
}, {});

for (let i = 0; i < a.length; i++) {
  b[a[i].toString()]++;
}

console.log(b);
