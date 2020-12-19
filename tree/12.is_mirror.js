// https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/

const Node = require("./tree_node");

const isMirror = (root, root2) => {
  if (!root && !root2) {
    return true;
  }

  // For two trees to be mirror images, the following three
  // conditions must be true
  // 1 - Their root node's key must be same
  // 2 - left subtree of left tree and right subtree
  //      of right tree have to be mirror images
  // 3 - right subtree of left tree and left subtree
  //      of right tree have to be mirror images
  if (root && root2) {
    return (
      root.data == root2.data &&
      isMirror(root.left, root2.right) &&
      isMirror(root.right, root2.left)
    );
  }
  return false;
};

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(3);
tree.right = new Node(2);
tree.right.right = new Node(3);

console.log(isMirror(tree, tree));
