'use strict';

const expect = require('chai').expect;
const formatString = require('../lib/format-string');

describe('Format String', function() {
  it('should work with 3 names', () => {
    expect(formatString([{name: 'Oliver'}, {name: 'Ikaika'}, {name: 'Mo'}])).to.equal('Oliver, Ikaika & Mo');
  });

  it('should work with 2 names', () => {
    expect(formatString([{name: 'Oliver'}, {name: 'Ikaika'}])).to.equal('Oliver & Ikaika');
  });

  it('should work with 1 names', () => {
    expect(formatString([{name: 'Oliver'}])).to.equal('Oliver');
  });

  it('should work with 0 names', () => {
    expect(formatString([])).to.equal('');
  });
});
