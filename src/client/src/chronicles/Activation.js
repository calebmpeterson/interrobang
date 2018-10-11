import isEmpty from "lodash/isEmpty";

import { Chronicle } from "../middleware/chronicle";
import ActionTypes from "../constants/ActionTypes";

import { submitActivationUpdate } from "../actions";

new Chronicle({
  name: "Activation",

  when: ActionTypes.PERSIST_CONFIGURATION_SUCCESS,

  then(state, action) {
    const { config } = action;
    if (config && !isEmpty(config.bangs)) {
      submitActivationUpdate(true);
    }
  }
});
