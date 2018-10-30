const chalk = require("chalk");

const { getConfig } = require("../config/backendless");
const { search } = require("../query");
const { maybeThrowError } = require("../config/errors");

module.exports = {
  method: "GET",
  path: "/b/{userId}/search",
  handler: async (request, reply) => {
    const { userId } = request.params;
    const { query } = request.query;

    try {
      const config = await getConfig(userId);
      const result = search(config, query);

      maybeThrowError(query, config);

      const visitor = request.server.methods.getAnalyticsVisitor(request);
      visitor.event("Search", userId, result.bang).send();

      return reply.redirect(encodeURI(result.target));
    } catch (e) {
      console.error(chalk`{red ${e.message}}`);
      return reply.view("backendless-config-error", {
        userId,
        query,
        message: `Oops! We got an error on that...`,
        config: e.config
      });
    }
  }
};
