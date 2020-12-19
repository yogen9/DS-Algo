// https://www.geeksforgeeks.org/rotate-a-linked-list/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(2);
ll.next.next = new LNode(3);
ll.next.next.next = new LNode(4);
ll.next.next.next.next = new LNode(5);
ll.next.next.next.next.next = new LNode(6);

// rotate
const rotate = (k) => {
  let i = 1;
  let KthNode;
  let llOldHead = ll;
  let lastNode;
  while (ll) {
    if (i == k) {
      KthNode = ll;
    }
    lastNode = ll;
    ll = ll.next;
    i++;
  }
  ll = KthNode.next;
  KthNode.next = null;
  lastNode.next = llOldHead;
};

rotate(4);

while (ll) {
  console.log({ ll });
  ll = ll.next;
}
