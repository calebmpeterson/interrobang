const { Server } = require("hapi");
const ReactViews = require("hapi-react-views");

const { initializeCache } = require("./cache");

require("babel-core/register")({
  presets: ["react", "env"]
});

require("babel-polyfill");

const { get } = require("lodash");

const extensions = require("./extensions");
const routes = require("./routes");

require("./resources/loaders/markdown-loader");

const PORT = process.env.PORT || 3333;
const server = new Server({
  port: PORT,
  debug: {
    log: ["error"],
    request: ["error"]
  }
});

async function initialize() {
  await server.register(require("inert"));
  await server.register(require("vision"));

  await server.register({
    plugin: require("hapi-dev-errors"),
    options: {
      showErrors: process.env.NODE_ENV !== "production"
    }
  });

  initializeCache(server);

  server.views({
    engines: {
      jsx: ReactViews
    },
    compileOptions: {},
    relativeTo: __dirname,
    path: "views"
  });

  extensions(server);
  routes(server);

  await server.start(error => {
    if (error) {
      throw error;
    }

    console.log(`Server running on port ${PORT}`);
  });
}

initialize();
