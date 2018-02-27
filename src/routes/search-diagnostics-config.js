const { getConfig } = require('../config');

module.exports = {
  method: 'GET',
  path: '/{gist}/diagnostics/config',
  handler: async (request, reply) => {
    const config = await getConfig(request.params.gist);
    return config;
  }
};
