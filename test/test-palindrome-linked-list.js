'use strict';

const expect = require('chai').expect;
const isPalindrome = require('../lib/palindrome-linked-list');

describe('palindrome linked list', function() {
  it('should return true for single node amd empty list', () => {
    expect(isPalindrome({val: 89, next: null})).to.equal(true);
    expect(isPalindrome()).to.equal(true);
  });

  it('should return true for linked list palindrome', () => {
    expect(isPalindrome({val: 1, next: {val: 1, next: null}})).to.equal(true);
  });

  it('should return false for non palindrome', () => {
    expect(isPalindrome({val: 1, next: {val: 2, next: null}})).to.equal(false);
  });
});
