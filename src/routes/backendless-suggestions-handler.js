const chalk = require("chalk");

const { getConfig } = require("../config/backendless");
const {
  convertToOpenSearchSuggestions
} = require("../suggestions/open-search");
const { suggest } = require("../suggestions");

module.exports = {
  method: "GET",
  path: "/b/{userId}/suggest",
  handler: async (request, reply) => {
    const { userId } = request.params;
    const { query } = request.query;

    console.log(`Suggest ${userId} ${query}`);

    try {
      const config = await getConfig(userId);
      const suggestions = suggest(userId, config, query);

      const openSearchSuggestions = convertToOpenSearchSuggestions(suggestions);

      return openSearchSuggestions;
    } catch (e) {
      console.error(chalk`{red ${e.message}}`, e);
      return [query, [`Error generating suggestions: ${e.message}`]];
    }
  }
};
