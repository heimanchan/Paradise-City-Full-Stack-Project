import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldState = {currentUserId: null}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUserId = Object.assign({}, oldState, { ["currentUserId"]: action.currentUser.id })
      return currentUserId;
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null };
    default:
      return oldState;
  }
}

export default sessionReducer;