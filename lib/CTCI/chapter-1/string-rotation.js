'use strict';

const isSubstring = require('./is-substring');

function stringRotation(str1, str2) {
  return isSubstring(str2 + str2, str1);
}

module.exports = stringRotation;
