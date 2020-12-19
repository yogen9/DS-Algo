// https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/

const Node = require("./tree_node");

const isIdenticle = (root, root2) => {
  if (!root && !root2) {
    return true;
  }
  if (root && root2) {
    return (
      root.data == root2.data &&
      isIdenticle(root.left, root2.left) &&
      isIdenticle(root.right, root2.right)
    );
  }
  return false;
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

const tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);
tree2.left.left = new Node(4);
tree2.left.right = new Node(5);

console.log(isIdenticle(tree, tree2));
