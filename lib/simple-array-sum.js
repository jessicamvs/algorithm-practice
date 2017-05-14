'use strict';

// Given an string of N space-separated integers, can you find the sum of its elements?

module.exports = function(string) {
  let arr = string.split(' ').map(Number);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
};
