const { get } = require('lodash');

function getApplicationName() {
  return get(process.env, ['VCAP_APPLICATION', 'name'], 'Interrobang');
}

function getApplicationVersion() {
  return get(process.env, ['VCAP_APPLICATION', 'version'], 'DEV');
}

module.exports = {
  getApplicationName,
  getApplicationVersion
};
