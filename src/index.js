const { Server } = require('hapi');
const ReactViews = require('hapi-react-views');
const Handlebars = require('handlebars');

require('babel-core/register')({
  presets: ['react', 'env']
});

require('babel-polyfill');

const { get } = require('lodash');

const routes = require('./routes');

const PORT = process.env.PORT || 3333;
const server = new Server({ port: PORT });

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

  await server.start((error) => {
    if (error) {
      throw error;
    }

    console.log(`Server running on port ${PORT}`);
  });
}

initialize();
