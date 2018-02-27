module.exports = {
  method: 'GET',
  path: '/{gist}',
  handler: (request, reply) => {
    return reply.view('index', { gist: request.params.gist });
  }
};
