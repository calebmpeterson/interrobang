import { LOCATION_CHANGE } from "react-router-redux";
import { get, merge, isEmpty } from "lodash";

import { decodeParams } from "../utils/UrlUtils";
import ActionTypes from "../constants/ActionTypes";

const DEFAULT_STATE = {
  username: "",
  password: "",
  canProceed: false,
  error: ""
};

function canProceed(username, password) {
  return !isEmpty(username) && !isEmpty(password);
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_LOGIN_USERNAME:
      return merge({}, state, {
        username: action.username,
        canProceed: canProceed(action.username, state.password)
      });
    case ActionTypes.UPDATE_LOGIN_PASSWORD:
      return merge({}, state, {
        password: action.password,
        canProceed: canProceed(state.username, action.password)
      });
    case ActionTypes.LOGIN_USER_SUCCESS:
      return merge({}, state, {
        welcome: true,
        error: null,
        password: ""
      });
    case ActionTypes.LOGIN_USER_FAILURE:
      return merge({}, state, {
        error: get(action, "error.message"),
        canProceed: false
      });
    case LOCATION_CHANGE:
      return merge({}, state, {
        redirect: get(
          decodeParams(action.payload.search),
          "redirect",
          state.redirect
        )
      });
    default:
      return state;
  }
}
