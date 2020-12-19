// https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/

const Node = require("./tree_node");

const map = {};
const bottomView = (root, horizontalDistance, height) => {
  if (root) {
    if (map[horizontalDistance]) {
      // this is for right side of tree
      if (map[horizontalDistance].height > height) {
        map[horizontalDistance] = { data: root.data, height };
      }
    } else {
      map[horizontalDistance] = { data: root.data, height };
    }
    bottomView(root.left, horizontalDistance - 1, height + 1);
    bottomView(root.right, horizontalDistance + 1, height + 1);
  } else {
    return;
  }
};

// const tree = new Node(20);
// tree.left = new Node(8);
// tree.right = new Node(22);
// tree.left.left = new Node(5);
// tree.left.right = new Node(3);
// tree.left.right.left = new Node(10);
// tree.left.right.right = new Node(14);
// tree.right.right = new Node(25);

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right = new Node(3);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

bottomView(tree, 0, 1);
console.log(map);
