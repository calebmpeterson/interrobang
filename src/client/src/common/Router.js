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

  defaultSearch(searchEnginePattern, query) {
    return `${searchEnginePattern.replace("{{{s}}}", query)}`;
  }

  duckDuckGoSearch(query) {
    return `https://duckduckgo.com/?q=${query}`;
  }
}

module.exports = Router;
