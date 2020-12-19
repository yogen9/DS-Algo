var a = [1, 3, 2, 4];

export const nearestSmallerRight = (a) => {
  let stack = [];
  let ans = [];
  for (var i = a.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] < a[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] > a[i]) {
      while (stack.length != 0 && stack[stack.length - 1] > a[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(a[i]);
  }
  return ans.reverse();
};

console.log(nearestSmallerRight(a));
