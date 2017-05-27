'use strict';

function findDuplicate(arr) {
  if(!arr || !Array.isArray(arr)) return new Error('expected array');

  let map = {};

  for(let i = 0 ; i < arr.length ; i++) {
    if(map[arr[i]]) return {val: arr[i], index: i};

    map[arr[i]] = true;
  }

  return {val: null, index: null};
}

module.exports = findDuplicate;
