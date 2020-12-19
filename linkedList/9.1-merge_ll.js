// https://www.youtube.com/watch?v=Xb4slcp1U38&t=895s
// https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(3);
ll.next.next = new LNode(5);
ll.next.next.next = new LNode(6);
ll.next.next.next.next = new LNode(8);
ll.next.next.next.next.next = new LNode(11);

let ll2 = new LNode(0);
ll2.next = new LNode(2);
ll2.next.next = new LNode(4);
ll2.next.next.next = new LNode(7);
ll2.next.next.next.next = new LNode(12);
ll2.next.next.next.next.next = new LNode(13);
ll2.next.next.next.next.next.next = new LNode(14);

const mergell = (head1, head2) => {
  let head = new LNode(-1);
  let pointerToAdd = head;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      pointerToAdd.next = head1;
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      pointerToAdd.next = head2;
      head2 = head2.next;
    }
    pointerToAdd = pointerToAdd.next;
  }
  if (!head1) {
    pointerToAdd.next = head2;
  } else if (!head2) {
    pointerToAdd.next = head1;
  }
  return head;
};

let merged = mergell(ll, ll2);

while (merged) {
  console.log(merged);
  merged = merged.next;
}
