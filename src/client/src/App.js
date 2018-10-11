import React, { Component } from "react";
import { Provider } from "react-redux";

import "./style.css";

import store from "./store";

import "./chronicles/Onboarding";
import "./chronicles/Login";
import "./chronicles/Logout";
import "./chronicles/AccountRecovery";
import "./chronicles/Activation";

import Root from "./components/Root";

import { requestCurrentUser } from "./actions";

import BackendlessApi from "./api/backendless";
global.BackendlessApi = BackendlessApi;

class App extends Component {
  componentDidMount() {
    requestCurrentUser();
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
