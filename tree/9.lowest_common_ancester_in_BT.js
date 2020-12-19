// https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/

const Node = require("./tree_node");

// consiering first is low ans second is high
const lowestCommonAncester = (root, first, second) => {
  let pathFirst = [];
  let pathSecond = [];
  if (!isPath(root, first, pathFirst) || !isPath(root, second, pathSecond)) {
    return -1;
  }
  console.log({ pathFirst, pathSecond });
  for (let i = 0; i < pathFirst.length && i < pathSecond.length; i++) {
    if (pathFirst[i] != pathSecond[i]) {
      return pathFirst[i - 1];
    }
  }
  return pathFirst[pathFirst.length - 1];
};

// path finding algo // backtraking
const isPath = (root, key, queue = []) => {
  if (root) {
    queue.push(root.data);
    if (root.data == key) {
      return true;
    }
    if (root.left && isPath(root.left, key, queue)) {
      return true;
    }
    if (root.right && isPath(root.right, key, queue)) {
      return true;
    }
    queue.pop();
    return false;
  } else {
    return false;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

console.log(lowestCommonAncester(tree, 4, 5));
console.log(lowestCommonAncester(tree, 3, 4));
console.log(lowestCommonAncester(tree, 3, 6));
console.log(lowestCommonAncester(tree, 2, 4));
