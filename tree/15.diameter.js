// https://www2.cs.duke.edu/courses/spring00/cps100/assign/trees/diameter.html

const Node = require("./tree_node");

let maxDiameter = 0;
const diameter = (root) => {
  if (root) {
    /* compute the depth of each subtree */
    let left = diameter(root.left);
    let right = diameter(root.right);

    // this is to set max (this is like current node is ans node)
    maxDiameter = Math.max(maxDiameter, left + right + 1);

    // this is for line 7 and 8 in upper node
    return 1 + Math.max(left, right);
  } else {
    return 0;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

diameter(tree);
console.log(maxDiameter);
