import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';
import bookingReducer from './booking_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  bookings: bookingReducer,
});

export default entitiesReducer;