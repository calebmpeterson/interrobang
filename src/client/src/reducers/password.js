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

    default:
      return state;
  }
}
