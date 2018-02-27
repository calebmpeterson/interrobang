module.exports = {
  method: 'GET',
  path: '/setup',
  handler: (request, reply) => {
    return reply.redirect(`/${request.query.gist}`);
  }
};
