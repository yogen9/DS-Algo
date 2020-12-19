// https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/
  
const Node = require("./tree_node");

const isBalanced = (root) => {
  if (root) {
    /* compute the depth of each subtree */
    let leftHeight = isBalanced(root.left);
    if (leftHeight == -1) {
      return -1;
    }
    let rightHeight = isBalanced(root.right);
    if (rightHeight == -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  } else {
    return 0;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.right.right = new Node(3);
tree.right.left = new Node(3);

console.log(isBalanced(tree) != -1);
