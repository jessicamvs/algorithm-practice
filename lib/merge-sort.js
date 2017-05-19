'use strict';

function mergeSort(arr) {
  if(!arr.length || !Array.isArray(arr)) return Error
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length/2);

  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while(left.length) {
    sorted = sorted.concat(left);
    left = [];
  }

  while(right.length) {
    sorted = sorted.concat(right);
    right = [];
  }

  return sorted;
}

module.exports = mergeSort;
