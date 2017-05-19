'use strict';

const expect = require('chai').expect;
const mergeSort = require('../lib/merge-sort');

describe('merge sort', function() {
  it('should sort array of even length', () => {
    expect(mergeSort([5,3,2,9])).to.deep.equal([2,3,5,9]);
  });

  it('should sort array of odd length', () => {
    expect(mergeSort([5,3,2])).to.deep.equal([2,3,5]);
  });

  it('should sort array of length 1', () => {
    expect(mergeSort([5])).to.deep.equal([5]);
  });

  it('should return error for no length', () => {
    expect(mergeSort([])).to.equal(Error);
  });
});
