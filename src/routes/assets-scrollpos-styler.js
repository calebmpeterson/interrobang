const assetPath = require('./asset-path');

module.exports = {
  method: 'GET',
  path: '/assets/scrollpos-styler/{splat*}',
  handler: {
    directory: {
      path: assetPath('scrollpos-styler', '/')
    }
  }
};
