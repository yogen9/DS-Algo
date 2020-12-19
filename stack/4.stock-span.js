// https://www.youtube.com/watch?v=p9T-fE1g1pU&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=6
// https://www.geeksforgeeks.org/the-stock-span-problem/

var a = [100, 80, 60, 70, 60, 75, 85];
var stack = [];
var ans = [];
for (var i = 0; i < a.length; i++) {
  if (stack.length == 0) {
    ans.push(0);
  } else if (a[stack[stack.length - 1]] > a[i]) {
    ans.push(0);
  } else if (a[stack[stack.length - 1]] < a[i]) {
    while (stack.length != 0 && a[stack[stack.length - 1]] < a[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(0);
    } else {
      ans.push(i - stack[stack.length - 1] - 1);
    }
  }
  stack.push(i);
}
console.log({ ans: ans, stack: stack });
