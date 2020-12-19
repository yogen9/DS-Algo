export class Node {
  data;
  left;
  right;
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BST {
  root;
  constructor() {
    /**
     * Pointer to the root node in the tree
     */
    this.root = null;
  }

  /**
   * Adds some value to the tree
   * @param {number} data The value to add into the tree
   */
  add(data) {
    const node = new Node(data);
    /**
     * Check if there're nodes in the tree
     */
    if (this.root === null) {
      this.root = node;
    } else {
      /**
       * Recursively traverse
       * @param {Object} current Current node
       */
      const searchNode = function (current) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            return searchNode(current.left);
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            return searchNode(current.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(this.root);
    }
  }

  /**
   * Determines if a given value exists in the tree
   * @param {number} data The value to find
   */
  search(data) {}

  /**
   * Remove the value from the tree
   * @param {number} data The node to be removeed
   */
  remove(data) {}

  toString() {
    return JSON.stringify(this.root);
  }
}
