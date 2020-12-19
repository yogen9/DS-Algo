// https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
// https://www.youtube.com/watch?v=TKvbwPIOGCM

const Node = require("./tree_node");

let previousNode = null;
const checkBST2 = (root) => {
  if (root) {
    if (!checkBST2(root.left)) {
      return false;
    }
    if (previousNode && previousNode.data >= root.data) {
      return false;
    }
    previousNode = root;
    return checkBST2(root.right);
  } else {
    return true;
  }
};

const tree = new Node(3);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(1);
tree.left.right = new Node(4);

console.log(checkBST2(tree));
