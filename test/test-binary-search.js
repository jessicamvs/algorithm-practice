'use strict';

const expect = require('chai').expect;
const binarySearch = require('../lib/binary-search');

describe('binary search', function() {
  it('should return true if num is in arr', () => {
    expect(binarySearch([2,3,66,99], 2)).to.equal(true);
  });

  it('should return false if num is not found', () => {
    expect(binarySearch([2,3,66,99], 0)).to.equal(false);
  });

  it('should return false if arr is empty', () => {
    expect(binarySearch([], 0)).to.equal(false);
  });
});
