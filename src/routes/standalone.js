const { map } = require("lodash");

const paths = [
  "/about/{splat*}",
  "/blog/{splat*}",
  "/pricing/{splat*}",
  "/pricing",
  "/styleguide/{splat*}",
  "/styleguide"
];

module.exports = map(paths, path => ({
  method: "GET",
  path,
  handler: (request, reply) => {
    return reply.view("standalone");
  }
}));
