const numeral = require("numeral");
const { chain, isEmpty } = require("lodash");

function suggest(userId, config, query = "") {
  if (isEmpty(config)) {
    return {
      query,
      results: []
    };
  }

  const metaBangResults = [
    { query: "!!", count: 1, url: `/b/${userId}` },
    { query: "!!config", count: 1, url: `/account/#/configuration` }
  ];

  const queryResults = [];

  return {
    query,
    results: [...queryResults, ...metaBangResults]
  };
}

const Selectors = {
  allBangs: bangs =>
    chain(bangs)
      .sort()
      .value(),

  query: suggestion => suggestion.query,

  formattedCount: suggestion =>
    numeral(suggestion.count).format("0,0") + " results",

  url: suggestion => suggestion.url
};

module.exports = {
  suggest,
  Selectors
};
