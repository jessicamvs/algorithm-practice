'use strict';

// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// /**
//  * @param {string} s
//  * @return {number}
//  */
module.exports = function(str) {
  if(!str.length) return 0;

  let map = {};
  let longest = '';
  let tempLong = '';

  for(let i = 0;i < str.length; i++) {
    if(!map[str[i]]) {
      map[str[i]] = true;
      tempLong += str[i];
      continue;
    }

    if(tempLong.length > longest.length) longest = tempLong;

    let sliceIndex = tempLong.indexOf(str[i]);

    for(let k = 0; k <= sliceIndex ; k++) {
      if(str[i] !== tempLong[k]) {
        map[tempLong[k]] = null;
      }
    }
    tempLong = tempLong.slice(sliceIndex + 1);
    tempLong += str[i];
  }

  if(tempLong.length > longest.length) longest = tempLong;

  return longest.length;
};
