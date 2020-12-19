// https://www.youtube.com/watch?v=dYfM6J1y0mU&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9&index=4
// https://www.geeksforgeeks.org/nearly-sorted-algorithm/

const a = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
const K = 4;
const X = 35;

const b = a.map((element) => {
  return {
    distance: Math.abs(X - element),
    original: element,
  };
});

b.sort((a, b) => a.distance - b.distance);

for (let i = 0; i < K; i++) {
  console.log(b[i].original);
}
