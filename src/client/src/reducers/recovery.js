import { get, merge, isEmpty } from 'lodash';

import ActionTypes from '../constants/ActionTypes';

const DEFAULT_STATE = {
  username: '',
  canProceed: false,
  error: undefined
};

function canProceed(username) {
  return !isEmpty(username);
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.UPDATE_RECOVERY_USERNAME:
    return {
      username: action.username,
      canProceed: canProceed(action.username),
      error: undefined
    };
  case ActionTypes.REQUEST_ACCOUNT_RECOVERY_SUCCESS:
    return merge({}, state, {
      error: null
    });
  case ActionTypes.REQUEST_ACCOUNT_RECOVERY_FAILURE:
    return merge({}, state, {
      error: get(action, 'error.message'),
      canProceed: false
    });
  default:
    return state;
  }
}
