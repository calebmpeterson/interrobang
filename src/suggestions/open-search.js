const { map } = require("lodash");

const { Selectors } = require("./index");

function convertToOpenSearchSuggestions(suggestions) {
  const { query, results } = suggestions;

  const queries = map(results, Selectors.query);
  const counts = map(results, Selectors.formattedCount);
  const urls = map(results, Selectors.url);

  return [query, queries, counts, urls];
}

module.exports = {
  convertToOpenSearchSuggestions
};
