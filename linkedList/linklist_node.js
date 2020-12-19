module.exports = class LNode {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};
