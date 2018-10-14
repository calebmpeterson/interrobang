const { expect } = require("chai");

const { fetchDuckDuckGoBangs } = require("../../src/suggestions/duckduckgo");

describe("DuckDuckGo !bang scraping", () => {
  it("should return a large array", done => {
    fetchDuckDuckGoBangs().then(bangs => {
      expect(bangs).to.be.an.instanceOf(Array);
      expect(bangs.length).to.be.greaterThan(10000);
      done();
    });
  });

  it("should pass a random sample check", done => {
    fetchDuckDuckGoBangs().then(bangs => {
      expect(bangs).to.include("github");
      expect(bangs).to.include("hn");
      expect(bangs).to.include("map");
      expect(bangs).to.include("quora");
      expect(bangs).to.include("reddit");
      expect(bangs).to.include("wa");
      expect(bangs).to.include("wiki");
      done();
    });
  });
});
