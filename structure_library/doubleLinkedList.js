/**
 * Node definition.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Initialize data structure here.
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    current = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return current.val;
      }
      current = current.next;
    }
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const newNode = new Node(val);
    // case: empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add node at tail
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
    return;
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const newNode = new Node(val);
    // case empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add node at tail
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return;
  }

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    // invalid index
    if (index < 0 || index > this.size - 1) {
      return;
    }

    let current = this.head;
    for (var i = 0; i < index; i++) {
      current = current.next;
    }
    // one node in LL
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    // first node
    if (i === 0) {
      current.next.prev = null;
      this.head = current.next;
      this.size--;
      return;
    }

    // last node
    if (i === this.size - 1) {
      current.prev.next = current.next;
      this.tail = current.prev;
      this.size--;
      return;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      console.log("-1");
      return;
    }
    const newNode = new Node(val);
    // add at front
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    // add at tail
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let current = this.head;
    for (var i = 0; i < index; i++) {
      current = current.next;
    }

    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;
  }

  // prints linked list head -> tail
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // prints linked list tail -> head
  printListReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.val);
      current = current.prev;
    }
  }
}

var doubleLinkedList = new LinkedList();

module.exports = doubleLinkedList;
