module.exports = {
  method: 'GET',
  path: '/setup/browser/{gist}',
  handler: function (request, reply) {
    const gist = request.params.gist;
    return reply.view('setup-browser', { gist });
  }
};
