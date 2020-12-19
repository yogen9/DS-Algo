// https://www.youtube.com/watch?v=XC4EotTewro&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9&index=8
// https://www.geeksforgeeks.org/find-the-k-closest-points-to-origin-using-priority-queue/

const points = [
  [1, 0],
  [2, 1],
  [3, 6],
  [-5, 2],
  [1, -4],
];
const K = 3;

const b = points.map((point) => {
  return {
    point,
    distance: Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)),
  };
});

console.log(b);

b.sort((a, b) => a.distance - b.distance);

console.log(b);
