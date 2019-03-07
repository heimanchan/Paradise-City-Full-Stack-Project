import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS } from "../actions/booking_actions";

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      if (action.payload.bookings) {
        return action.payload.bookings;
      } else {
        return state;
      }
    case RECEIVE_BOOKING:
      return Object.assign(newState, action.booking)
    case REMOVE_BOOKING:
      delete newState[action.bookingId]
      return newState
    default:
      return state;
  }
}

export default bookingReducer;