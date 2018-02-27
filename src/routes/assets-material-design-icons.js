module.exports = {
  method: 'GET',
  path: '/assets/mdi/{splat*}',
  handler: {
    directory: {
      path: './node_modules/mdi/'
    }
  }
};
