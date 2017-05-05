'use strict';

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

module.exports = function(array) {
  return array.map(ele => parseInt(-ele));
};
