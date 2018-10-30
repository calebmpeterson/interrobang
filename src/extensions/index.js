module.exports = function(server) {
  require("./analytics")(server);
  require("./memory-usage")(server);
};
