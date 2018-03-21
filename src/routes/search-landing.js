const { has } = require('lodash');

module.exports = {
  method: 'GET',
  path: '/{gist}',
  handler: (request, reply) => {
    console.log(request.params, request.query);
    const onboard = has(request, 'query.onboard');
    return reply.view('index', { gist: request.params.gist, onboard });
  }
};
