const { expect } = require('chai')

const { search } = require('../src/query')

describe('default search engine is DuckDuckGo', () => {
  it('should default to using DDG for search', () => {
    expect(search({}, 'foo bar')).to.be.deep.equal({ target: 'https://www.duckduckgo.com/?q=foo bar', bang: 'search-engine' })
  })
})

describe('custom search behavior', () => {
  const config = {
    'search-engine': `https://www.google.com/search?query={{{s}}}`
  }

  it('should resolve the default search engine', () => {
    expect(search(config, '')).to.be.deep.equal({ target: 'https://www.google.com/search?query=', bang: 'search-engine' })
  })

  it('should handle search queries', () => {
    expect(search(config, 'foo')).to.be.deep.equal({ target: 'https://www.google.com/search?query=foo', bang: 'search-engine' })
    expect(search(config, 'foo bar')).to.be.deep.equal({ target: 'https://www.google.com/search?query=foo bar', bang: 'search-engine' })
  })
})

describe('duckduckgo search bang fallback', () => {
  const config = {
    'search-engine': 'https://www.google.com/search?={{{s}}}'
  }

  it('should use duckduckgo for search bangs', () => {
    expect(search(config, '!foo bar baz')).to.be.deep.equal({ target: 'https://www.duckduckgo.com/?q=!foo bar baz', bang: 'foo' })
  })
})

describe('custom bang usage', () => {
  const config = {
    'bangs': {
      'weather': 'https://www.weather.com/?q={{{s}}}'
    }
  }

  it('should use custom bangs when defined', () => {
    expect(search(config, '!weather fort worth tx')).to.be.deep.equal({ target: 'https://www.weather.com/?q=fort worth tx', bang: 'weather' })
  })
})

describe('funny character usage', () => {
  it('should perform a default search', () => {
    expect(search({}, 'ć')).to.be.deep.equal({ target: 'https://www.duckduckgo.com/?q=ć', bang: 'search-engine' })
  })
})
