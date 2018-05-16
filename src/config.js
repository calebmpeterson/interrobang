const { assign, flatten, get, zipObject, isEmpty } = require('lodash');

const github = require('./config/github');

function fromPayload(payload) {
  const searchEngine = get(payload, 'search-engine');
  const searchEngineConfig = searchEngine
        ? { 'search-engine': searchEngine }
        : {};

  const { bang, pattern } = payload;

  const bangs = zipObject(flatten([bang]), flatten([pattern]));
  const bangsConfig = !isEmpty(bangs)
        ? { bangs }
        : {};

  return assign({}, searchEngineConfig, bangsConfig);
}

module.exports = assign({}, github, { fromPayload });
