// https://www.youtube.com/watch?v=NXOOYYwpbg4&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=2
// https://www.geeksforgeeks.org/next-greater-element/

var a = [1, 3, 2, 4];
var stack = [];
var ans = [];
for (var i = a.length - 1; i >= 0; i--) {
  if (stack.length == 0) {
    ans.push(-1);
  } else if (stack[stack.length - 1] > a[i]) {
    ans.push(stack[stack.length - 1]);
  } else if (stack[stack.length - 1] < a[i]) {
    while (stack.length != 0 && stack[stack.length - 1] < a[i]) {
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
ans.reverse();
console.log({ ans: ans, stack: stack });
