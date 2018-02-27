module.exports = {
  method: 'GET',
  path: '/assets/jquery/{splat*}',
  handler: {
    directory: {
      path: './node_modules/jquery/'
    }
  }
};
