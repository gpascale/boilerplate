var assert = require('assert');

describe('general', function() { 
  it('sanity check', function() {
    var expected = 64;
    var actual = 8 * 8;
    assert.equal(actual, expected);
  });
});
