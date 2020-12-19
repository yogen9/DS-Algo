// https://www2.cs.duke.edu/courses/spring00/cps100/assign/trees/diameter.html
// https://www.geeksforgeeks.org/write-a-c-program-to-get-count-of-leaf-nodes-in-a-binary-tree/

const Node = require("./tree_node");

let leafNodes = 0;
const countLeafNodes = (root) => {
  if (root) {
    countLeafNodes(root.left);
    countLeafNodes(root.right);
    if (!root.left && !root.right) leafNodes++;
  } else {
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

countLeafNodes(tree);
console.log(leafNodes);
