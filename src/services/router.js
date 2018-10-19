const Router = require("../client/src/common/Router");

const root =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://interrobang.online";

module.exports = new Router(root);
