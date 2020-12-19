// https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/

const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(1);
ll.next.next = new LNode(2);
ll.next.next.next = new LNode(0);
ll.next.next.next.next = new LNode(2);
ll.next.next.next.next.next = new LNode(0);
ll.next.next.next.next.next.next = new LNode(1);

const getCount = (ll) => {
  let count = [0, 0, 0];
  while (ll) {
    count[ll.data]++;
    ll = ll.next;
  }
  return count;
};

const count = getCount(ll);
console.log(count);

getShortedLL = (ll, count) => {
  let i = 0;
  while (ll) {
    if (count[i] == 0) {
      i++;
    }
    ll.data = i;
    count[i] = count[i] - 1;
    ll = ll.next;
  }
};

getShortedLL(ll, count);
while (ll) {
  console.log(ll);
  ll = ll.next;
}
