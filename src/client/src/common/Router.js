class Router {
  constructor(root) {
    this.root = root;
  }

  configuration() {
    return `${this.root}/account/#/configuration`;
  }

  landing(userId) {
    return `${this.root}/b/${userId}`;
  }

  search(userId, query) {
    return `${this.root}/b/${userId}/search?query=${query}`;
  }
}

module.exports = Router;
