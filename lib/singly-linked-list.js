'use strict';

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
