const { get } = require('lodash');
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
        try {
          resolve(JSON.parse(config));
        }
        catch (e) {
          reject(new ConfigParsingError({
            message: `Failed to parse config.json`,
            config
          }));
        }
      }
    });
  });
}

module.exports = {
  getConfig
}
