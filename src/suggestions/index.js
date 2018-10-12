const numeral = require("numeral");

function suggest(query, config) {}

const Selectors = {
  query: suggestion => suggestion.query,
  formattedCount: suggestion =>
    numeral(suggestion.count).format("0,0") + " results",
  url: suggestion => suggestion.url
};

module.exports = {
  suggest,
  Selectors
};
