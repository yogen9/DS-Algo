// https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/

const Node = require("./tree_node");

let sum = 0;
const maxPathSum = (root) => {
  if (root) {
    /* compute the depth of each subtree */
    let leftSum = maxPathSum(root.left);
    let rightSum = maxPathSum(root.right);

    // this is to set max (this is like current node is ans node)
    sum = Math.max(sum, leftSum + rightSum + root.data);

    // this is for line 7 and 8 in upper node
    return root.data + Math.max(leftSum, rightSum);
  } else {
    return 0;
  }
};

const tree = new Node(-15);
tree.left = new Node(5);
tree.right = new Node(6);
tree.left.left = new Node(-8);
tree.left.right = new Node(1);
tree.left.left.left = new Node(2);
tree.left.left.right = new Node(6);
tree.right.left = new Node(3);
tree.right.right = new Node(9);
tree.right.right.right = new Node(0);
tree.right.right.right.left = new Node(4);
tree.right.right.right.right = new Node(-1);
tree.right.right.right.right.left = new Node(10);

maxPathSum(tree);
console.log(sum);
