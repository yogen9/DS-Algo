// https://www.geeksforgeeks.org/merge-two-sorted-lists-place/
// not working
const LNode = require("./linklist_node");

let ll = new LNode(1);
ll.next = new LNode(3);
ll.next.next = new LNode(5);
ll.next.next.next = new LNode(8);
ll.next.next.next.next = new LNode(11);

let ll2 = new LNode(0);
ll2.next = new LNode(2);
ll2.next.next = new LNode(4);
ll2.next.next.next = new LNode(7);

const mergell = (head1, head2) => {
  [head1, head2] = head1.data < head2.data ? [head1, head2] : [head2, head1];
  let ans = head1;
  let previous;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      previous = head1;
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      previous.next = head2;
      let temp = head2.next;
      head2.next = head1;
      head2 = temp;
    }

    [head1, head2] =
      head1 && head2 && head1.data < head2.data
        ? [head1, head2]
        : [head2, head1];
    console.log({ head1, head2 });
  }
  console.log({ head1, head2 });
  if (!head1) {
    previous.next = head1;
  }
  return ans;
};

let ans = mergell(ll, ll2);

while (ans) {
  console.log(ans);
  ans = ans.next;
}
