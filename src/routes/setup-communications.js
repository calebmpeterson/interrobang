module.exports = {
  method: 'GET',
  path: '/setup/communications/{gist}',
  handler: function (request, reply) {
    const gist = request.params.gist;
    return reply.view('setup-communications', { gist });
  }
};
