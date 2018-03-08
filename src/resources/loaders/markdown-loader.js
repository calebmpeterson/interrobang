const fs = require('fs');

require.extensions['.md'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'UTF-8');
};
