'use strict';

function isSubstring(str1, str2) {
  for(let i = 0; i < str1.length - str2.length + 1 ; i++) {
    if(str1.slice(i, i + str2.length) === str2) return true;
  }

  return false;
}

module.exports = isSubstring;
