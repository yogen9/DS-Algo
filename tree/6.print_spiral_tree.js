// https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/
// https://www.techiedelight.com/spiral-order-traversal-binary-tree/

const Node = require("./tree_node");

const queue = [];
const printSpriral = (root) => {
  if (root) {
    while (queue.length != 0) {
      let firstInQueue = queue.shift();
      console.log(firstInQueue.data);
      if (firstInQueue.left) {
        queue.push(firstInQueue.left);
      }
      if (firstInQueue.right) {
        queue.push(firstInQueue.right);
      }
    }
  } else {
    return;
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right = new Node(3);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

queue.push(tree);
printSpriral(tree);
