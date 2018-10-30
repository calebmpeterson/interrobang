const { expect } = require("chai");
const Router = require("../../src/client/src/common/Router");

describe("the Router", () => {
  const router = new Router("");

  it("can construct a Router", () => {
    expect(router).to.not.be.null;
  });

  it("handles user config search-engine url generation", () => {
    expect(
      router.defaultSearch("https://duckduckgo.com/?q={{{s}}}", "foo bar baz")
    ).to.equal("https://duckduckgo.com/?q=foo bar baz");
  });

  it("handles DuckDuckGo search url generation", () => {
    expect(router.duckDuckGoSearch("foo bar baz")).to.equal(
      "https://duckduckgo.com/?q=foo bar baz"
    );
  });
});
