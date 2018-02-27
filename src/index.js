const { Server } = require('hapi');
const ReactViews = require('hapi-react-views');
const Handlebars = require('handlebars');

const Gists = require('gists');

require('babel-core/register')({
  presets: ['react', 'env']
});

const { get } = require('lodash');

const routes = require('./routes');
const { search } = require('./query');
const openSearchXml = require('./views/open-search');

const PORT = process.env.PORT || 3333;
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

async function initialize() {
  await server.register(require('inert'));
  await server.register(require('vision'));

  server.views({
    engines: {
      jsx: ReactViews
    },
    compileOptions: {},
    relativeTo: __dirname,
    path: 'views'
  });

  routes(server);

  server.route({
    method: 'GET',
    path: '/{gist}',
    handler: (request, reply) => {
      return reply.view('index', { gist: request.params.gist });
    }
  });

  server.route({
    method: 'GET',
    path: '/{gist}/open-search.xml',
    handler: (request, reply) => {
      const response = reply.response(openSearchXml({ gist: request.params.gist }));
      response.type('application/xml');
      return response;
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
    path: '/{gist}/search',
    handler: async (request, reply) => {
      const config = await getConfig(request.params.gist);
      const target = search(config, request.query.query);
      return reply.redirect(target);
    }
  });

  await server.start((error) => {
    if (error) {
      throw error;
    }

    console.log(`Server running on port ${PORT}`);
  });
}

initialize();
