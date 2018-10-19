const numeral = require("numeral");
const { chain, isEmpty, startsWith } = require("lodash");

const router = require("../services/router");

function suggest(userId, config, query = "") {
  if (isEmpty(config)) {
    return {
      query,
      results: []
    };
  }

  const metaBangResults = [
    { query: "!!", count: 1, url: router.landing(userId) },
    { query: "!!config", count: 1, url: router.configuration() }
  ];

  const echoQuery = {
    query: query,
    count: 1,
    url: router.search(userId, query)
  };

  const queryResults = chain(config.bangs)
    .mapValues((pattern, bang) => ({
      query: `!${bang}`,
      count: 1,
      url: router.search(userId, `!${bang}`)
    }))
    .filter((pattern, bang) => startsWith(`!${bang}`, query))
    .value();

  return {
    query,
    results: [echoQuery, ...queryResults, ...metaBangResults]
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
