const {
  fetchDuckDuckGoBangs,
  createDuckDuckGoConfig
} = require("../config/duckduckgo");

const buildDuckDuckGoConfig = async () => {
  const duckDuckGoBangs = await fetchDuckDuckGoBangs();
  const duckDuckGoConfig = createDuckDuckGoConfig(duckDuckGoBangs);
  return duckDuckGoConfig;
};

function initialize(server) {
  return server.method("getDuckDuckGoBangs", buildDuckDuckGoConfig, {
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
