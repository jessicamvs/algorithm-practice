'use strict';

// Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

module.exports = function (string) {
  let str = '';

  for(let i = 0 ; i < string.length ; i++) {
    if(string.charAt(i) === string.charAt(i).toUpperCase()){
      str += string.charAt(i).toLowerCase();
    } else {
      str += string.charAt(i).toUpperCase();
    }
  }

  return str;
};
