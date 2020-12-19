// https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
// https://www.youtube.com/watch?v=TKvbwPIOGCM

const Node = require("./tree_node");

const checkBST = (root, min, max) => {
  if (root) {
    if (root.data < min || root.data > max) {
      return false;
    } else {
      return (
        checkBST(root.left, min, root.data - 1) && // allows only distinct data
        checkBST(root.right, root.data + 1, max)
      );
    }
  } else {
    return true;
  }
};

const tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(1);
tree.left.right = new Node(3);

console.log(checkBST(tree));
