'use strict';

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a
// boolean and be case insensitive. The string can contains any char.

module.exports = function(str) {
  let numO = 0;
  let numX = 0;

  for( let i = 0 ; i < str.length ; i++) {
    if(str.charAt(i).toLowerCase() === 'o') numO++;
    if(str.charAt(i).toLowerCase() === 'x') numX++;
  }

  if(numO === numX) return true;

  return false;
};
