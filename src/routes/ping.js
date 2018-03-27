module.exports = {
  method: 'GET',
  path: '/ping',
  handler: (request, reply) => {
    return 'pong';
  }
};
