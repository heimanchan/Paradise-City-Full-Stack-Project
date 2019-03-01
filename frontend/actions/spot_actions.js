import * as SpotAPI from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
})

const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
})

export const fetchAllSpots = () => dispatch => (
  SpotAPI.fetchAllSpots()
    .then(res => dispatch(receiveAllSpots(res)))
)

export const fetchSpot = () => dispatch => (
  SpotAPI.fetchSpot()
    .then(res => dispatch(receiveSpot(res)))
)
