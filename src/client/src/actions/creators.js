import ActionTypes from '../constants/ActionTypes';

class ActionCreators {
  registerUserSuccess = (user, username, password) => ({
    type: ActionTypes.REGISTER_USER_SUCCESS,
    user,
    username,
    password
  })

  addBang = () => ({
    type: ActionTypes.ADD_BANG
  })

  updateBang = (oldBang, newBang) => ({
    type: ActionTypes.UPDATE_BANG,
    oldBang,
    newBang
  })

  updateBangPattern = (bang, pattern) => ({
    type: ActionTypes.UPDATE_BANG_PATTERN,
    bang,
    pattern
  })

  deleteBang = (bang) => ({
    type: ActionTypes.DELETE_BANG,
    bang
  })

  updateSearchEngine = (pattern) => ({
    type: ActionTypes.UPDATE_SEARCH_ENGINE,
    pattern
  })
}

export default new ActionCreators();