'use strict';

const expect = require('chai').expect;
const sumArr = require('../lib/simple-array-sum');

describe('simple array sum', function() {
  it('should sum all space-separated numbers', () => {
    expect(sumArr('1 2 3 4')).to.equal(10);
  });

  it('should work for a single number', () => {
    expect(sumArr('1')).to.equal(1);
  });

  it('should work for negative numbers', () => {
    expect(sumArr('-1 1')).to.equal(0);
  });
});
