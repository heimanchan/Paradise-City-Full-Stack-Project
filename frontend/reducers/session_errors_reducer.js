import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return newState["errors"] = [];
    case RECEIVE_SESSION_ERRORS:
      return newState["errors"] = action.errors;
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;