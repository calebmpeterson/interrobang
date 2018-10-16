const openSearchXml = require("../views/open-search");

module.exports = {
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    console.log(request.query);
    const { search, userId } = request.query;

    if (search === "opensearch" && userId) {
      const response = reply.response(
        openSearchXml({ searchUrl: `b/${userId}` })
      );
      response.type("application/xml");
      return response;
    }

    return reply.view("landing");
  }
};
