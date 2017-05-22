'use strict';

const expect = require('chai').expect;
const palindromePerm = require('../lib/CTCI/chapter-1/palindrome-permutation');

describe.only('palindrome permutation', function() {
  it('should return true for permutation of palindrome', () => {
    expect(palindromePerm('tact coa')).to.equal(true);
  });
});
