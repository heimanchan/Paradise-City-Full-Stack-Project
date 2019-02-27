import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveErrors= errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const login = user => dispatch => (
  SessionAPI.login(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(error => dispatch(receiveErrors(error)))
)

export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(error => dispatch(receiveErrors(error)))
)

export const logout = () => dispatch => (
  SessionAPI.logout()
    .then(res => dispatch(logoutCurrentUser(res)))
    .fail(error => dispatch(receiveErrors(error)))
)