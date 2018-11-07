import get from "lodash/get";

export const selectLoading = state =>
  get(state, ["notifications", "loading"], false);

export const selectNotificationItems = state =>
  get(state, ["notifications", "items"], []);

export const selectError = state =>
  get(state, ["notifications", "error"], null);
