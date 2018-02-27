const { getConfig } = require('../config');
const { search } = require('../query');

module.exports = {
  method: 'GET',
  path: '/{gist}/search',
  handler: async (request, reply) => {
    const config = await getConfig(request.params.gist);
    const target = search(config, request.query.query);
    return reply.redirect(target);
  }
};
