import * as SpotAPI from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
})

export const fetchAllSpots = () => dispatch => (
  SpotAPI.fetchAllSpots()
    .then(res => dispatch(receiveAllSpots(res)))
)
