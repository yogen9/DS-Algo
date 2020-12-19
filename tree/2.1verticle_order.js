// https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/

const Node = require("./tree_node");

const map = {};
const bottomView = (root, horizontalDistance, height) => {
  if (root) {
    if (map[horizontalDistance]) {
      // this is for right side of tree
      map[horizontalDistance].push(root.data);
    } else {
      map[horizontalDistance] = [];
      map[horizontalDistance].push(root.data);
    }
    bottomView(root.left, horizontalDistance - 1, height + 1);
    bottomView(root.right, horizontalDistance + 1, height + 1);
  } else {
    return;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.left.right = new Node(8);
tree.right.right = new Node(7);
tree.right.right.right = new Node(9);

bottomView(tree, 0, 1);
console.log(map);
