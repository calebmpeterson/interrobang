import { push } from "react-router-redux";

import ActionTypes from "../constants/ActionTypes";
import store from "../store";
import BackendlessApi from "../api/backendless";
import { createLandingURL } from "../api/backendless";

import ActionCreators from "./creators";

const { dispatch } = store;

export const viewRegistration = () => dispatch(push("/register"));

export const requestCurrentUser = () => {
  return dispatch(() => {
    dispatch({
      type: ActionTypes.REQUEST_CURRENT_USER
    });

    return BackendlessApi.getCurrentUser().then(
      user =>
        dispatch({
          type: ActionTypes.REQUEST_CURRENT_USER_SUCCESS,
          user
        }),
      error =>
        dispatch({
          type: ActionTypes.REQUEST_CURRENT_USER_FAILURE,
          error
        })
    );
  });
};

export const updateRegistrationUsername = username =>
  dispatch({
    type: ActionTypes.UPDATE_REGISTRATION_USERNAME,
    username
  });

export const updateRegistrationPassword = password =>
  dispatch({
    type: ActionTypes.UPDATE_REGISTRATION_PASSWORD,
    password
  });

export const updateRegistrationPasswordCheck = passwordCheck =>
  dispatch({
    type: ActionTypes.UPDATE_REGISTRATION_PASSWORD_CHECK,
    passwordCheck
  });

export const registerUser = (username, password) => {
  return (dispatch, getState) => {
    const { registration } = getState();
    const { username, password, passwordCheck } = registration;

    dispatch({
      type: ActionTypes.REGISTER_USER,
      username,
      password
    });

    return BackendlessApi.register(username, password, passwordCheck).then(
      registeredUser =>
        dispatch(
          ActionCreators.registerUserSuccess(registeredUser, username, password)
        ),
      error =>
        dispatch({
          type: ActionTypes.REGISTER_USER_FAILURE,
          error
        })
    );
  };
};

export const viewConfigurationSetup = () => {
  dispatch({
    type: ActionTypes.VIEW_CONFIGURATION_SETUP
  });

  dispatch(push(`/setup/configuration`));
};

export const viewBrowserSetup = () => {
  dispatch({
    type: ActionTypes.VIEW_BROWSER_SETUP
  });

  dispatch(push(`/setup/browser`));
};

export const viewCommunicationSetup = () => {
  dispatch({
    type: ActionTypes.VIEW_COMMUNICATION_SETUP
  });

  dispatch(push(`/setup/communication`));
};

export const copySearchPatternURL = () => {
  if (document.execCommand) {
    document.execCommand("copy");
  }
};

export const submitActivationUpdate = activated => {
  return dispatch((d, getState) => {
    const { user } = getState();

    dispatch(ActionCreators.submitActivationUpdate(user, activated));

    return BackendlessApi.updateActivation(user, activated).then(
      updatedUser =>
        dispatch(
          ActionCreators.submitActivationUpdateSuccess(updatedUser, activated)
        ),
      error =>
        dispatch(ActionCreators.submitActivationUpdateFailure(error, activated))
    );
  });
};

export const submitSubscriptionUpdate = (subscribed, signup = false) => {
  return dispatch((d, getState) => {
    const { user } = getState();

    dispatch({
      type: ActionTypes.SUBMIT_SUBSCRIPTION_UPDATE,
      user,
      subscribed,
      signup
    });

    return BackendlessApi.updateSubscription(user, subscribed).then(
      updatedUser =>
        dispatch({
          type: ActionTypes.SUBMIT_SUBSCRIPTION_UPDATE_SUCCESS,
          user: updatedUser,
          signup
        }),
      error =>
        dispatch({
          type: ActionTypes.SUBMIT_SUBSCRIPTION_UPDATE_FAILURE,
          error,
          signup
        })
    );
  });
};

export const viewLogin = () => {
  dispatch({
    type: ActionTypes.VIEW_LOGIN
  });

  dispatch(push(`/login`));
};

export const viewConfiguration = () => {
  dispatch({
    type: ActionTypes.VIEW_CONFIGURATION
  });

  dispatch(push(`/configuration`));
};

export const viewAccount = () => {
  dispatch(ActionCreators.viewAccount());
  dispatch(push(`/settings`));
};

export const updateLoginUsername = username =>
  dispatch({
    type: ActionTypes.UPDATE_LOGIN_USERNAME,
    username
  });

export const updateLoginPassword = password =>
  dispatch({
    type: ActionTypes.UPDATE_LOGIN_PASSWORD,
    password
  });

export const loginUser = (credentials, dueToRegistration = false) => {
  return (dispatch, getState) => {
    const { login } = getState();
    const { username, password } = credentials || login;

    dispatch({
      type: ActionTypes.LOGIN_USER,
      username,
      password,
      dueToRegistration
    });

    return BackendlessApi.login(username, password).then(
      user =>
        dispatch({
          type: ActionTypes.LOGIN_USER_SUCCESS,
          user: user,
          dueToRegistration
        }),
      error =>
        dispatch({
          type: ActionTypes.LOGIN_USER_FAILURE,
          error
        })
    );
  };
};

export const logoutUser = () => {
  return dispatch(() => {
    dispatch({
      type: ActionTypes.LOGOUT
    });

    return BackendlessApi.logout().then(
      () =>
        dispatch({
          type: ActionTypes.LOGOUT_SUCCESS
        }),
      error =>
        dispatch({
          type: ActionTypes.LOGOUT_FAILURE
        })
    );
  });
};

export const loadConfiguration = user => {
  return dispatch(() => {
    dispatch({
      type: ActionTypes.REQUEST_CONFIGURATION,
      user
    });

    return BackendlessApi.restoreConfig(user).then(
      config =>
        dispatch(ActionCreators.requestConfigurationSuccess(config, user)),
      error =>
        dispatch({
          type: ActionTypes.REQUEST_CONFIGURATION_FAILURE,
          error,
          user
        })
    );
  });
};

export const saveConfiguration = ({ setup } = {}) => {
  return dispatch((d, getState) => {
    const { user, configuration } = getState();
    const { config } = configuration;

    dispatch({
      type: ActionTypes.PERSIST_CONFIGURATION,
      user,
      config,
      setup
    });

    return BackendlessApi.persistConfig(user, config).then(
      saved =>
        dispatch({
          type: ActionTypes.PERSIST_CONFIGURATION_SUCCESS,
          user,
          config,
          saved,
          setup
        }),
      error =>
        dispatch({
          type: ActionTypes.PERSIST_CONFIGURATION_FAILURE,
          error,
          user,
          config,
          setup
        })
    );
  });
};

export const addBang = () => dispatch(ActionCreators.addBang());

export const updateBang = (oldBang, newBang) =>
  dispatch(ActionCreators.updateBang(oldBang, newBang));

export const updateBangPattern = (bang, pattern) =>
  dispatch(ActionCreators.updateBangPattern(bang, pattern));

export const deleteBang = bang => dispatch(ActionCreators.deleteBang(bang));

export const updateSearchEngine = pattern =>
  dispatch(ActionCreators.updateSearchEngine(pattern));

export const viewLandingPage = () => {
  const { user } = store.getState();
  window.location.href = createLandingURL(user);
};

export const viewAccountRecovery = () => {
  dispatch({
    type: ActionTypes.VIEW_ACCOUNT_RECOVERY
  });
  dispatch(push("/recover"));
};

export const updateRecoveryUsername = username =>
  dispatch({
    type: ActionTypes.UPDATE_RECOVERY_USERNAME,
    username
  });

export const recoverAccount = () => {
  return dispatch((d, getState) => {
    const { recovery } = getState();
    const { username } = recovery;

    dispatch({
      type: ActionTypes.REQUEST_ACCOUNT_RECOVERY,
      username
    });

    return BackendlessApi.recover(username).then(
      () =>
        dispatch({
          type: ActionTypes.REQUEST_ACCOUNT_RECOVERY_SUCCESS,
          username
        }),
      error =>
        dispatch({
          type: ActionTypes.REQUEST_ACCOUNT_RECOVERY_FAILURE,
          username,
          error
        })
    );
  });
};

export const viewAccountRecovered = () => {
  dispatch({
    type: ActionTypes.VIEW_ACCOUNT_RECOVERED
  });

  dispatch(push(`/recovered`));
};

export const viewBrowserConfiguration = () =>
  dispatch(push(`/configuration/browser`));

export const deleteAllData = () => dispatch(ActionCreators.deleteAllData());
