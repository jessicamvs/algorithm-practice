'use strict';

function palindromePerm(str) {
  let letters = {};
  let numOdd = 0;

  for(let i = 0 ; i < str.length ; i++) {
    if(letters[str[i]]) {
      letters[str[i]]++;
    } else {
      letters[str[i]] = 1;
    }
  }

  console.log('LETTERS', letters);
  Object.keys(letters).forEach(key => {
    if(letters[key] % 2 !== 0) numOdd++;
  });

  return numOdd < 2;
}

module.exports = palindromePerm;
