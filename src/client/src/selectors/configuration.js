import get from "lodash/get";

export const selectSearchEngine = state =>
  get(state, ["configuration", "config", "search-engine"]);

export const selectBangs = state =>
  get(state, ["configuration", "config", "bangs"]);

export const selectRecords = state => get(state, ["configuration", "records"]);

export const FromConfiguration = {
  selectSearchEnging: configuration =>
    get(configuration, ["config", "search-engine"]),
  selectBangs: configuration => get(configuration, ["config", "bangs"]),
  selectRecords: configuration => get(configuration, ["records"])
};
