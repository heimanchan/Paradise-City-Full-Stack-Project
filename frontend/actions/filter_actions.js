// import { fetchAllSpots } from '../util/spot_api_util';
import { fetchAllSpots } from '../actions/spot_actions';
import { receiveAllSpots } from '../actions/spot_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchAllSpots(getState().ui.filters)(dispatch);
  // return fetchAllSpots(getState().ui.filters)
  //   .then(res => dispatch(receiveAllSpots(res)));
}