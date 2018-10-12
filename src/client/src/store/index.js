import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import {
  middleware as history,
  reducer as routerReducer
} from "../middleware/history";
import logger from "../middleware/logger";
import chronicle from "../middleware/chronicle";

import view from "../reducers/view";
import registration from "../reducers/registration";
import login from "../reducers/login";
import user from "../reducers/user";
import recovery from "../reducers/recovery";
import configuration from "../reducers/configuration";
import password from "../reducers/password";

const store = createStore(
  combineReducers({
    view,
    registration,
    login,
    recovery,
    user,
    configuration,
    password,
    router: routerReducer
  }),
  applyMiddleware(history, thunk, chronicle, logger)
);

global.store = store;

export default store;
