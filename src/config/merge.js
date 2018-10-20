const { merge } = require("lodash");

function mergeConfigurations(userConfig, ...otherConfigs) {
  console.log();
  return merge({ bangs: {} }, ...otherConfigs, userConfig);
}

module.exports = {
  mergeConfigurations
};
