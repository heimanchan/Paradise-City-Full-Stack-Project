import { RECEIVE_SPOT, RECEIVE_REVIEW } from '../actions/spot_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SPOT:
      return Object.assign(newState, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign(newState, { [action.review.id]: action.review })
    default:
      return state;
  }
}