'use strict';

// You will be given two inputs: a string of words and a letter.For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

module.exports = function(str,l) {
  let afterLetters = '';

  for( let i = 0 ; i < str.length ; i++) {
    if(str.charAt(i).toLowerCase() === l.toLowerCase() && str.charAt(i + 1).match(/[a-z]/i) ) {
      afterLetters += str.charAt(i + 1);
    }
  }

  return afterLetters;
};
