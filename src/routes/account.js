module.exports = {
  method: 'GET',
  path: '/account/{splat*}',
  handler: {
    directory: {
      path: './src/client/build/'
    }
  }
};
