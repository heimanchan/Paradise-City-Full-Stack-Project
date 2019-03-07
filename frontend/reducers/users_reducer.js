import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser})
      return newState;
    case RECEIVE_SPOT:
      return Object.assign({}, oldState, action.payload.users)
    default:
      return oldState;
  }
}

export default usersReducer;