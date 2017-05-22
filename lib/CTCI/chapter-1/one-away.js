'use strict';

function oneAway(str1, str2) {
  if(Math.abs(str1.length - str2.length) > 1) return false;
  let numEdits = 0;

  for(let i = 0, j = 0; i < str1.length && j < str2.length ; i++, j++) {
    if(str1[i] !== str2[j]) {
      numEdits++;
      if(str1.length < str2.length) {
        i--;
      } else {
        j--;
      }
    }
  }

  return numEdits < 2;
}

module.exports = oneAway;
