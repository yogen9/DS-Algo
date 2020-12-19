const a = "abcabcbb";

const longestSubstring = (array) => {
  let map = {};
  map[array[0]] = true;
  let max = 0;
  let j = 0;
  let i = 1;
  while (j < array.length) {
    if (!map[array[i]]) {
      map[array[i]] = true;
      j++;
      max = Math.max(
        Object.keys(map).reduce((acc, curr) => {
          if (map[curr]) {
            acc = acc + 1;
          }
          return acc;
        }, 0)
      );
    } else {
      map[array[i]] = false;
      i++;
    }
  }
  return max;
};

console.log(longestSubstring(a));
