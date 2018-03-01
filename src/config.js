const { get, merge } = require('lodash');
const Gists = require('gists');

const CONFIG_PATH = ['files', 'config.json', 'content'];
const DEFAULT_CONFIG = '{}';

class ConfigParsingError extends Error {
  constructor(params) {
    super(params.message);
    this.message = params.message;
    this.config = params.config;
  }
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
        const configJSON = get(result, CONFIG_PATH, DEFAULT_CONFIG);
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
  getConfig
}
