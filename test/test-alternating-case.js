'use strict';

const expect = require('chai').expect;
const alternatingCase = require('../lib/alternating-case');

describe('alternating case', function() {
  it('should uppercase entire string', () => {
    expect(alternatingCase('meow meow meow')).to.equal('MEOW MEOW MEOW');
  });

  it('should lowercase entire string', () => {
    expect(alternatingCase('HELLO THERE')).to.equal('hello there');
  });

  it('should alternate cases', () => {
    expect(alternatingCase('cHaNge mE')).to.equal('ChAnGE Me');
  });
});
