module.exports = {
  method: 'GET',
  path: '/setup',
  handler: (request, reply) => {
    return reply.view('setup-start');
  }
};
