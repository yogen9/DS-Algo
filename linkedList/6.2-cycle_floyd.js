// Floyd’s Cycle-Finding Algorithm: fast slow pointers

const LNode = require("./linklist_node");

let ll2 = new LNode(1);
ll2.next = new LNode(2);
ll2.next.next = new LNode(3);
ll2.next.next.next = new LNode(4);
// ll2.next.next.next.next = ll2.next.next;

const isCycleFloyed = (ll) => {
  let fastPointer = ll;
  let slowPointer = ll;

  while (fastPointer && slowPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer == slowPointer) {
      return true;
    }
  }
  return false;
};

console.log(isCycleFloyed(ll2));

// TC : O(N)
// SC : O(1)
