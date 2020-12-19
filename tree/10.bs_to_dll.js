// www.techiedelight.com/print-bottom-view-of-binary-tree/
// https://www.geeksforgeeks.org/bottom-view-binary-tree/

// not working
const Node = require("./tree_node");

class DLL {
  data;
  previous;
  next;
  constructor(data, previous = null, next = null) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

const bsToDll = (root, lastNode) => {
  if (root) {
    if (root.left) {
      bsToDll(root.left, lastNode);
    }
    console.log(root.data);
    // push it into link list
    if (root.right) {
      bsToDll(root.right, lastNode);
    }
  } else {
    return;
  }
};

const tree = new Node(10);
tree.left = new Node(12);
tree.right = new Node(15);
tree.left.left = new Node(25);
tree.left.right = new Node(30);
tree.right.left = new Node(36);

let dll = new DLL(0);
bsToDll(tree, dll);
