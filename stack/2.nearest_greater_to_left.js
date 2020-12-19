var a = [1, 3, 2, 4];
var stack = [];
var ans = [];
for (var i = 0; i < a.length; i++) {
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
console.log({ ans: ans, stack: stack });
