import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW } from '../actions/spot_actions';
import { RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

const spotsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      return Object.assign(newState, action.payload.spots);
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign(newState, action.payload.spots);
    case RECEIVE_REVIEW:
      let spot = newState[action.review.spotId]
      spot.averageRating = action.averageRating;
      return Object.assign(newState, { [spot.id]: spot })
    default:
      return oldState;
  }
}

export default spotsReducer;