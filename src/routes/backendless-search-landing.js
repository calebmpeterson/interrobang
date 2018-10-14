const chalk = require("chalk");

const { getConfig } = require("../config/backendless");

module.exports = {
  method: "GET",
  path: "/b/{userId}",
  handler: async (request, reply) => {
    const { userId } = request.params;

    try {
      const config = await getConfig(userId);
      return reply.view("backendless-search-landing", {
        userId,
        bangs: config.bangs
      });
    } catch (e) {
      console.error(chalk`{red ${e.message}}`);
      return reply.view("backendless-config-error", {
        userId,
        message: `Oops! Look's like there was a problem fetching your configuration`,
        config: e.config
      });
    }
  }
};
