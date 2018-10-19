const { expect } = require("chai");

const { suggest } = require("../../src/suggestions");

const TEST_USER_ID = "123456";

const config = {
  bangs: {
    foo: "https://example.com/search?q={{{s}}}"
  }
};

const metaBangResults = [
  { query: "!!", count: 1, url: `/b/${TEST_USER_ID}` },
  { query: "!!config", count: 1, url: `/account/#/configuration` }
];

describe("suggestion generation", () => {
  describe("degenerate behavior", () => {
    it("is okay with null/undefined config", () => {
      expect(suggest()).to.deep.equal({ query: "", results: [] });
    });

    it("is okay with null/undefined query", () => {
      expect(suggest(TEST_USER_ID, {})).to.deep.equal({
        query: "",
        results: []
      });
    });

    it("is okay with missing bangs", () => {
      expect(suggest(TEST_USER_ID, {})).to.deep.equal({
        query: "",
        results: []
      });
    });
  });

  describe("proper behavior", () => {
    it("pass the query back in the result object", () => {
      expect(suggest(TEST_USER_ID, config, "")).to.haveOwnProperty("query", "");
      expect(suggest(TEST_USER_ID, config, "foo")).to.haveOwnProperty(
        "query",
        "foo"
      );
      expect(suggest(TEST_USER_ID, config, "!")).to.haveOwnProperty(
        "query",
        "!"
      );
      expect(suggest(TEST_USER_ID, config, "!foo")).to.haveOwnProperty(
        "query",
        "!foo"
      );
    });

    it("always includes !! and !!config if the query starts with a !", () => {
      expect(suggest(TEST_USER_ID, config, "!")).to.deep.include({
        results: [...metaBangResults]
      });
    });

    it("includes all !bangs which start with the query", () => {
      expect(suggest(TEST_USER_ID, config, "!f")).to.deep.include({
        results: [
          {
            query: "!foo",
            count: 1,
            url: `/b/${TEST_USER_ID}/search?query=!foo`
          },
          ...metaBangResults
        ]
      });
    });
  });
});
