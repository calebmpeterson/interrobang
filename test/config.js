const { expect } = require('chai');

const { fromPayload } = require('../src/config');

describe('config payload transformation', () => {
  it('will extract the default search-engine property', () => {
    expect(fromPayload({ 'search-engine': 'Google'})).to.deep.equal({ 'search-engine': 'Google' });
  });

  it('will pair the search !bangs', () => {
    expect(fromPayload({ bang: ['foo', 'baz'], pattern: ['bar', 'qux']})).to.deep.equal({ bangs: { foo: 'bar', baz: 'qux' }});
  });
});
