const chalk = require('chalk');

const { getConfig } = require('../config');
const { search } = require('../query');

module.exports = {
  method: 'GET',
  path: '/{gist}/config/edit',
  handler: async (request, reply) => {
    const target = `https://gist.github.com/${request.params.gist}`;
    return reply.redirect(target);
  }
};
