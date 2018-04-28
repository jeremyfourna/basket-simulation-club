const assert = require('chai').assert;
const { generateClub } = require('../index.js');

describe('index.js', () => {
  describe('Function generateClub()', () => {
    it('Must return object', () => {
      assert.isObject(generateClub());
    });
  });
});
