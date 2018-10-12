import { Chronicle } from "../middleware/chronicle";
import ActionTypes from "../constants/ActionTypes";

import { saveConfiguration } from "../actions";

new Chronicle({
  name: "Delete All Data",

  when: ActionTypes.DELETE_ALL_DATA,

  then(state, action) {
    saveConfiguration();
  }
});
