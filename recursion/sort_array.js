var array = [5, 3, 56, 64, 3, 4];
var sort = function (array, n) {
  if (n == 1) {
    return;
  }
  sort(array, n - 1);
  var [lastNum] = array.splice(n - 1, 1);
  for (var i = 0; i < n - 1; i++) {
    if (lastNum <= array[i]) {
      array.splice(i, 0, lastNum);
      return;
    }
  }
  array.splice(n - 1, 0, lastNum);
};
sort(array, array.length);
console.log(array);
