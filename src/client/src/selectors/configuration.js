import get from "lodash/get";

export const selectSearchEngine = state =>
  get(state, ["configuration", "config", "search-engine"]);

export const selectBangs = state =>
  get(state, ["configuration", "config", "bangs"]);

export const selectRecords = state => get(state, ["configuration", "records"]);

export const selectDeleted = state => get(state, ["configuration", "deleted"]);

export const FromConfiguration = {
  selectSearchEngine: configuration =>
    get(configuration, ["config", "search-engine"]),

  selectBangs: configuration => get(configuration, ["config", "bangs"]),

  selectRecords: configuration => get(configuration, ["records"]),

  selectDeleted: configuration => get(configuration, ["deleted"])
};
