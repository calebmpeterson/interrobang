const chalk = require('chalk');

const { getConfig } = require('../config');
const { search } = require('../query');

module.exports = {
  method: 'GET',
  path: '/{gist}/search',
  handler: async (request, reply) => {
    try {
      const config = await getConfig(request.params.gist);
      const target = search(config, request.query.query);
      return reply.redirect(target);
    }
    catch (e) {
      console.error(chalk`{red ${e.message}}`);
      return reply.view('config-error', {
        gist: request.params.gist,
        query: request.query.query,
        message: e.message,
        config: e.config
      });
    }
  }
};
