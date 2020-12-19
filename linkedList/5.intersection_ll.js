// https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(2);
ll.next.next = new LNode(3);
ll.next.next.next = new LNode(4);
ll.next.next.next.next = new LNode(5);
ll.next.next.next.next.next = new LNode(6);

let ll2 = new LNode(10);
ll2.next = new LNode(20);
ll2.next.next = new LNode(30);
ll2.next.next.next = ll.next.next.next.next;

const getIntersectionNode = (longLL, smallLL, diff) => {
  while (diff == 1) {
    longLL = longLL.next;
    diff = diff - 1;
  }

  while (longLL != smallLL && smallLL) {
    longLL = longLL.next;
    smallLL = smallLL.next;
  }
  return smallLL;
};

const getLength = (head) => {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
};

let l1Length = getLength(ll);
let l2Length = getLength(ll2);

let diff = Math.abs(l1Length - l2Length);

if (l1Length > l2Length) {
  console.log(getIntersectionNode(ll, ll2, diff));
} else {
  console.log(getIntersectionNode(ll2, ll, diff));
}
