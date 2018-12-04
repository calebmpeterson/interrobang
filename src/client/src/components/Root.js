import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import RegistrationPage from "./pages/RegistrationPage";
import SetupConfigurationPage from "./pages/SetupConfigurationPage";
import SetupBrowserPage from "./pages/SetupBrowserPage";
import SetupCommunicationPage from "./pages/SetupCommunicationPage";

import LoginPage from "./pages/LoginPage";
import ConfigurationPage from "./pages/ConfigurationPage";
import BrowserLoadingPage from "./pages/BrowserLoadingPage";
import BrowserPage from "./pages/BrowserPage";
import AccountPage from "./pages/AccountPage";

import AccountRecoveryPage from "./pages/AccountRecoveryPage";
import AccountRecoveredPage from "./pages/AccountRecoveredPage";

import NotificationsPage from "./pages/NotificationsPage";

import { history } from "../middleware/history";

export default class Root extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />

          <Route exact path="/register" component={RegistrationPage} />
          <Route
            exact
            path="/setup/configuration"
            component={SetupConfigurationPage}
          />
          <Route exact path="/setup/browser" component={SetupBrowserPage} />
          <Route
            exact
            path="/setup/communication"
            component={SetupCommunicationPage}
          />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/configuration" component={ConfigurationPage} />
          <Route
            exact
            path="/configuration/opensearch"
            component={BrowserLoadingPage}
          />
          <Route exact path="/configuration/browser" component={BrowserPage} />
          <Route exact path="/settings" component={AccountPage} />

          <Route exact path="/recover" component={AccountRecoveryPage} />
          <Route exact path="/recovered" component={AccountRecoveredPage} />

          <Route exact path="/notifications" component={NotificationsPage} />

          <Route component={LoginPage} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
