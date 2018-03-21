const { get } = require('lodash');

function getApplicationName() {
  return get(process.env, ['VCAP_APPLICATION', 'name'], 'Interrobang');
}

function getApplicationVersion() {
  return get(process.env, ['VCAP_APPLICATION', 'version'], 'DEV');
}

module.exports = {
  getApplicationName,
  getApplicationVersion,
  SETUP_BROWSER_URL: 'https://www.howtogeek.com/114176/HOW-TO-EASILY-CREATE-SEARCH-PLUGINS-ADD-ANY-SEARCH-ENGINE-TO-YOUR-BROWSER/'
};
