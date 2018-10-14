const numeral = require("numeral");
const { chain } = require("lodash");

function suggest(query, config) {}

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
