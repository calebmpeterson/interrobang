const { map, fromPairs } = require("lodash");

const { getConfig } = require("../config/backendless");
const { getDuckDuckGoBangs } = require("../cache");
const { createDuckDuckGoConfig } = require("../config/duckduckgo");
const { mergeConfigurations } = require("../config/merge");

module.exports = {
  method: "GET",
  path: "/b/{userId}/diagnostics/config",
  handler: async (request, reply) => {
    const userConfig = await getConfig(request.params.userId);

    const publicBangs = await getDuckDuckGoBangs(request.server);
    const publicConfig = createDuckDuckGoConfig(publicBangs);
    const completeConfig = mergeConfigurations(userConfig, publicConfig);

    return completeConfig;
  }
};
