'use strict';

const expect = require('chai').expect;
const comesAfter = require('../lib/comes-after');

describe('comes after', function() {
  it('should return correct string', () => {
    expect(comesAfter('hello there', 'e')).to.equal('lr');
  });

  it('should not return punctuation or numbers', () => {
    expect(comesAfter('meowy thomas!! say hello S98989!', 's')).to.equal('a');
  });

  it('should not be case sensitive', () => {
    expect(comesAfter('How are yOu?!', 'o')).to.equal('wu');
  });
});
