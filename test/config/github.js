const { expect } = require("chai");

const { getGistIdFromURL } = require("../../src/config/github");

describe("config URL parsing", () => {
  it("will extract the Gist ID from the Gist URL", () => {
    expect(
      getGistIdFromURL("https://gist.github.com/calebmpeterson/42")
    ).to.be.equal("42");
  });

  it("will throw when no URL is provided", () => {
    expect(getGistIdFromURL()).to.be.null;
  });

  it("will throw when an invalid URL is provided", () => {
    expect(getGistIdFromURL("https://www.google.com/")).to.be.null;
  });
});
