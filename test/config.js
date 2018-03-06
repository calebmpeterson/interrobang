const { expect } = require('chai');

const { getGistIdFromURL } = require('../src/config');

describe('config URL parsing', () => {
  it('will extract the Gist ID from the Gist URL', () => {
    expect(getGistIdFromURL('https://gist.github.com/calebmpeterson/42')).to.be.equal('42');
  });
});
