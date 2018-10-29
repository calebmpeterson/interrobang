if (process.env.NODE_ENV === "development") {
  module.exports = {
    method: "GET",
    path: "/style/{splat*}",
    handler: {
      proxy: {
        uri: "http://localhost:3001/style/{splat}"
      }
    }
  };
}
