'use strict';

const expect = require('chai').expect;
const XO = require('../lib/exes-and-ohs');

describe('exex and ohs', function() {
  it('should return true when there are neither x\'s or o\'s', () => {
    expect(XO('theres is n0thing here')).to.equal(true);
  });

  it('should return true when there are equal x\'s and o\'s', () => {
    expect(XO('xx tommy goes meow meow xx')).to.equal(true);
  });

  it('should return false when there are only x\'s', () => {
    expect(XO('hmmm, excuse me?')).to.equal(false);
  });
});
