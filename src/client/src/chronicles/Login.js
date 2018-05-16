import { Chronicle } from '../middleware/chronicle';
import ActionTypes from '../constants/ActionTypes';

import { viewLogin, viewConfiguration, loadConfiguration } from '../actions';

new Chronicle({
  name: 'Login',

  when: ActionTypes.LOGIN_USER_SUCCESS,

  then(state, action) {
    if (!action.dueToRegistration) {
      viewConfiguration();
      loadConfiguration(state.user);
    }
  }
});

new Chronicle({
  name: 'Load Configuration',

  when: ActionTypes.REQUEST_CURRENT_USER_SUCCESS,

  then(state, action) {
    if (!state.user.missing) {
      loadConfiguration(state.user);
    }
    else if (state.router.location.pathname !== '/register') {
      viewLogin();
    }
  }
});

new Chronicle({
  name: 'Re-login',

  when: ActionTypes.REQUEST_CURRENT_USER_FAILURE,

  then(state, action) {
    viewLogin();
  }
});
