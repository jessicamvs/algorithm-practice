'use strict';

// Given a singly linked list, determine if it is a palindrome.

 // * @param {ListNode} head
 // * @return {boolean}

module.exports = function(head) {
  if(!head || !head.next) return true;
  let curr = head;
  let str = [];

  while(curr) {
    str.push(curr.val);
    curr = curr.next;
  }

  for(let i = 0;  i < Math.ceil(str.length/2) ; i++) {
    if(str[i] !== str[str.length - 1 -i]) return false;
  }

  return true;
};
