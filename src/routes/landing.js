module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.view('setup');
  }
};
