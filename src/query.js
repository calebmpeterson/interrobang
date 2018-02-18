const { get, has, startsWith, tail } = require('lodash');

const QUERY = '{{{s}}}';
const DUCK_DUCK_GO_QUERY = 'https://www.duckduckgo.com/?q={{{s}}}';
const DEFAULT_SEARCH_QUERY = DUCK_DUCK_GO_QUERY;

function resolve(config, query) {
  if (startsWith(query, '!')) {
    const withoutBang = query.substring(1);
    const parts = withoutBang.split(' ');
    const bang = parts[0];
    if (has(config, ['bangs', bang])) {
      const bangQuery = get(config, ['bangs', bang]);
      return bangQuery.replace(QUERY, tail(parts));
    }
    return DUCK_DUCK_GO_QUERY.replace(QUERY, query);
  }
  const defaultSearchEngine = get(config, 'default-search-engine', DEFAULT_SEARCH_QUERY);
  return defaultSearchEngine.replace(QUERY, query);
}

module.exports = {
  resolve
}
