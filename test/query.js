const { expect } = require("chai");

const { search } = require("../src/query");

describe("default search engine is DuckDuckGo", () => {
  it("should default to using DDG for search", () => {
    expect(search({}, "foo bar")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=foo bar",
      bang: "search-engine"
    });
  });
});

describe("custom search behavior", () => {
  const config = {
    "search-engine": `https://www.google.com/search?query={{{s}}}`
  };

  it("should resolve the default search engine", () => {
    expect(search(config, "")).to.be.deep.equal({
      target: "https://www.google.com/search?query=",
      bang: "search-engine"
    });
  });

  it("should handle search queries", () => {
    expect(search(config, "foo")).to.be.deep.equal({
      target: "https://www.google.com/search?query=foo",
      bang: "search-engine"
    });
    expect(search(config, "foo bar")).to.be.deep.equal({
      target: "https://www.google.com/search?query=foo bar",
      bang: "search-engine"
    });
  });
});

describe("duckduckgo search bang fallback", () => {
  const config = {
    "search-engine": "https://www.google.com/search?={{{s}}}"
  };

  it("should use duckduckgo for search bangs", () => {
    expect(search(config, "!foo bar baz")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=!foo bar baz",
      bang: "foo"
    });
  });
});

describe("custom bang usage", () => {
  const config = {
    bangs: {
      weather: "https://www.weather.com/?q={{{s}}}"
    }
  };

  it("should use custom bangs when defined", () => {
    expect(search(config, "!weather fort worth tx")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });

  it("should use custom bangs when defined, regardless of casing", () => {
    expect(search(config, "!Weather fort worth tx")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });
});

describe("funny character usage", () => {
  it("should perform a default search", () => {
    expect(search({}, "ć")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=ć",
      bang: "search-engine"
    });
  });
});

describe("irrelevant custom !bang placement", () => {
  const config = {
    bangs: {
      weather: "https://www.weather.com/?q={{{s}}}"
    }
  };

  it("query has a middle !bang", () => {
    expect(search(config, "fort worth !weather tx")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });

  it("query has a middle !Bang", () => {
    expect(search(config, "fort worth !Weather tx")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });

  it("query has an ending !bang", () => {
    expect(search(config, "fort worth tx !weather")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });

  it("query has an ending !Bang", () => {
    expect(search(config, "fort worth tx !Weather")).to.be.deep.equal({
      target: "https://www.weather.com/?q=fort worth tx",
      bang: "weather"
    });
  });
});

describe("irrelevant public !bang placement", () => {
  const config = {
    bangs: {}
  };

  it("query has a middle !bang", () => {
    expect(search(config, "fort worth !weather tx")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=fort worth !weather tx",
      bang: "weather"
    });
  });

  it("query has a middle !Bang", () => {
    expect(search(config, "fort worth !Weather tx")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=fort worth !Weather tx",
      bang: "weather"
    });
  });

  it("query has an ending !bang", () => {
    expect(search(config, "fort worth tx !weather")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=fort worth tx !weather",
      bang: "weather"
    });
  });

  it("query has an ending !Bang", () => {
    expect(search(config, "fort worth tx !Weather")).to.be.deep.equal({
      target: "https://www.duckduckgo.com/?q=fort worth tx !Weather",
      bang: "weather"
    });
  });
});
