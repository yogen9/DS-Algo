// https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/

const LNode = require("./linklist_node");

let ll = new LNode(1);
let currentNode = ll;

for (let i = 2; i <= 10; i++) {
  const temp = new LNode(i);
  ll.next = temp;
  ll = temp;
}

const reverse = (k) => {
  let lastNode;
  let previousNode;
  let nextNode;
  let count = 1;
  while (currentNode && count <= k) {
    if (count == 1) {
      lastNode = currentNode;
    }
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    count++;
  }

  lastNode.next = currentNode;
  currentNode = previousNode;
};
reverse(4);

//  node print
while (currentNode) {
  console.log(currentNode);
  currentNode = currentNode.next;
}
