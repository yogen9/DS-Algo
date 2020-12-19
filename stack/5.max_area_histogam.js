// https://www.youtube.com/watch?v=J2X70jj_I1o&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=7
// https://www.geeksforgeeks.org/largest-rectangle-under-histogram/

const nearedSmallerToLeft = (array) => {
  let leftMinStack = [];
  let leftMin = [];
  for (var i = 0; i < array.length; i++) {
    if (leftMinStack.length == 0) {
      leftMin.push(-1);
    } else if (array[leftMinStack[leftMinStack.length - 1]] < array[i]) {
      leftMin.push(leftMinStack[leftMinStack.length - 1]);
    } else if (array[leftMinStack[leftMinStack.length - 1]] >= array[i]) {
      while (
        leftMinStack.length != 0 &&
        array[leftMinStack[leftMinStack.length - 1]] >= array[i]
      ) {
        leftMinStack.pop();
      }
      if (leftMinStack.length == 0) {
        leftMin.push(-1);
      } else {
        leftMin.push(leftMinStack[leftMinStack.length - 1]);
      }
    }
    leftMinStack.push(i);
  }
  return leftMin;
};

const nearedSmallerToRight = (array) => {
  let rightMinStack = [];
  let rightMin = [];
  for (var i = array.length - 1; i >= 0; i--) {
    if (rightMinStack.length == 0) {
      rightMin.push(array.length);
    } else if (array[rightMinStack[rightMinStack.length - 1]] < array[i]) {
      rightMin.push(rightMinStack[rightMinStack.length - 1]);
    } else if (array[rightMinStack[rightMinStack.length - 1]] >= array[i]) {
      while (
        rightMinStack.length != 0 &&
        array[rightMinStack[rightMinStack.length - 1]] >= array[i]
      ) {
        rightMinStack.pop();
      }
      if (rightMinStack.length == 0) {
        rightMin.push(array.length);
      } else {
        rightMin.push(rightMinStack[rightMinStack.length - 1]);
      }
    }
    rightMinStack.push(i);
  }
  return rightMin.reverse();
};

module.exports = MAH = (array) => {
  var smallerLeft = nearedSmallerToLeft(array);
  var smallerRight = nearedSmallerToRight(array);
  var width = [];
  var area = [];
  for (let i = 0; i < array.length; i++) {
    width.push(smallerRight[i] - smallerLeft[i] - 1);
    area.push(width[i] * array[i]);
  }
  return Math.max(...area);
};

var a = [6, 2, 5, 4, 5, 1, 6];
// console.log(MAH(a));
