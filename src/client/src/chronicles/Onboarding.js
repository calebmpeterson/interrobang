import { Chronicle } from '../middleware/chronicle';
import ActionTypes from '../constants/ActionTypes';

import { loginUser, viewConfigurationSetup, viewBrowserSetup, viewLandingPage } from '../actions';


new Chronicle({
  name: 'Post-registration Login',

  when: ActionTypes.REGISTER_USER_SUCCESS,

  then(state, action, dispatch) {
    const credentials = {
      username: action.username,
      password: action.password
    };
    dispatch(loginUser(credentials, true));
  }
});

new Chronicle({
  name: 'Setup Configuration',

  when: ActionTypes.REGISTER_USER_SUCCESS,

  then() {
    viewConfigurationSetup();
  }
});

new Chronicle({
  name: 'Setup Browser',

  when: [
    ActionTypes.PERSIST_CONFIGURATION_SUCCESS,
    ActionTypes.PERSIST_CONFIGURATION_FAILURE
  ],

  then(state, action) {
    if (action.setup) {
      viewBrowserSetup();
    }
  }
});

new Chronicle({
  name: 'Post-subscription Redirect',

  when: ActionTypes.SUBMIT_SUBSCRIPTION_UPDATE_SUCCESS,

  then(state, action) {
    if (action.signup) {
      viewLandingPage();
    }
  }
});
