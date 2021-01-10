let MyLinkedList = require("../structure_library/linkedList.js");

let linkedList = MyLinkedList;

// 0 -> 2 -> 4 -> 6 -> 8 -> 10
for (let i = 0; i < 6; i++) {
  linkedList.addAtTail(i * 2);
}

linkedList.printList();
let kthNode;
// function will start counting from 0 once it hits the null
// value in the linked list. Once it hits k, it will print the node.
printKthToLast = (head, k) => {
  if (head == null) {
    return 0;
  }
  let index = printKthToLast(head.next, k) + 1;
  if (index == k) {
    kthNode = head;
  }
  return index;
};

printKthToLast(linkedList.head, 3);
console.log("kth node: ", kthNode);
