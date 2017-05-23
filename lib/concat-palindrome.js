'use strict';

const isPalindrome = require('./is-palindrome');

function concatPalindrome(arr) {
  let palindromes = [];

  for(let i = 0; i < arr.length ; i++) {
    for(let j = 0; j < arr.length ; j++) {
      if(i === j) continue;
      if(isPalindrome(arr[i] + arr[j])) palindromes.push(arr[i] + arr[j]);
    }
  }

  return palindromes;
}

module.exports = concatPalindrome;
