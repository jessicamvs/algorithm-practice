'use strict';

const expect = require('chai').expect;
const findDuplicate = require('../lib/find-duplicate');

describe('find duplicate', function() {
  it('should return error when passed null', () => {
    expect(findDuplicate(null)).to.equal(Error);
  });

  it('should return index and val of duplicate', () => {
    expect(findDuplicate([2,1,6,2])).to.deep.equal({val: 2, index: 3});
  });

  it('should work return null index and val when no duplicate is found', () => {
    expect(findDuplicate([2,1,6])).to.deep.equal({val: null, index: null});
  });
});
