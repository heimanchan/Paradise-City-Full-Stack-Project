import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from "../actions/booking_actions";

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      newState[action.booking.id] = action.booking
      return newState
    case REMOVE_BOOKING:
      delete newState[bookingId]
      return newState
    default:
      return state;
  }
}

export default bookingReducer;