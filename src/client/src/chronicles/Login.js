import includes from 'lodash/includes';

import { Chronicle } from '../middleware/chronicle';
import ActionTypes from '../constants/ActionTypes';

import { viewLogin, viewConfiguration, loadConfiguration } from '../actions';

const NO_LOGIN_REDIRECT = [
  '/register',
  '/recover',
  '/recovered'
];

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
    else if (!includes(NO_LOGIN_REDIRECT, state.router.location.pathname)) {
      viewLogin();
    }
  }
});

new Chronicle({
  name: 'Re-login',

  when: ActionTypes.REQUEST_CURRENT_USER_FAILURE,

  then(state, action) {
    if (!includes(NO_LOGIN_REDIRECT, state.router.location.pathname)) {
      viewLogin();
    }
  }
});
