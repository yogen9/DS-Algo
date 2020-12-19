// https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/

const Node = require("./tree_node");

let max = 1;
const maxHeight = (root, height) => {
  if (root) {
    if (max < height) {
      max = height;
    }
    maxHeight(root.left, height + 1);
    maxHeight(root.right, height + 1);
  }
};

// GFG Method
const maxDepth = (root) => {
  if (root) {
    /* compute the depth of each subtree */
    let lDepth = maxDepth(root.left);
    let rDepth = maxDepth(root.right);

    /* use the larger one */
    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  } else {
    return 0;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(3);
tree.left.left.left = new Node(4);
tree.left.left.left.left = new Node(5);
tree.left.left.left.left.left = new Node(6);
tree.left.left.left.left.right = new Node(6);
tree.left.left.left.left.right.right = new Node(7);

maxHeight(tree, max);
console.log(maxDepth(tree));
console.log(max);
