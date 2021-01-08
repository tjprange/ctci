/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.size = 0;
  this.head = 0;
  this.capacity = k;
};

/**
 * @param {number} value
 * @return {boolean}
 Inserts an element into the circular queue. Return true if the 
 operation is successful.
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    console.log("false");
    return false;
  }
  index = this.head + this.size; // next available index
  if (index >= this.capacity) {
    index -= this.capacity;
  }
  this.queue[index] = value;
  this.size++;
  return true;
};

/**
 * @return {boolean}
 Deletes an element from the circular queue. Return true if 
 the operation is successful.
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.head++;
  if (this.head >= this.capacity) {
    this.head = 0;
  }

  this.size--;
  return true;
};

/**
 * @return {number}
 Gets the front item from the queue. If the queue is empty, return -1.
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.head];
};

/**
 * @return {number}
 Gets the last item from the queue. If the queue is empty, return -1.
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  index = this.head + this.size - 1; //location of last index
  if (index >= this.capacity) {
    index -= this.capacity;
  }
  return this.queue[index];
};

/**
 * @return {boolean}
 Checks whether the circular queue is empty or not.
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.size <= 0) {
    // reset size
    this.size = 0;
    console.log("empty");
    return true;
  }
  return false;
};

/**
 * @return {boolean}
  Checks whether the circular queue is full or not.
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.size >= this.capacity) {
    console.log("full");
    return true;
  }
  return false;
};
