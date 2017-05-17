'use strict';

function binarySearch(arr, num) {
  if(!arr || !Array.isArray(arr)) return Error;
  if(!arr.length) return false;

  let mid = Math.floor(arr.length/2);

  if(arr[mid] === num) return true;
  if(num < arr[mid]) return binarySearch(arr.slice(0,mid), num);
  if(arr[mid] < num) return binarySearch(arr.slice(mid + 1), num);

  return false;
}

module.exports = binarySearch;
