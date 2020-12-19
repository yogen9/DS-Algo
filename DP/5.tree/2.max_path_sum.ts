// https://www.youtube.com/watch?v=Osz-Vwer6rw&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=49
// https://leetcode.com/problems/binary-tree-maximum-path-sum/ 

import { Node } from "./BST";
// leaf any node to any node
const tree = new Node(-10);
tree.left = new Node(9);
tree.right = new Node(20);
tree.right.right = new Node(7);
tree.right.left = new Node(15);
console.log(tree);

let ans = Number.MIN_VALUE;
const max_path = (tree: Node): number => {
  if (!tree) {
    return 0;
  }
  let left_height = max_path(tree.left);
  let right_height = max_path(tree.right);

  let temp_included_node = Math.max(
    Math.max(left_height, right_height) + tree.data,
    tree.data
  );
  let temp = Math.max(
    temp_included_node,
    left_height + right_height + tree.data
  );
  ans = Math.max(ans, temp);
  return temp;
};

console.log(max_path(tree));
