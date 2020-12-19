module.exports = class Node {
  data;
  left;
  right;
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
};
