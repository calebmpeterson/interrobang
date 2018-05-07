const { dirname } = require('path');

module.exports = function (pkg, path) {
  return dirname(require.resolve(`${pkg}/package.json`)) + path;
};
