const array = ["ijk", "kji", "abc", "cba"];

const firstLastMap = {};

array.forEach((str) => {
  if (firstLastMap[str[0]]) {
    firstLastMap[str[0]].push(str[str.length - 1]);
  } else {
    firstLastMap[str[0]] = [];
    firstLastMap[str[0]].push(str[str.length - 1]);
  }
});

let node = array[0][0];
while (firstLastMap[node]) {
  node = firstLastMap[node].pop();
}

let isCircle = true;
Object.keys(firstLastMap).forEach((key) => {
  if (firstLastMap[key].length > 0) {
    isCircle = false;
    return;
  }
});

console.log({ firstLastMap, isCircle });

// https://www.geeksforgeeks.org/given-array-strings-find-strings-can-chained-form-circle/
// If there is an eulerian circuit, then chain can be formed, otherwise not.
// Note that a directed graph has eulerian circuit only if in degree and out degree of every vertex is same,
// and all non-zero degree vertices form a single strongly connected component.
