'use strict';

const expect  = require('chai').expect;
const isPalindrome = require('../lib/valid-palindrome');

describe('valid palindrome', function() {
  it('should return true for empty string', () => {
    expect(isPalindrome('')).to.equal(true);
  });

  it('should return true for palindrome ignoring cases and spaces', () => {
    expect(isPalindrome('heLlO olleH')).to.equal(true);
  });

  it('should return false for non palindrome', () => {
    expect(isPalindrome('my name is jessica')).to.equal(false);
  });

});
