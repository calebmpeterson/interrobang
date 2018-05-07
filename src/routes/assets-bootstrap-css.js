const assetPath = require('./asset-path');

module.exports = {
  method: 'GET',
  path: '/assets/bootstrap/css/{splat*}',
  handler: {
    directory: {
      path: assetPath('bootswatch', '/dist/flatly')
    }
  }
};
