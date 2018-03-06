const { get, has, merge, size, isEmpty } = require('lodash');
const Gists = require('gists');

const CONFIG_PATH_1 = ['files', 'interrobang.json', 'content'];
const CONFIG_PATH_2 = ['files', 'config.json', 'content'];
const DEFAULT_CONFIG = '{}';

const GIST_URL_PATTERN = /https:\/\/gist\.github\.com\/(.*)\/(.*)/;
const GIST_ID_INDEX = 2;

class ConfigParsingError extends Error {
  constructor(params) {
    super(params.message);
    this.message = params.message;
    this.config = params.config;
  }
}

function getGistIdFromURL(url) {
  if (isEmpty(url)) {
    return null;
  }
  const match = GIST_URL_PATTERN.exec(url);
  if (size(match) === 3) {
    return get(match, GIST_ID_INDEX);
  }
  return null;
}

function getConfigFromGist(gist) {
  if (has(gist, CONFIG_PATH_1)) {
    return get(gist, CONFIG_PATH_1);
  }
  if (has(gist, CONFIG_PATH_2)) {
    return get(gist, CONFIG_PATH_2);
  }
  return DEFAULT_CONFIG;
}

function createExtendedConfig(gistId) {
  return {
    'bangs': {
      '!config': `/${gistId}/config/edit`
    }
  };
}

async function getConfig(id) {
  return new Promise((resolve, reject) => {
    const gist = new Gists();
    gist.download({ id }, (error, result) => {
      if (error) {
        console.error(chalk`{red Failed to fetch Gist ${id}}`, error);
        reject(error);
      }
      else {
        const configJSON = getConfigFromGist(result);
        try {
          const config = JSON.parse(configJSON);
          const extendedConfig = merge({}, config, createExtendedConfig(id));
          resolve(extendedConfig);
        }
        catch (e) {
          reject(new ConfigParsingError({
            message: `Failed to parse config.json`,
            config: configJSON
          }));
        }
      }
    });
  });
}

module.exports = {
  getGistIdFromURL,
  getConfig
}
