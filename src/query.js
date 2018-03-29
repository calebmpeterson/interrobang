const { get, has, startsWith, join, tail } = require('lodash');

const QUERY = '{{{s}}}';
const DUCK_DUCK_GO_QUERY = 'https://www.duckduckgo.com/?q={{{s}}}';
const DEFAULT_SEARCH_QUERY = DUCK_DUCK_GO_QUERY;

class SearchResult {
  constructor(target, bang) {
    this.target = target;
    this.bang = bang;
  }
}

function search(config, query) {
  if (startsWith(query, '!')) {
    const withoutBang = query.substring(1);
    const parts = withoutBang.split(' ');
    const bang = parts[0];

    if (has(config, ['bangs', bang])) {
      console.log(`query is a custom search bang: ${bang}`);
      const bangQuery = get(config, ['bangs', bang]);
      return new SearchResult(bangQuery.replace(QUERY, join(tail(parts), ' ')), bang);
    }
    console.log(`query is a search bang: ${bang}`);
    return new SearchResult(DUCK_DUCK_GO_QUERY.replace(QUERY, query), bang);
  }

  const defaultSearchEngine = get(config, 'search-engine', DEFAULT_SEARCH_QUERY);

  return new SearchResult(defaultSearchEngine.replace(QUERY, query), 'search-engine');
}

module.exports = {
  search
}
