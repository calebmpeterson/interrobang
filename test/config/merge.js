const { expect } = require("chai");
const { mergeConfigurations } = require("../../src/config/merge");

describe("configuration merge", () => {
  describe("degenerate cases", () => {
    it("handles no configs", () => {
      expect(mergeConfigurations()).to.deep.equal({ bangs: {} });
    });

    it("handles only a userConfig", () => {
      expect(mergeConfigurations({ bangs: { foo: "pattern" } })).to.deep.equal({
        bangs: { foo: "pattern" }
      });
    });
  });

  describe("proper behavior", () => {
    it("merges all given configs", () => {
      expect(
        mergeConfigurations(
          { bangs: { foo: "pattern" } },
          { bangs: { bar: "pattern" } }
        )
      ).to.deep.equal({ bangs: { foo: "pattern", bar: "pattern" } });
    });

    it("the last config, i.e. userConfig always overrides other configs", () => {
      expect(
        mergeConfigurations(
          { bangs: { foo: "override" } },
          { bangs: { foo: "pattern-1" } },
          { bangs: { foo: "pattern-2" } }
        )
      ).to.deep.equal({ bangs: { foo: "override" } });
    });
  });
});
