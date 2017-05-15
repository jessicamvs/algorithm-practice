'use strict';

const expect = require('chai').expect;
const longestSubstring = require('../lib/longest-substring');

describe('longest substring', function() {
  it('should work for str with no repeating characters', () => {
    expect(longestSubstring('abcdefg')).to.equal(7);
  });

  it('should work for str with repeating charcters', () => {
    expect(longestSubstring('dvdf')).to.equal(3);
  });

  it('should work for str with no length and length of 1', () => {
    expect(longestSubstring('')).to.equal(0);
    expect(longestSubstring('h')).to.equal(1);
  });
});
