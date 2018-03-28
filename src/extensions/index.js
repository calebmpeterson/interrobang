const { get, startsWith, first, isEmpty, isString, isArray } = require('lodash');
const ua = require('universal-analytics');
const uuid = require('uuid/v4');

const { UA_ACCOUNT_ID } = require('../env');

const GA_COOKIE = 'ga';

const isAssetRequest = (request) => startsWith(request.url.pathname, '/assets');

const getClientId = (request) => {
  const clientIdState = request.state.ga;
  if (isEmpty(clientIdState)) {
    return uuid();
  }
  if (isArray(clientIdState)) {
    return first(clientIdState);
  }
  if (isString(clientIdState)) {
    return clientIdState;
  }
  throw new Error('unhandled analytics cookie state');
};

const getAnalytics = (request) => {
  const clientId = getClientId(request);
  console.log(`Get analytics visitor for ${clientId}`);
  return ua(UA_ACCOUNT_ID, clientId, { https: true });
};

module.exports = function (server) {
  server.state(GA_COOKIE, {
    isSecure: process.env.NODE_ENV !== 'development',

    autoValue: async (request) => {
      if (isAssetRequest(request)) {
        return null;
      }

      return getClientId(request);
    }
  });

  server.method('getClientId', getClientId, {});
  server.method('getAnalyticsVisitor', getAnalytics, {});

  server.ext({
    type: 'onPreResponse',
    method: (request, reply) => {
      try {
        const { pathname } = request.url;
        const { path } = request.route;
        if (!isAssetRequest(request)) {
          console.log('Request', request.route.path, request.url.pathname);

          const visitor = request.server.methods.getAnalyticsVisitor(request);
          visitor.pageview(pathname, 'hostname', path).send();
        }
      }
      catch (e) {
        console.error(`Failed to record request`, e);
      }
      finally {
        return reply.continue;
      }
    }
  });
};
