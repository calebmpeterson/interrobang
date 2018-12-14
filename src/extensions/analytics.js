const {
  first,
  get,
  has,
  startsWith,
  endsWith,
  isEqual,
  isEmpty,
  isString,
  isArray
} = require("lodash");
const ua = require("universal-analytics");
const uuid = require("uuid/v4");

const { UA_ACCOUNT_ID } = require("../env");

const GA_COOKIE = "ga";

const isAssetRequest = request =>
  startsWith(request.url.pathname, "/assets") ||
  startsWith(request.url.pathname, "/style");
const isPingRequest = request => isEqual(request.url.pathname, "/ping");
const isSuggestionRequest = request =>
  endsWith(request.url.pathname, "/suggest");

const getClientId = request => {
  if (has(request, "params.userId")) {
    return get(request, "params.userId");
  }

  const clientIdState = get(request, "state.ga");
  if (isEmpty(clientIdState)) {
    return get(request, "params.userId", uuid());
  }
  if (isArray(clientIdState)) {
    return first(clientIdState);
  }
  if (isString(clientIdState)) {
    return clientIdState;
  }
  throw new Error("unhandled analytics cookie state");
};

const getAnalytics = request => {
  const clientId = getClientId(request);
  console.log(`Get analytics visitor for ${clientId}`);
  return ua(UA_ACCOUNT_ID, clientId, { https: true });
};

module.exports = function(server) {
  server.state(GA_COOKIE, {
    isSecure: process.env.NODE_ENV !== "development",

    autoValue: async request => {
      if (isAssetRequest(request)) {
        return null;
      }

      return getClientId(request);
    }
  });

  server.method("getClientId", getClientId, {});
  server.method("getAnalyticsVisitor", getAnalytics, {});

  server.ext({
    type: "onPreResponse",
    method: (request, reply) => {
      try {
        const { pathname } = request.url;
        const { path } = request.route;
        if (
          !isAssetRequest(request) &&
          !isPingRequest(request) &&
          !isSuggestionRequest(request)
        ) {
          console.log(
            "Request",
            request.route.path,
            request.url.pathname,
            request.params
          );

          const visitor = request.server.methods.getAnalyticsVisitor(request);
          visitor.pageview(pathname, "hostname", path).send();
        }
      } catch (e) {
        console.error(`Failed to record request`, e);
      } finally {
        return reply.continue;
      }
    }
  });
};
