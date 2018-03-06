const { getGistIdFromURL } = require('../config');

module.exports = {
  method: 'GET',
  path: '/setup/complete',
  handler: (request, reply) => {
    const gistURL = request.query.gistURL;
    const gistId = getGistIdFromURL(gistURL);
    if (gistId) {
    console.log(`Setup ${gistURL}`);
      return reply.redirect(`/${request.query.gist}`);
    }
    else {
      return reply.view('setup-start', { gistURL, error: `'${gistURL}' is an invalid public GitHub Gist URL` });
    }
  }
};
