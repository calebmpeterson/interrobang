import get from 'lodash/get';
import merge from 'lodash/merge';
import unset from 'lodash/unset';

import ActionTypes from '../constants/ActionTypes';

const DEFAULT_ERROR_MESSAGE = `Failed to load configuration`;

const DEFAULT_STATE = {
  loading: false,
  loaded: false,
  persisting: false,
  persisted: false,
  error: undefined,
  config: undefined
};

const EMPTY_CONFIGURATION = {
  "bangs": {},
  "search-engine": ""
};

const ONBOARDING_CONFIGURATION = {
  "bangs": {
    "": ""
  },
  "search-engine": "https://www.google.com/search?q={{{s}}}"
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.REGISTER_USER_SUCCESS:
    return {
      loading: false,
      loaded: true,
      error: undefined,
      config: ONBOARDING_CONFIGURATION
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
      config: action.config
    };

  case ActionTypes.REQUEST_CONFIGURATION_FAILURE:
    return {
      loading: false,
      loaded: false,
      error: get(action, 'error.message', DEFAULT_ERROR_MESSAGE),
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
      error: get(action, 'error.message', action.error)
    });

  case ActionTypes.ADD_BANG:
    return merge({}, state, { persisted: false, config: { bangs: {"":""} } });

  case ActionTypes.UPDATE_BANG:
    const { newBang, oldBang } = action;
    const patternToKeep = get(state, ['config', 'bangs', oldBang], '');
    const newState = merge({}, state, { persisted: false, config: { bangs: { [newBang]: patternToKeep } } });
    unset(newState, ['config', 'bangs', oldBang]);
    return newState;

  case ActionTypes.UPDATE_BANG_PATTERN:
    const { bang, pattern } = action;
    return merge({}, state, { persisted: false, config: { bangs: { [bang]: pattern } } });

  case ActionTypes.DELETE_BANG:
    const withoutBang = merge({}, state, { persisted: false });
    unset(withoutBang, ['config', 'bangs', action.bang]);
    return withoutBang;

  case ActionTypes.UPDATE_SEARCH_ENGINE:
    return merge({}, state, { persisted: false, config: { 'search-engine': action.pattern } });

  default:
    return state;
  }
}
