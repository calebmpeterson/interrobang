import { Chronicle } from '../middleware/chronicle';
import ActionTypes from '../constants/ActionTypes';

import { viewLogin } from '../actions';

new Chronicle({
  name: 'Logout',

  when: ActionTypes.LOGOUT_SUCCESS,

  then(state, action) {
    viewLogin();
  }
});
