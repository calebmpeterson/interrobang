const chalk = require("chalk");
const { keys } = require("lodash");

const { getConfig } = require("../config/backendless");
const { getDuckDuckGoBangs } = require("../cache");

module.exports = {
  method: "GET",
  path: "/b/{userId}",
  handler: async (request, reply) => {
    const { userId } = request.params;

    try {
      const duckDuckGoConfig = await getDuckDuckGoBangs(request.server);
      const config = await getConfig(userId);
      const duckDuckGoBangs = keys(duckDuckGoConfig.bangs);
      const configBangs = keys(config.bangs);
      const bangs = [...configBangs, ...duckDuckGoBangs];

      return reply.view("backendless-search-landing", {
        userId,
        bangs
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
