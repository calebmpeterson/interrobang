const { Server } = require('hapi');
const Gists = require('gists');

const { get } = require('lodash');

const { search } = require('./query');

const PORT = 3333;
const server = new Server({ port: PORT });

const CONFIG_PATH = ['files', 'config.json', 'content'];
const DEFAULT_CONFIG = '{}';

async function getConfig(id) {
  return new Promise((resolve, reject) => {
    const gist = new Gists();
    gist.download({ id }, (error, result) => {
      if (error) {
        console.error(`Failed to fetch Gist ${id}`, error);
        reject(error);
      }
      else {
        const config = get(result, CONFIG_PATH, DEFAULT_CONFIG);
        resolve(JSON.parse(config));
      }
    });
  });
}

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
    const config = await getConfig(request.params.gist);
    return config;
  }
});

server.route({
  method: 'GET',
  path: '/{gist}/url/{splat*}',
  handler: async (request, reply) =>{
    const config = await getConfig(request.params.gist);
    const target = search(config, request.params.splat);
    return target;
  }
});

server.route({
  method: 'GET',
  path: '/{gist}/{splat*}',
  handler: async (request, reply) =>{
    const config = await getConfig(request.params.gist);
    const target = search(config, request.params.splat);
    return reply.redirect(target);
  }
});

server.start((error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`)
});
