const { merge } = require("lodash");

function mergeConfigurations(userConfig, ...otherConfigs) {
  return merge({}, ...otherConfigs, userConfig);
}

module.exports = {
  mergeConfigurations
};
