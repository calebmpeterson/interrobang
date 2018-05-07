const chalk = require('chalk');
const { isObject, isEmpty } = require('lodash');
const normalizedPath = require('path').join(__dirname, 'routes');

module.exports = function loadRoutes(server) {
  require('fs').readdirSync(normalizedPath).forEach((filename) => {
    console.log(`Require route from ${filename}`);

    try {
      const route = require(`./routes/${filename}`);
      if (isObject(route) && !isEmpty(route)) {
        server.route(route);
      }
      else {
        console.log(chalk`{yellow No route found in ${filename}}`);
      }
    }
    catch (e) {
      console.error(chalk`{red ERROR failed to load froute from ${filename}}`, e);
    }
  });
};
