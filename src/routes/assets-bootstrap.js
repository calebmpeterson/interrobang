module.exports = {
  method: 'GET',
  path: '/assets/bootstrap/{splat*}',
  handler: {
    directory: {
      path: './node_modules/bootstrap/dist/'
    }
  }
};
