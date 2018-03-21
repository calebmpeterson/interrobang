const { isEmpty } = require('lodash');

const { getGistIdFromURL } = require('../config');

module.exports = {
  method: 'GET',
  path: '/setup/check',
  handler: (request, reply) => {
    const gistURL = request.query.gistURL;
    const gistId = getGistIdFromURL(gistURL);
    if (gistId) {
      console.log(`Check setup for '${gistURL}'`);
      return reply.redirect(`/setup/browser/${gistId}`);
    }
    else if (isEmpty(gistURL)) {
      return reply.view('setup-start', {
        error: `Please provide a public GitHub Gist URL`
      });
    }
    else {
      return reply.view('setup-start', {
        gistURL,
        error: `'${gistURL}' is an invalid public GitHub Gist URL`
      });
    }
  }
};
