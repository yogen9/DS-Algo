// https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/
// https://www.youtube.com/watch?v=vy2mnT3TEXQ

class Node {
  data;
  left;
  right;
  next_right;
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const connectNode = (root) => {
  let parent = root;
  let child;
  let childHead;

  while (parent) {
    while (parent) {
      if (parent.left) {
        if (!childHead) {
          childHead = parent.left;
        } else {
          child.next_right = parent.left;
        }
        child = parent.left;
      }
      if (parent.right) {
        if (!childHead) {
          childHead = parent.right;
        } else {
          child.next_right = parent.right;
        }
        child = parent.right;
      }
      parent = parent.next_right;
    }
    parent = childHead;
    child = null;
    childHead = null;
  }
};

const connectUsingBFS = (root) => {
  const queue = [];
  let temp;
  queue.push(root);

  while (queue.length != 0) {
    let queueEntries = queue.length;
    // this for loop is to level by level traversing
    for (let i = 0; i < queueEntries; i++) {
      let previousNode = temp;
      temp = queue.shift();
      if (i > 0) {
        previousNode.next_right = temp;
      }
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    temp.next_right = null; // last element in queue for each level
  }
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.right.right = new Node(5);
tree.left.left.right = new Node(6);
tree.right.right.left = new Node(7);

connectUsingBFS(tree);
console.log(JSON.stringify(tree));
