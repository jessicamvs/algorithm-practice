'use strict';

const expect = require('chai').expect;
const twoSums = require('../lib/two-sums');

describe('two sums', function() {
  it('should return indices of two integers that sum to target', () => {
    expect(twoSums([1,5,3], 4)).to.deep.equal([0,2]);
  });

  it('should return an array', () => {
    expect(Array.isArray(twoSums([1,5,3], 4))).to.equal(true);
  });

  it('should return error for undefined nums or length less than 2', () => {
    expect(twoSums([1], 4)).to.equal(Error);
    expect(twoSums(undefined, 4)).to.equal(Error);
  });
});
