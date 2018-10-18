const openSearchXml = require("../views/open-search");

module.exports = {
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    const { search, userId, redirect } = request.query;

    if (search === "opensearch" && userId) {
      return reply.view("landing-open-search", { userId, redirect });
    }

    return reply.view("landing");
  }
};
