const { has } = require('lodash');

module.exports = {
  method: 'GET',
  path: '/b/{userId}',
  handler: (request, reply) => {
    return reply.view('backendless-search-landing', { userId: request.params.userId });
  }
};
