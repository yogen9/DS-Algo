const a = "forxxorfxdofr";
const key = "fox";
// not correct solution
const countAnangram = (array, key) => {
  const map = new Map();
  for (let i = 0; i < key.length; i++) {
    if (map.has(key[i])) {
      map.set(key[i], map.get(key[i])++);
    } else {
      map.set(key[i], 1);
    }
  }
  let totalAnagram = 0;
  for (let i = key.length; i < a.length; i++) {
    if (isAnagram(array, i, key.length, new Map(map))) {
      totalAnagram++;
    }
  }
  return totalAnagram;
};

const isAnagram = (array, index, keyLength, map) => {
  for (let j = 0; j < keyLength; j++) {
    if (map.has(array[index - j])) {
      map.set(array[index - j], map.get(array[index - j]) - 1);
      if (map.has(array[index - j]) && map.get(array[index - j]) <= 0) {
        map.delete(array[index - j]);
      }
    }
  }
  return map.size == 0;
};

console.log(countAnangram(a, key));
