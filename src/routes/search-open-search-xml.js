const openSearchXml = require('../views/open-search');

module.exports = {
  method: 'GET',
  path: '/{gist}/open-search.xml',
  handler: (request, reply) => {
    const response = reply.response(openSearchXml({ gist: request.params.gist }));
    response.type('application/xml');
    return response;
  }
};
