const { expect } = require("chai");

const {
  convertToOpenSearchSuggestions
} = require("../../src/suggestions/open-search");

describe("OpenSearch suggestions formatting", () => {
  const suggestions = {
    query: "sea",
    results: [
      { query: "sears", count: 7390000, url: "https://example.com?q=sears" },
      {
        query: "search engine",
        count: 17900000,
        url: "https://example.com?q=search+engine"
      }
    ]
  };

  const got = convertToOpenSearchSuggestions(suggestions);

  const expected = [
    "sea",
    ["sears", "search engine"],
    ["7,390,000 results", "17,900,000 results"],
    ["https://example.com?q=sears", "https://example.com?q=search+engine"]
  ];

  const empty = ["", [], [], []];

  it("should convert a suggestions object to an OpenSearch completions list", () => {
    expect(got).to.deep.equal(expected);
  });

  it("should gracefully handle an empty suggestion set", () => {
    expect(
      convertToOpenSearchSuggestions({ query: "", results: [] })
    ).to.deep.equal(empty);
  });
});
