import { Chronicle } from '../middleware/chronicle';
import ActionTypes from '../constants/ActionTypes';

import { viewAccountRecovered } from '../actions';

new Chronicle({
  name: 'Account Recovered',

  when: ActionTypes.REQUEST_ACCOUNT_RECOVERY_SUCCESS,

  then(state, action) {
    viewAccountRecovered();
  }
});
