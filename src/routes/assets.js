module.exports = {
  method: 'GET',
  path: '/assets/{splat*}',
  handler: {
    directory: {
      path: './assets/'
    }
  }
};
