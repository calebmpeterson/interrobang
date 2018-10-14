import isEmpty from "lodash/isEmpty";
import merge from "lodash/merge";

import ActionTypes from "../constants/ActionTypes";
import { verifyPassword } from "../utils/PasswordUtils";

export function canProceed(password, passwordCheck) {
  return (
    !isEmpty(password) && !isEmpty(passwordCheck) && password === passwordCheck
  );
}

const DEFAULT_STATE = {
  newPassword: "",
  newPasswordCheck: "",
  newPasswordMatch: true,
  canChangePassword: false
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_NEW_PASSWORD:
      return merge({}, state, {
        newPassword: action.password,
        newPasswordMatch: verifyPassword(
          action.password,
          state.newPasswordCheck
        ),
        canChangePassword: canProceed(action.password, state.newPasswordCheck)
      });

    case ActionTypes.UPDATE_NEW_PASSWORD_CHECK:
      return merge({}, state, {
        newPasswordCheck: action.password,
        newPasswordMatch: verifyPassword(action.password, state.newPassword),
        canChangePassword: canProceed(action.password, state.newPassword)
      });

    case ActionTypes.SUBMIT_PASSWORD_CHANGE_SUCCESS:
      return merge({}, state, {
        newPassword: "",
        newPasswordCheck: "",
        newPasswordMatch: verifyPassword("", ""),
        canChangePassword: canProceed("", ""),
        passwordChanged: true
      });

    case ActionTypes.SUBMIT_PASSWORD_CHANGE_FAILURE:
      return merge({}, state, {
        passwordChanged: false,
        error: "boom!"
      });

    case ActionTypes.LOGIN_USER_SUCCESS:
    case ActionTypes.LOGOUT_SUCCESS:
      return DEFAULT_STATE;

    default:
      return state;
  }
}
