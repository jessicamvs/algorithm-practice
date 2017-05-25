'use strict';

const util = require('util');

function Node(val) {
  if(!val) return Error;
  this.val = val;
  this.next = null;
}

const SinglyLinkedList = module.exports = function() {
  this.head = null;
};

SinglyLinkedList.prototype.prepend = function(val) {
  let newNode = new Node(val);
  if(!this.head) {
    this.head = newNode;
    return newNode.val;
  }

  newNode.next = this.head;
  this.head = newNode;
  return newNode.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let newNode = new Node(val);
  let lastNode = this.head;

  if(!this.head) {
    this.head = newNode;
    return newNode.val;
  }

  while(lastNode.next) lastNode = lastNode.next;

  lastNode.next = newNode;
  return newNode.val;
};

SinglyLinkedList.prototype.removeHead = function() {
  if(!this.head) return;

  let removedVal = this.head.val;
  this.head = this.head.next;

  return removedVal;
};

SinglyLinkedList.prototype.removeTail = function() {
  if(!this.head) return;

  if(!this.head.next) {
    this.head = null;
    return;
  }

  let secondLast = this.head;

  while(secondLast.next.next) {
    secondLast = secondLast.next;
  }

  let removedVal = secondLast.next.val;
  secondLast.next = null;
  return removedVal;
};

SinglyLinkedList.prototype.insert = function(val, n) {
  let newNode = new Node(val);

  let curr = this.head;
  let position = 0;

  while(position < n - 1 && curr.next) {
    curr = curr.next;
    position++;
  }

  newNode.next = curr.next;
  curr.next = newNode;
  return newNode.val;
};


let sll = new SinglyLinkedList();
sll.append(1);
sll.append(2);
sll.append(3);
sll.append(4);
sll.append(5);
console.log(util.inspect(sll, false, null));

sll.insert(1, 6);
console.log(util.inspect(sll, false, null));
