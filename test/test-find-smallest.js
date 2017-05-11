'use strict';

const expect = require('chai').expect;
const findSmallest = require('../lib/find-smallest');

describe('find smallest', function() {
  it('should return 2', () => {
    expect(findSmallest([4,6,2,3,5])).to.equal(2);
  });

  it('should return -1', () => {
    expect(findSmallest([4,6,2,3,0,-1])).to.equal(-1);
  });

  it('should return 0', () => {
    expect(findSmallest([0,6,2,3,5])).to.equal(0);
  });
});
