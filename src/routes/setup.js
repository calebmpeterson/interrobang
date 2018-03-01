module.exports = {
  method: 'GET',
  path: '/setup/complete',
  handler: (request, reply) => {
    const gistURL = request.query.gist;
    console.log(`Setup ${gistURL}`);
    return reply.redirect(`/${request.query.gist}`);
  }
};
