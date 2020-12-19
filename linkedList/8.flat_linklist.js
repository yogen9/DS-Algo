// https://www.geeksforgeeks.org/flattening-a-linked-list/

// not working

const Node = require("../tree/tree_node");

let ll = new Node(5);
ll.right = new Node(10);
ll.right.right = new Node(19);
ll.right.right.right = new Node(28);

ll.left = new Node(7);
ll.left.left = new Node(8);
ll.left.left.left = new Node(30);

ll.right.left = new Node(20);

ll.right.right.left = new Node(22);
ll.right.right.left.left = new Node(50);

ll.right.right.right.left = new Node(35);
ll.right.right.right.left.left = new Node(40);
ll.right.right.right.left.left.left = new Node(45);

const mergell = (firstll, secondll) => {
  let head = firstll;
  let firstPrevios = firstll;
  let secondPrevious = secondll;
  firstll = firstll.left;
  secondll = secondll.left;

  while (firstll && secondll) {
    secondPrevious = secondll;
    if (firstll.data < secondll.data) {
      firstPrevios = firstll;
      firstll = firstll.left;
    } else if (firstll.data > secondll.data) {
      firstPrevios.left = secondll;
      let templl = secondll.left;
      secondll.left = firstll;
      secondll = templl;
      firstPrevios = firstll;
    }
  }
  firstll.next = secondll;
  return head;
};
const printll = (ll) => {
  console.log(ll);
  ll = ll.right;
};

const flatLL = (ll) => {
  while (ll && ll.right) {
    let templl = mergell(ll, ll.right);
    let temp = templl;
    printll(temp);
    ll = templl;
  }
};

flatLL(ll);
