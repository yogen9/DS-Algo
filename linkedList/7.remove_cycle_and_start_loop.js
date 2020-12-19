// https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/
// https://www.youtube.com/watch?v=-YiQZi3mLq0

const LNode = require("./linklist_node");

let ll2 = new LNode(1);
ll2.next = new LNode(2);
ll2.next.next = new LNode(3);
ll2.next.next.next = new LNode(4);
ll2.next.next.next.next = new LNode(5);
ll2.next.next.next.next.next = new LNode(6);
ll2.next.next.next.next.next.next = ll2.next.next;

const isCycleFloyed = (ll) => {
  let fastPointer = ll;
  let slowPointer = ll;

  while (fastPointer && slowPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer == slowPointer) {
      return { isCycle: true, node: slowPointer };
    }
  }
  return { isCycle: false, node: null };
};

const { node: commonNode, isCycle } = isCycleFloyed(ll2);

const startOfLoop = (commonNode, head) => {
  // one step in both pointer
  let endOfLoop;
  while (commonNode != head) {
    head = head.next;
    endOfLoop = commonNode;
    commonNode = commonNode.next;
  }
  return { commonNode, endOfLoop }; // commonNode is start of loop and endOfLoop is to remove loop
};

const { commonNode: startNodeOfLoop, endOfLoop } = startOfLoop(commonNode, ll2);
console.log({ startNodeOfLoop, endOfLoop });

endOfLoop.next = null; // removing of loop
while (ll2) {
  console.log(ll2);
  ll2 = ll2.next;
}
