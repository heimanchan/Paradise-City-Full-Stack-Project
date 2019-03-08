import * as SpotAPI from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
})

const receiveSpot = payload => {
  return {
  type: RECEIVE_SPOT,
  payload
}}
// const receiveSpot = ({ spot, reviews }) => ({
//   type: RECEIVE_SPOT,
//   spot,
//   reviews
// })

const receiveReview = ( {review, average_rating }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
})

export const fetchAllSpots = filters => dispatch => (
  SpotAPI.fetchAllSpots(filters)
    .then(res => dispatch(receiveAllSpots(res)))
)

export const fetchSpot = (id) => dispatch => (
  SpotAPI.fetchSpot(id)
    .then(res => {
      // debugger
      dispatch(receiveSpot(res))})
      
)

export const createReview = review => dispatch => (
  SpotAPI.createReview(review)
    .then(res => (dispatch(receiveReview(res))))
)