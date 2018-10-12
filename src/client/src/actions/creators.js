import ActionTypes from "../constants/ActionTypes";

class ActionCreators {
  viewAccount = () => ({
    type: ActionTypes.VIEW_ACCOUNT
  });

  registerUserSuccess = (user, username, password) => ({
    type: ActionTypes.REGISTER_USER_SUCCESS,
    user,
    username,
    password
  });

  requestConfigurationSuccess = (config, user) => ({
    type: ActionTypes.REQUEST_CONFIGURATION_SUCCESS,
    config,
    user
  });

  addBang = () => ({
    type: ActionTypes.ADD_BANG
  });

  updateBang = (oldBang, newBang) => ({
    type: ActionTypes.UPDATE_BANG,
    oldBang,
    newBang
  });

  updateBangPattern = (bang, pattern) => ({
    type: ActionTypes.UPDATE_BANG_PATTERN,
    bang,
    pattern
  });

  deleteBang = bang => ({
    type: ActionTypes.DELETE_BANG,
    bang
  });

  updateSearchEngine = pattern => ({
    type: ActionTypes.UPDATE_SEARCH_ENGINE,
    pattern
  });

  submitActivationUpdate = (user, activated) => ({
    type: ActionTypes.SUBMIT_ACTIVATION_UPDATE,
    activated,
    user
  });

  submitActivationUpdateSuccess = (user, activated) => ({
    type: ActionTypes.SUBMIT_ACTIVATION_UPDATE_SUCCESS,
    activated,
    user
  });

  submitActivationUpdateFailure = (error, activated) => ({
    type: ActionTypes.SUBMIT_ACTIVATION_UPDATE,
    activated,
    error
  });

  deleteAllData = () => ({
    type: ActionTypes.DELETE_ALL_DATA
  });
}

export default new ActionCreators();
