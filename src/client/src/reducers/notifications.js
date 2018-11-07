import map from "lodash/map";

import ActionTypes from "../constants/ActionTypes";

import Router from "../common/Router";

const messages = [
  [
    `OpenSearch & Suggestions`,
    `Interrobang now supports the [OpenSearch](https://github.com/dewitt/opensearch) standard. This means search engine setup is easier and **search suggestions are now available**!\n\n**[SETUP NOW](${new Router().initiateOpenSearchInstallation()})**`
  ]
];

const DEFAULT_STATE = {
  items: map(messages, ([title, message]) => ({ title, message })),
  loading: false,
  error: null
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_NOTIFICATIONS:
      return {
        items: [],
        loading: true,
        error: null
      };

    case ActionTypes.REQUEST_NOTIFICATIONS_SUCCESS:
      return {
        items: action.notifications,
        loading: false,
        error: null
      };

    case ActionTypes.REQUEST_NOTIFICATIONS_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
