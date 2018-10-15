const chalk = require("chalk");

const { getConfig } = require("../config/backendless");
const {
  convertToOpenSearchSuggestions
} = require("../suggestions/open-search");
const { search } = require("../query");

module.exports = {
  method: "GET",
  path: "/b/{userId}/suggest",
  handler: async (request, reply) => {
    const { userId } = request.params;
    const { query } = request.query;

    console.log(`Suggest ${userId} ${query}`);

    try {
      const config = await getConfig(userId);
      const result = search(config, query);

      const visitor = request.server.methods.getAnalyticsVisitor(request);
      visitor.event("Suggest", userId, result.bang).send();

      const suggestions = convertToOpenSearchSuggestions({
        query,
        results: [
          { query: "foo", count: 100000, url: "https://example.com" },
          { query: "bar", count: 100000, url: "https://example.com" },
          { query: "baz", count: 100000, url: "https://example.com" }
        ]
      });

      return suggestions;
    } catch (e) {
      console.error(chalk`{red ${e.message}}`);
      return reply.view("backendless-config-error", {
        userId,
        query,
        message: `Oops! Look's like we couldn't find your configuration`,
        config: e.config
      });
    }
  }
};
