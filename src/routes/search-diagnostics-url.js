const { search } = require('../query');
const { getConfig } = require('../config');

module.exports = {
  method: 'GET',
  path: '/{gist}/diagnostics/url/{splat*}',
  handler: async (request, reply) =>{
    const config = await getConfig(request.params.gist);
    const target = search(config, request.params.splat);
    return target;
  }
};
