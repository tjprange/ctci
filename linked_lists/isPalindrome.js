// Implement a function to check if a linked list is a palindrome

let linkedList = require('../structure_library/linkedList');

linkedList.addAtTail(0);
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(2);
linkedList.addAtTail(1);
linkedList.addAtTail(0);

// helper function to reverse the second half of the linked list
const reverseList = (head) => {
  let current = head;
  let prev = null;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

// This version reverses the second half and compares the values of each half
const isPalindromeTwoLists = (head) => {
  // empty list or single node is palindrome
  if (head === null || head.next === null) {
    return true;
  }
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  secondListReversed = reverseList(slow);
  let second = secondListReversed;
  let first = head;
  while (first && second) {
    if (first.val != second.val) {
      console.log('false');
      return false;
    }
    first = first.next;
    second = second.next;
  }
  console.log('true');
  return true;
};

// this variant uses a stack
const isPalindrome = (head) => {
  // empty list or single node is palindrome
  if (head === null || head.next === null) {
    return true;
  }
  let fast = head;
  let slow = head;

  // stack
  let nodeStack = [];
  // find middle node
  while (fast != null && fast.next != null) {
    nodeStack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  let index = nodeStack.length - 1;

  // if list is odd, we move slow one more unit
  if (fast != null) {
    slow = slow.next;
  }
  // compare values
  while (slow) {
    if (nodeStack[index] != slow.val) {
      console.log('false');
      return false;
    }
    slow = slow.next;
    index--;
  }
  console.log('true');
  return true;
};

// can also solve this problem by cloning the list,
// reversing it and comparing each node's value

isPalindrome(linkedList.head);
