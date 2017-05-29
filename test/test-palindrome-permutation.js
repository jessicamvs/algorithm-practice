'use strict';

const expect = require('chai').expect;
const palindromePerm = require('../lib/CTCI/chapter-1/palindrome-permutation');

describe('palindrome permutation', function() {
  it('should return true for permutation of palindrome', () => {
    expect(palindromePerm('tactcoa')).to.equal(true);
  });

  it('should return false for non palindrome permutation', () => {
    expect(palindromePerm('tact')).to.equal(false);
  });
});
