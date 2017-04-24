// Your task is to find the first element of an array that is not consecutive.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.

// If the whole array is consecutive then return null

// The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negetive and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next

// https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

module.exports = function (arr) {
  if(!Array.isArray(arr)) return new Error('expected an array');

  if(arr.length < 2) return new Error('expected array with at least 2 elements');
  
  let i = 0;

  while( arr[i] + 1 === arr[i+1] ) {
    i++;
  }

  if(i === arr.length - 1) return null;

  return arr[i+1];
};
