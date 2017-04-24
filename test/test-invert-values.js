'use strict';

const expect = require('chai').expect;
const invertValues = require('../lib/invert-values');

describe('Invert Values', function() {
  it('should return an array with all values inverted', () => {
    expect(invertValues([1,4,-1,-5])).to.deep.equal([-1,-4,1,5]);
  });

  it('should return empty array', () => {
    expect(invertValues([])).to.deep.equal([]);
  });

  it('should return [0]', () => {
    expect(invertValues([0])).to.deep.equal([0]);
  });
});
