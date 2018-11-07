import get from "lodash/get";

export default {
  selectLoading: state => get(state, ["notifications", "loading"], false),
  selectItems: state => get(state, ["notifications", "items"], []),
  selectError: state => get(state, ["notifications", "error"], null)
};
