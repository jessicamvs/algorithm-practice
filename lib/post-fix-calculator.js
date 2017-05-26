'use strict';

function postFix(arr) {
  let Q = [];
  let newNum;

  for(let i = 0 ; i < arr.length ; i++) {
    if(typeof(arr[i]) === 'number') {
      Q.push(arr[i]);
    } else {
      if(arr[i] === '+') {
        newNum = Q.shift() + Q.shift();
      }
      if(arr[i] === '-') {
        newNum = Q.shift() - Q.shift();
      }
      if(arr[i] === '*') {
        newNum = Q.shift() * Q.shift();
      }
      if(arr[i] === '/') {
        newNum = Q.shift() / Q.shift();
      }
      Q.push(newNum);
    }
  }

  console.log(Q);
  console.log(newNum);
}

postFix([1,2,'-',5,'*']); // (1 + 2) * 5
