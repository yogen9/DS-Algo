// https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/

const Node = require("./tree_node");

// consiering first is low and second is high
const lowestCommonAncester = (root, first, second) => {
  if (root) {
    while (root) {
      if (first == root.data || root.data == second) {
        return root.data;
      }
      if (first < root.data && root.data < second) {
        return root.data;
      }
      if (first < root.data && second < root.data) {
        root = root.left;
      }
      if (root.data < first && root.data < second) {
        root = root.right;
      }
    }
  } else {
    return -1;
  }
};

const tree = new Node(20);
tree.left = new Node(8);
tree.right = new Node(22);
tree.left.left = new Node(4);
tree.left.right = new Node(12);
tree.left.right.left = new Node(10);
tree.left.right.right = new Node(14);

console.log(lowestCommonAncester(tree, 10, 14));
console.log(lowestCommonAncester(tree, 14, 8));
console.log(lowestCommonAncester(tree, 10, 22));
