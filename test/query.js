const { expect } = require('chai')

const { resolve } = require('../src/query')

describe('default search behavior', () => {
  const config = {
    'default-search-engine': `https://www.google.com/search?query={{{s}}}`
  }

  it('should resolve the default search engine', () => {
    expect(resolve(config, '')).to.be.equal('https://www.google.com/search?query=')
  })

  it('should handle search queries', () => {
    expect(resolve(config, 'foo')).to.be.equal('https://www.google.com/search?query=foo')
    expect(resolve(config, 'foo bar')).to.be.equal('https://www.google.com/search?query=foo bar')
  })
})

describe('duckduckgo search bang fallback', () => {
  const config = {
    'default-search-engine': 'https://www.google.com/search?={{{s}}}'
  }

  it('should use duckduckgo for search bangs', () => {
    expect(resolve(config, '!foo bar')).to.be.equal('https://www.duckduckgo.com/?q=!foo bar')
  })
})

describe('custom bang usage', () => {
  const config = {
    'bangs': {
      'weather': 'https://www.weather.com/?q={{{s}}}'
    }
  }

  it('should use custom bangs when defined', () => {
    expect(resolve(config, '!weather 76137')).to.be.equal('https://www.weather.com/?q=76137')
  })
})
