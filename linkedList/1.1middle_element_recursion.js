// https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

const LNode = require("./linklist_node");

let ll = new LNode(1);
let llHead = ll;
for (let i = 2; i <= 10; i++) {
  const temp = new LNode(i);
  ll.next = temp;
  ll = temp;
}

// start
let middleIndex = 0;
let midNode;
const llMiddle = (node) => {
  if (!node) {
    middleIndex = middleIndex % 2 == 1 ? middleIndex / 2 + 1 : middleIndex / 2;
    return;
  }
  middleIndex = middleIndex + 1;
  llMiddle(node.next);
  middleIndex = middleIndex - 1;
  if (middleIndex == 0) {
    midNode = node;
  }
};

llMiddle(llHead);
console.log({ midNode });
