'use strict';

const expect = require('chai').expect;
const differenceOfVolumes = require('../lib/difference-of-volumes');

describe('Difference of Volumes', function() {
  it('should return difference', () => {
    expect(differenceOfVolumes([1,1,1], [2,2,2])).to.equal(7);
  });

  it('should return positive number', () => {
    expect(differenceOfVolumes([2,2,2], [1,1,1])).to.equal(7);
  });

  it('should return zero', () => {
    expect(differenceOfVolumes([1,1,1], [1,1,1])).to.equal(0);
  });
});
