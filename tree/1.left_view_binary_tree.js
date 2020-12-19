// www.geeksforgeeks.org/print-left-view-binary-tree/

const Node = require("./tree_node");

const treeRoot = new Node(12);
treeRoot.left = new Node(10);
treeRoot.right = new Node(20);
treeRoot.right.left = new Node(25);
treeRoot.right.right = new Node(40);

const leftView = (root, currentHeight) => {
  if (root) {
    if (currentHeight > maxHeight) {
      console.log(root.data);
      maxHeight = currentHeight;
    }
    leftView(root.left, currentHeight + 1);
    leftView(root.right, currentHeight + 1);
  } else {
    return;
  }
};

console.log(treeRoot);
let maxHeight = 0; // this should pass as reference
leftView(treeRoot, 1, maxHeight);
