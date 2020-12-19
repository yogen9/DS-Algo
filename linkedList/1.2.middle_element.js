// https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

const LNode = require("./linklist_node");

// let ll = new LNode(1);
// let count = 1;
// let mid = ll;
// for (let i = 2; i < 10; i++) {
//   const temp = new LNode(i);
//   ll.next = temp;
//   ll = temp;
//   count++;
//   if (count % 2 == 1) mid = mid.next;
// }

// console.log(mid);

// ==================================================================

let ll = new LNode(1);
let llHead = ll;
let llHead1 = ll;

for (let i = 2; i <= 10; i++) {
  const temp = new LNode(i);
  ll.next = temp;
  ll = temp;
}

let len = 0;
while (llHead) {
  len++;
  llHead = llHead.next;
}
let middle = len % 2 == 1 ? len / 2 + 1 : len / 2;

for (let i = 1; i < middle; i++) {
  llHead1 = llHead1.next;
}

console.log(llHead1);
