const { map, fromPairs } = require("lodash");

const { getConfig } = require("../config/backendless");
const { getDuckDuckGoBangs } = require("../cache");
const { mergeConfigurations } = require("../config/merge");

module.exports = {
  method: "GET",
  path: "/b/{userId}/diagnostics/config",
  handler: async (request, reply) => {
    const config = await getConfig(request.params.userId);
    const publicBangs = await getDuckDuckGoBangs(request.server);

    // TODO extract to a utility function
    const publicConfig = {
      bangs: fromPairs(
        map(publicBangs, bang => [
          bang,
          `https://duckduckgo.com/?q=!${bang} {{{s}}}`
        ])
      )
    };

    const completeConfig = mergeConfigurations(config, publicConfig);

    return completeConfig;
  }
};
