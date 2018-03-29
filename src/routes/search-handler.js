const chalk = require('chalk');

const { getConfig } = require('../config');
const { search } = require('../query');

module.exports = {
  method: 'GET',
  path: '/{gist}/search',
  handler: async (request, reply) => {
    const { gist } = request.params;
    const { query } = request.query;

    try {
      const config = await getConfig(gist);
      const result = search(config, query);

      const visitor = request.server.methods.getAnalyticsVisitor(request);
      visitor.event('Search', gist, result.bang).send();

      return reply.redirect(result.target);
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
