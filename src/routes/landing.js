const openSearchXml = require("../views/open-search");

module.exports = {
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    console.log(request.query);
    const { search, userId } = request.query;

    if (search === "opensearch" && userId) {
      return reply.view("landing-open-search", { userId });
    }

    return reply.view("landing");
  }
};
