// https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(2);
ll.next.next = new LNode(3);
ll.next.next.next = new LNode(4);
ll.next.next.next.next = ll.next.next;

const isCycle = (ll) => {
  const map = {};
  while (ll) {
    if (map[ll.data]) {
      return true;
    } else {
      map[ll.data] = true;
    }
    ll = ll.next;
  }
  return false;
};

console.log(isCycle(ll));

// TC: O(N)
// SC: O(N)
