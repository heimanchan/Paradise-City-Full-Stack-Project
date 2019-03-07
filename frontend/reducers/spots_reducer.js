import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

const spotsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      return newState[action.spot.id] = action.spot;
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign(newState, action.payload.spots)
    default:
      return oldState;
  }
}

export default spotsReducer;