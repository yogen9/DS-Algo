// https://www.youtube.com/watch?v=SZqAQLjDsag&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=14
// https://www.geeksforgeeks.org/cutting-a-rod-dp-13/

const length_of_rod = [1, 2, 3, 4, 5, 6, 7, 8];
const price = [1, 5, 8, 9, 10, 17, 17, 20];
const rod_length = 8;

let matrix = [...Array(rod_length + 1)].map(() =>
  [...Array(rod_length + 1)].map(() => -1)
);

const solve = (length_of_rod, price) => {
  for (let i = 0; i < length_of_rod.length + 1; i++) {
    for (let j = 0; j < rod_length + 1; j++) {
      if (i == 0 || j == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < length_of_rod.length + 1; i++) {
    for (let j = 1; j < rod_length + 1; j++) {
      if (j >= length_of_rod[i - 1]) {
        matrix[i][j] = Math.max(
          price[j] + matrix[i][j - length_of_rod[i - 1]],
          matrix[i - 1][j]
        );
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }
};

solve(length_of_rod, price);
console.log(matrix);
