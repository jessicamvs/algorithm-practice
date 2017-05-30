'use strict';
// only works for positive numbers
function isPalindromeNum(num)  {
  let reversedNum = parseInt(num.toString().split('').reverse().join(''));
  if(num === reversedNum) return true;
  return false;
}

module.exports = isPalindromeNum;
