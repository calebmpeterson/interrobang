module.exports = {
  method: 'GET',
  path: '/assets/bootstrap/css/{splat*}',
  handler: {
    directory: {
      path: './node_modules/bootswatch/dist/flatly'
    }
  }
};
