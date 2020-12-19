// https://www.youtube.com/watch?v=FbGG2qpNp4U&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=9
// https://www.geeksforgeeks.org/trapping-rain-water/

const a = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const rainWaterTrapping = (array) => {
  let mxr = new Array(array.length).fill(0);
  let mxl = [];
  let water = [];
  let ans = 0;
  mxl.push(array[0]);
  mxr[array.length - 1] = array[array.length - 1];
  for (let i = 1; i < array.length; i++) {
    mxl.push(mxl[i - 1] > array[i] ? mxl[i - 1] : array[i]);
  }
  console.log(mxl);
  for (let i = array.length - 2; i >= 0; i--) {
    mxr[i] = mxr[i + 1] > array[i] ? mxr[i + 1] : array[i];
  }
  console.log(mxr);
  for (let i = 0; i < array.length; i++) {
    water.push(Math.min(mxr[i], mxl[i]) - array[i]);
  }
  console.log(water);
  for (let i = 0; i < array.length; i++) {
    ans += water[i];
  }
  return ans;
};

console.log(rainWaterTrapping(a));
