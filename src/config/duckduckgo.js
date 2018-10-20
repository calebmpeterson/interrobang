const Wreck = require("wreck");
const cheerio = require("cheerio");
const { chain, fromPairs, isEmpty, map } = require("lodash");

const BANGS_LITE = "https://duckduckgo.com/bang_lite.html";
const ALPHABETICAL_LIST_ELEMENT = `h4`;
const ALPHABETICAL_LIST_HEADER = `And here's the full list alphabetically:`;
const BANG_REGEX = /\(!(.*)\)/;

function parseBang(text) {
  const bang = BANG_REGEX.exec(text);
  return !isEmpty(bang) ? bang[1] : null;
}

async function fetchDuckDuckGoBangs() {
  try {
    const { payload } = await Wreck.get(BANGS_LITE);
    const $ = cheerio.load(payload);

    const bangsElement = $(ALPHABETICAL_LIST_ELEMENT)
      .filter(function() {
        return (
          $(this)
            .text()
            .trim() === ALPHABETICAL_LIST_HEADER
        );
      })
      .next();

    const bangsText = bangsElement.text().split("\n");

    const bangs = chain(bangsText)
      .filter(line => !isEmpty(line))
      .map(parseBang)
      .compact()
      .value();

    return bangs;
  } catch (e) {
    console.error(`Failed to scrape !bangs from DuckDuckGo`, e);
    return [];
  }
}

function createDuckDuckGoConfig(duckDuckGoBangsList) {
  return {
    bangs: fromPairs(
      map(duckDuckGoBangsList, bang => [
        bang,
        `https://duckduckgo.com/?q=!${bang} {{{s}}}`
      ])
    )
  };
}

module.exports = {
  fetchDuckDuckGoBangs,
  createDuckDuckGoConfig
};
