const assetPath = require('./asset-path');

module.exports = {
  method: 'GET',
  path: '/assets/bootstrap/{splat*}',
  handler: {
    directory: {
      path: assetPath('bootstrap', '/dist')
    }
  }
};
