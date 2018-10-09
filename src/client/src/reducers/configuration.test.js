import ActionCreators from "../actions/creators";
import configuration, { ONBOARDING_CONFIGURATION } from "./configuration";

import { harness } from "../utils/TestUtils";

const reducer = harness(configuration);

describe("configuration state management", () => {
  reducer("has default state", {
    before: undefined,
    action: {},
    after: {
      loading: false,
      loaded: false,
      persisting: false,
      persisted: false,
      error: undefined,
      config: undefined
    }
  });

  reducer("handles default configuration when onboarding", {
    before: {},
    action: ActionCreators.registerUserSuccess(
      {},
      "test@example.com",
      "s3cr3t"
    ),
    after: {
      config: ONBOARDING_CONFIGURATION
    }
  });

  it("handles configuration loading", () => {});

  reducer("handles updating the default search pattern", {
    before: { config: { "search-engine": "foo" } },
    action: ActionCreators.updateSearchEngine("bar"),
    after: { config: { "search-engine": "bar" } }
  });

  reducer("handles adding a new bang (which is empty be default)", {
    before: { config: { bangs: {} } },
    action: ActionCreators.addBang(),
    after: {
      config: {
        bangs: { "": "" }
      },
      records: [{ index: 0, bang: "", pattern: "" }]
    }
  });

  reducer("handles updating an existing bang", {
    before: {
      config: { bangs: { "": "" } },
      records: [{ index: 0, bang: "", pattern: "" }]
    },
    action: ActionCreators.updateBang("", "foo"),
    after: {
      config: {
        bangs: { foo: "" }
      },
      records: [{ index: 0, bang: "foo", pattern: "" }]
    }
  });

  reducer("handles updating an existing bang pattern", {
    before: {
      config: { bangs: { foo: "" } },
      records: [{ index: 0, bang: "foo", pattern: "" }]
    },
    action: ActionCreators.updateBangPattern(
      "foo",
      "https://example.com/search?q={{{s}}}"
    ),
    after: {
      config: {
        bangs: { foo: "https://example.com/search?q={{{s}}}" }
      },
      records: [
        {
          index: 0,
          bang: "foo",
          pattern: "https://example.com/search?q={{{s}}}"
        }
      ]
    }
  });

  reducer("handles deleting a bang", {
    before: {
      config: { bangs: { foo: "https://example.com/search?q={{{s}}}" } },
      records: [
        {
          index: 0,
          bang: "foo",
          pattern: "https://example.com/search?q={{{s}}}"
        }
      ]
    },
    action: ActionCreators.deleteBang("foo"),
    after: {
      config: {
        bangs: {}
      },
      records: []
    }
  });
});
