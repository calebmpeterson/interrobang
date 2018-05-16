import ActionTypes from '../constants/ActionTypes';

const DEFAULT_STATE = {
  missing: true,
  loading: true
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.REQUEST_CURRENT_USER:
    return { loading: true };

  case ActionTypes.REQUEST_CURRENT_USER_SUCCESS:
  case ActionTypes.REGISTER_USER_SUCCESS:
  case ActionTypes.LOGIN_USER_SUCCESS:
    return action.user || DEFAULT_STATE;

  case ActionTypes.LOGOUT_SUCCESS:
    return DEFAULT_STATE;

  default:
    return state;
  }
}
