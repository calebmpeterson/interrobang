import { get, merge, isEmpty } from 'lodash';

import ActionTypes from '../constants/ActionTypes';

const DEFAULT_STATE = {
  username: '',
  password: '',
  passwordCheck: '',
  passwordMatch: true,
  canProceed: false,
  error: ''
};

function canProceed(username, password, passwordCheck) {
  return !isEmpty(username) && !isEmpty(password) && !isEmpty(passwordCheck) && password === passwordCheck;
}

function verifyPassword(password, passwordCheck) {
  return password === passwordCheck;
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.UPDATE_REGISTRATION_USERNAME:
    return merge({}, state, {
      username: action.username,
      canProceed: canProceed(action.username, state.password, state.passwordCheck)
    });
  case ActionTypes.UPDATE_REGISTRATION_PASSWORD:
    return merge({}, state, {
      password: action.password,
      passwordMatch: verifyPassword(action.password, state.passwordCheck),
      canProceed: canProceed(state.username,action.password, state.passwordCheck)
    });
  case ActionTypes.UPDATE_REGISTRATION_PASSWORD_CHECK:
    return merge({}, state, {
      passwordCheck: action.passwordCheck,
      passwordMatch: verifyPassword(state.password, action.passwordCheck),
      canProceed: canProceed(state.username, state.password, action.passwordCheck)
    });
  case ActionTypes.REGISTER_USER_SUCCESS:
    return merge({}, state, {
      welcome: true,
      error: null,
      password: '',
      passwordCheck: ''
    });
  case ActionTypes.REGISTER_USER_FAILURE:
    return merge({}, state, {
      error: get(action, 'error.message'),
      canProceed: false
    });
  default:
    return state;
  }
}
