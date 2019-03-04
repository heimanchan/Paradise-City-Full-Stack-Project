import * as SpotAPI from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

export const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
})

const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
})

export const fetchAllSpots = filters => dispatch => (
  SpotAPI.fetchAllSpots(filters)
    .then(res => dispatch(receiveAllSpots(res)))
)

export const fetchSpot = (id) => dispatch => (
  SpotAPI.fetchSpot(id)
    .then(res => dispatch(receiveSpot(res)))
)
