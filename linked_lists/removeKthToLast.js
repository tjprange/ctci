let MyLinkedList = require("../structure_library/linkedList");
let linkedList = MyLinkedList;

var Node = function (val) {
  this.val = val;
  this.next = null;
};

// 0 -> 1 -> 2 -> 3 -> 4 -> 5
for (let i = 0; i < 6; i++) {
  linkedList.addAtTail(i);
}

// removes the kth to last node from LL
function removeKthToLast(head, k) {
  // dummy for the case we are removing first node
  let dummy = new Node(0);
  dummy.next = head;
  let first = dummy; // node after node to be removed
  let second = dummy; // node before node to be removed

  // move first to the node after the node to be removed
  for (var i = 1; i <= k + 1; i++) {
    first = first.next;
  }

  // keep moving
  while (first) {
    first = first.next;
    second = second.next;
  }

  // move slow pointer's next to the removed node's next
  second.next = second.next.next;
  return dummy.next; // in event first node
}

linkedList.head = removeKthToLast(linkedList.head, 1);
linkedList.printList();
