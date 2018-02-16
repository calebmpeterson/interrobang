const { Server } = require('hapi');
const Gists = require('gists');

const { get } = require('lodash');

const PORT = 3333;
const server = new Server({ port: PORT });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return `Hello, world`;
  }
});

server.route({
  method: 'GET',
  path: '/{gist}/config',
  handler: async (request, reply) => {
    const gist = new Gists();

    return new Promise((resolve, reject) => {
      gist.download({ id: request.params.gist },(error, result) => {
        console.log(result);
        const config = get(result, ['files', 'config.json', 'content'], {});
        resolve(config);
      });
    });
  }
});

server.start((error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`)
});
