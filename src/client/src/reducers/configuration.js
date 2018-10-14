import assign from "lodash/assign";
import get from "lodash/get";
import map from "lodash/map";
import merge from "lodash/merge";
import reject from "lodash/reject";
import set from "lodash/set";
import size from "lodash/size";
import unset from "lodash/unset";

import ActionTypes from "../constants/ActionTypes";

import { generateOnboardingMessageAndConfig } from "../utils/OnboardingUtils";
import { deserializeBangs, sortRecords } from "../utils/ConfigUtils";

const DEFAULT_ERROR_MESSAGE = `Failed to load configuration`;

const DEFAULT_STATE = {
  loading: false,
  loaded: false,
  persisting: false,
  persisted: false,
  error: undefined,
  config: undefined,
  records: []
};

const EMPTY_CONFIGURATION = {
  bangs: {},
  "search-engine": ""
};

export const ONBOARDING_CONFIGURATION = {
  bangs: {
    "": ""
  },
  "search-engine": "https://www.google.com/search?q={{{s}}}"
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_SUCCESS:
      const onboarding = generateOnboardingMessageAndConfig(action.user);
      return {
        loading: false,
        loaded: true,
        error: undefined,
        messages: [onboarding.message],
        config: onboarding.config,
        records: sortRecords(deserializeBangs(onboarding.config.bangs))
      };

    case ActionTypes.REQUEST_CONFIGURATION:
      return {
        loading: true,
        loaded: false,
        error: undefined,
        config: undefined
      };

    case ActionTypes.REQUEST_CONFIGURATION_SUCCESS:
      return {
        loading: false,
        loaded: true,
        error: undefined,
        config: action.config,
        records: sortRecords(deserializeBangs(action.config.bangs))
      };

    case ActionTypes.REQUEST_CONFIGURATION_FAILURE:
      return {
        loading: false,
        loaded: false,
        error: get(action, "error.message", DEFAULT_ERROR_MESSAGE),
        config: EMPTY_CONFIGURATION
      };

    case ActionTypes.PERSIST_CONFIGURATION:
      return merge({}, state, { persisting: true });

    case ActionTypes.PERSIST_CONFIGURATION_SUCCESS:
      return merge({}, state, { persisting: false, persisted: true });

    case ActionTypes.PERSIST_CONFIGURATION_FAILURE:
      return merge({}, state, {
        persisting: false,
        persisted: false,
        error: get(action, "error.message", action.error)
      });

    case ActionTypes.ADD_BANG:
      return merge({}, state, {
        persisted: false,
        config: { bangs: { "": "" } },
        records: [
          ...(state.records || []),
          { index: size(state.records), bang: "", pattern: "" }
        ]
      });

    case ActionTypes.UPDATE_BANG:
      const { newBang, oldBang } = action;
      const patternToKeep = get(state, ["config", "bangs", oldBang], "");
      const newState = merge({}, state, {
        persisted: false,
        config: { bangs: { [newBang]: patternToKeep } },
        records: map(state.records, record => {
          return record.bang === oldBang
            ? assign({}, record, { bang: newBang })
            : record;
        })
      });
      unset(newState, ["config", "bangs", oldBang]);
      return newState;

    case ActionTypes.UPDATE_BANG_PATTERN:
      const { bang, pattern } = action;
      return merge({}, state, {
        persisted: false,
        config: { bangs: { [bang]: pattern } },
        records: map(state.records, record => {
          return record.bang === bang
            ? assign({}, record, { pattern })
            : record;
        })
      });

    case ActionTypes.DELETE_BANG:
      const records = reject(
        state.records,
        record => record.bang === action.bang
      );
      const withoutBang = merge({}, state, {
        persisted: false
      });
      unset(withoutBang, ["config", "bangs", action.bang]);
      set(withoutBang, ["records"], records);
      return withoutBang;

    case ActionTypes.UPDATE_SEARCH_ENGINE:
      return merge({}, state, {
        persisted: false,
        config: { "search-engine": action.pattern }
      });

    case ActionTypes.DELETE_ALL_DATA:
      return assign({}, state, {
        config: EMPTY_CONFIGURATION,
        records: [],
        deleted: true
      });

    default:
      return state;
  }
}
