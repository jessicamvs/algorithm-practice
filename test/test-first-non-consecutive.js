'use strict';

const expect = require('chai').expect;
const firstNonConsecutive =  require('../lib/first-non-consecutive');

describe('First Non Consecutive', function() {
  it('should return null if all numbers are consecutive', () => {
    expect(firstNonConsecutive([1,2,3,4,5])).to.equal(null);
  });

  it('should return 4 - first nonconsecutive is not at the end', () => {
    expect(firstNonConsecutive([1,2,4,5])).to.equal(4);
  });

  it('should return 6 - first nonconsecutive is at the end', () => {
    expect(firstNonConsecutive([1,2,3,6])).to.equal(6);
  });
});
