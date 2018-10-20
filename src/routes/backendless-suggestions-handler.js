const chalk = require("chalk");

const { getConfig } = require("../config/backendless");
const { getDuckDuckGoBangs } = require("../cache");
const { createDuckDuckGoConfig } = require("../config/duckduckgo");
const {
  convertToOpenSearchSuggestions
} = require("../suggestions/open-search");
const { mergeConfigurations } = require("../config/merge");
const { suggest } = require("../suggestions");

module.exports = {
  method: "GET",
  path: "/b/{userId}/suggest",
  handler: async (request, reply) => {
    const { userId } = request.params;
    const { query } = request.query;

    console.log(`Suggest ${userId} ${query}`);

    try {
      const userConfig = await getConfig(userId);
      const publicBangs = await getDuckDuckGoBangs(request.server);
      const publicConfig = createDuckDuckGoConfig(publicBangs);
      const completeConfig = mergeConfigurations(userConfig, publicConfig);

      const suggestions = suggest(userId, completeConfig, query);
      const openSearchSuggestions = convertToOpenSearchSuggestions(suggestions);

      return openSearchSuggestions;
    } catch (e) {
      console.error(chalk`{red ${e.message}}`, e);
      return [query, [`Error generating suggestions: ${e.message}`]];
    }
  }
};
