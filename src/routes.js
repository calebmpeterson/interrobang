const normalizedPath = require('path').join(__dirname, 'routes');

module.exports = function loadRoutes(server) {
  require('fs').readdirSync(normalizedPath).forEach((filename) => {
    console.log(`Require route from ${filename}`);

    try {
      const route = require(`./routes/${filename}`);
      server.route(route);
    }
    catch (e) {
      console.error(`ERROR failed to load froute from ${filename}`, e);
    }
  });
};
