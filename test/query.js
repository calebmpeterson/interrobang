const { expect } = require('chai')

const { search } = require('../src/query')

describe('default search engine is DuckDuckGo', () => {
  it('should default to using DDG for search', () => {
    expect(search({}, 'foo')).to.be.equal('https://www.duckduckgo.com/?q=foo')
  })
})

describe('custom search behavior', () => {
  const config = {
    'search-engine': `https://www.google.com/search?query={{{s}}}`
  }

  it('should resolve the default search engine', () => {
    expect(search(config, '')).to.be.equal('https://www.google.com/search?query=')
  })

  it('should handle search queries', () => {
    expect(search(config, 'foo')).to.be.equal('https://www.google.com/search?query=foo')
    expect(search(config, 'foo bar')).to.be.equal('https://www.google.com/search?query=foo bar')
  })
})

describe('duckduckgo search bang fallback', () => {
  const config = {
    'search-engine': 'https://www.google.com/search?={{{s}}}'
  }

  it('should use duckduckgo for search bangs', () => {
    expect(search(config, '!foo bar')).to.be.equal('https://www.duckduckgo.com/?q=!foo bar')
  })
})

describe('custom bang usage', () => {
  const config = {
    'bangs': {
      'weather': 'https://www.weather.com/?q={{{s}}}'
    }
  }

  it('should use custom bangs when defined', () => {
    expect(search(config, '!weather 76137')).to.be.equal('https://www.weather.com/?q=76137')
  })
})
