'use strict';

const expect = require('chai').expect;
const stringClean = require('../lib/string-cleaning');

describe('string cleaning', function() {
  it('should remove single number', () => {
    expect(stringClean('hello th3re')).to.equal('hello thre');
  });

  it('should remove numbers next to each other', () => {
    expect(stringClean('hello4567 tommy')).to.equal('hello tommy');
  });

  it('should remove zeros', () => {
    expect(stringClean('meow meow to0mm0y')).to.equal('meow meow tommy');
  });
});
