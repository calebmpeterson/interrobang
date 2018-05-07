const assetPath = require('./asset-path');

module.exports = {
  method: 'GET',
  path: '/assets/jquery/{splat*}',
  handler: {
    directory: {
      path: assetPath('jquery', '/')
    }
  }
};
