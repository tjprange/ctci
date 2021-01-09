var Node = function(val){
    this.val = val;
    this.next = null;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // invalid index, return -1
    if(index < 0 || index >= this.size) {
        return -1;
    } 
    // find index and return value
    let current = this.head;
    let i = 0;
    while(i <= index){
        if(i === index){
            return current.val;
        }
        current = current.next;
        i++;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // make new node
    const newNode = new Node(val);
    
    // make new node if none exist
    if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
    }
    else { // add in front of list
        newNode.next = this.head;
        this.head = newNode;
    }

    // increment size and return linked list
    this.size++;
    return this;    
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // create new node
    const newNode = new Node(val);

    // empty list, make new node
    if(this.head === null){
        this.head = newNode;
        this.tail = newNode;
    } else { // new node at end
        this.tail.next = newNode;
        this.tail = newNode;
    }
    //increment and return linked list
    this.size++;
    return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // invalid index, return
    if(index > this.size || index < 0){
        return;
    }
    // add at head
    if (index === 0){
        return this.addAtHead(val)
    }
    //add at tail
    if (index === this.size){
        return this.addAtTail(val);
    }

    const newNode = new Node(val);
    current = this.head;
    let i = 0;
    // navigate to the correct location
    while(i < index - 1){
            current = current.next;
            i++;
    }
    // attach new node
    newNode.next = current.next;
    current.next = newNode;    

    this.size++;
    return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // invalid index
    if(index < 0 || index >= this.size){
        return;
    }
    // move head to next
    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return this;
    }

    // find index and delete
    let i = 0;
    current = this.head
    while(i < index -1){   
        current = current.next;
        i++;
    }
    
    // set next node/null
    if (current.next.next !== null){
        current.next = current.next.next;
    } else {
        current.next = null;
    }
    // below statement acts the same as above
                    // if true           then this         // else this
    //current.next = current.next.next ? current.next.next : null;
    if(current.next === null) {
      this.tail = current;
    }

    this.size--;
    return this;
}

MyLinkedList.prototype.printList = function() {
    let current = this.head;
    while(current){
        console.log(current.val);
        current = current.next;
    }
}

MyLinkedList.prototype.reverse = function(){
    let current = this.head;
    let prev = null;
    let next = null;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}


function reverse(head){
    let current = head; 
    let prev = null; 
    let next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;            
    }

    current = prev;
    return current;
}
MyLinkedList.prototype.isPalindrome = function(){
    let slow = this.head;
    let fast = this.head;
    let tailPtrListOne = this.head;
    let headPtrListTwo;

    if(this.head.next === null) {
        console.log('true');
        return;
    }
    while(fast != null && fast.next != null){
        tailPtrListOne = slow; //tailPtrListOne points to last node of first sub list
        slow = slow.next
        fast = fast.next.next;
    }
    let first = this.head; // first node of the first linked list        
    headPtrListTwo = reverse(slow); // first node of the second linked list
    let second = headPtrListTwo;

    // if fast is null then even sized linked list
    if(fast === null){        
        while(first && second){
            if(first.val !== second.val){
                console.log('false');
                // return false
            }
            first = first.next;
            second = second.next;
        }
    } else { // odd sized list
        while(first.next && second){
            if(first.val !== second.val){
                console.log('false');
                //return false
            }
            first = first.next;
            second = second.next;
        }
    }

    headPtrListTwo = reverse(headPtrListTwo); // put second sub list back in order
    tailPtrListOne.next = headPtrListTwo;

    //return true;
}
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

linkedList = new MyLinkedList();
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
// linkedList.addAtTail(2);
// linkedList.addAtTail(1);

//linkedList.isPalindrome();

console.log('-----------------');
linkedList.printList();
