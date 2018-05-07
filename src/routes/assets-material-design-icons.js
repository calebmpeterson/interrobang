const assetPath = require('./asset-path');

module.exports = {
  method: 'GET',
  path: '/assets/mdi/{splat*}',
  handler: {
    directory: {
      path: assetPath('mdi', '/')
    }
  }
};
