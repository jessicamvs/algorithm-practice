'use strict';

function stringCompression(str) {
  let curr = null;
  let count = 0;
  let comp = '';

  for(let i = 0 ; i < str.length ; i++) {
    if(!curr) {
      curr = str[i];
      count++;
      continue;
    }

    if(str[i] !== curr) {
      comp += curr + count;
      curr = str[i];
      count = 1;
      continue;
    }

    if(str[i] === curr) count++;
  }

  comp += curr + count;

  console.log(str.length < comp.length ? str : comp);
}

module.exports = stringCompression;
