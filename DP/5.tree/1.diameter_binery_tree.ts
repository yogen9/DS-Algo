// https://www.geeksforgeeks.org/diameter-of-a-binary-tree-in-on-a-new-method/
// https://www.youtube.com/watch?v=zmPj_Ee3B8c&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=48

import { BST, Node } from "./BST";

const tree = new BST();
tree.add(13);
tree.add(3);
tree.add(37);
tree.add(2);
tree.add(1);
console.log(tree.toString());

let ans = Number.MIN_VALUE;
const diameter = (tree: Node): number => {
  if (!tree) {
    return 0;
  }
  let left_height = diameter(tree.left);
  let right_height = diameter(tree.right);
  ans = Math.max(ans, 1 + left_height + right_height);
  return 1 + Math.max(left_height, right_height);
};

console.log(diameter(tree.root));
