// https://www.geeksforgeeks.org/reverse-a-linked-list/

const LNode = require("./linklist_node");

let ll = new LNode(1);
let llHead = ll;

for (let i = 2; i <= 10; i++) {
  const temp = new LNode(i);
  ll.next = temp;
  ll = temp;
}

// reversing
let previousNode;
let nextNode;

while (llHead) {
  nextNode = llHead.next;
  llHead.next = previousNode;
  previousNode = llHead;
  llHead = nextNode;
}

// reverse node print
while (previousNode) {
  console.log(previousNode);
  previousNode = previousNode.next;
}
