import get from "lodash/get";

export const selectPostLoginRedirect = state =>
  get(state, ["login", "redirect"]);
