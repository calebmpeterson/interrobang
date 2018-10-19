const Wreck = require("wreck");
const { merge } = require("lodash");

const router = require("../services/router");

const APP_ID = process.env.APP_ID;
const REST_KEY = process.env.REST_KEY;

console.log(`Backendless APP ID:  ${APP_ID}`);
console.log(`Backendless REST ID: ${REST_KEY}`);

function getConfigFileUrl(userId) {
  return `https://api.backendless.com/${APP_ID}/${REST_KEY}/files/configurations/${userId}.config.json`;
}

function createExtendedConfig(userId) {
  return {
    bangs: {
      "!": router.landing(userId),
      "!config": router.configuration(userId)
    }
  };
}

async function getConfig(userId) {
  const url = getConfigFileUrl(userId);
  console.log(`Get config: ${url}`);

  const { payload } = await Wreck.get(url);
  const config = JSON.parse(payload.toString());

  return merge({}, config, createExtendedConfig(userId));
}

module.exports = {
  getConfig
};
