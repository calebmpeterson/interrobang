const { getGistIdFromURL } = require('../config');

module.exports = {
  method: 'GET',
  path: '/setup/complete/{gist}',
  handler: (request, reply) => {
    const gistId = request.params.gist;
    console.log(`Complete setup for '${gistId}'`);
    return reply.redirect(`/${gistId}`);
  }
};
