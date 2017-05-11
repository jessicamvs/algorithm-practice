'use strict';

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

module.exports = function(nums, target) {
  if(!nums || nums.length < 2) return Error;
  let numMap = {};

  for( var i = 0 ; i < nums.length ; i++ ) {
    numMap[nums[i]] = i;
  }

  for( var j = 0 ; j < nums.length ; j++ ) {
    let partner = target - nums[j];
    if(numMap[partner]) {
      return [j, numMap[partner]];
    }
  }
};
