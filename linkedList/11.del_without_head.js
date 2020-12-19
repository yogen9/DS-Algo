// https://www.geeksforgeeks.org/delete-a-node-from-linked-list-without-head-pointer/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(2);
ll.next.next = new LNode(3);
ll.next.next.next = new LNode(4);
ll.next.next.next.next = new LNode(5);
ll.next.next.next.next.next = new LNode(6);
ll.next.next.next.next.next.next = new LNode(7);

const delNode = (node) => {
  if (node.next) {
    let previousNode = node;
    node.data = node.next.data;
    node = node.next;
    previousNode.next = node.next;
  } else {
    console.log("Not Possible");
    return;
  }
};

delNode(ll.next.next.next);

while (ll) {
  console.log(ll);
  ll = ll.next;
}
