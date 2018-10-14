const { fetchDuckDuckGoBangs } = require("../suggestions/duckduckgo");

function initialize(server) {
  return server.method("getDuckDuckGoBangs", fetchDuckDuckGoBangs, {
    cache: {
      segment: "duckduckgo-bangs",
      generateTimeout: 60 * 1000,
      expiresIn: 24 * 60 * 60 * 1000
    }
  });
}

async function getDuckDuckGoBangs(server) {
  return await server.methods.getDuckDuckGoBangs();
}

module.exports = {
  initializeCache: initialize,
  getDuckDuckGoBangs
};
