const Node = require("./tree_node");

let sum = 0;
const maxPathSum = (root) => {
  if (root) {
    /* compute the depth of each subtree */
    let leftSum = maxPathSum(root.left);
    let rightSum = maxPathSum(root.right);

    let max_single = Math.max(
      Math.max(leftSum, rightSum) + root.data,
      root.data
    );

    // this is to set max (this is like current node is ans node)
    let max_top = Math.max(
      sum,
      Math.max(leftSum + rightSum + root.data, max_single)
    );
    sum = Math.max(sum, max_top);

    // this is for line 7 and 8 in upper node
    return max_single;
  } else {
    return 0;
  }
};

const tree = new Node(10);
tree.left = new Node(2);
tree.right = new Node(10);
tree.left.left = new Node(20);
tree.left.right = new Node(1);
tree.right.right = new Node(-25);
tree.right.right.left = new Node(3);
tree.right.right.right = new Node(4);

maxPathSum(tree);
console.log(sum);
