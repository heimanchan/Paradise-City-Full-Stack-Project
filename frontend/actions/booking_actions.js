import * as BookingAPI from '../util/booking_api_util'

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'

const receiveAllBookings = payload => ({
  type: RECEIVE_ALL_BOOKINGS,
  payload
})

const receiveBooking = (booking, bookingType) => ({
  type: RECEIVE_BOOKING,
  booking,
  bookingType
})

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})  

export const fetchAllBookings = (userId) => dispatch => (
  BookingAPI.fetchAllBookings(userId)
    .then(res => dispatch(receiveAllBookings(res)))
)

export const fetchBooking = bookingId => dispatch => (
  BookingAPI.fetchBooking(bookingId)
    .then(res => dispatch(receiveBooking(res)))
)

export const createBooking = booking => dispatch => (
  BookingAPI.createBooking(booking)
    .then(res => dispatch(receiveBooking(res, "create")))
    .fail(error => dispatch(receiveBookingErrors(error.responseJSON)))
)

export const updateBooking = booking => dispatch => (
  BookingAPI.updateBooking(booking)
    .then(res => dispatch(receiveBooking(res, "update")))
    .fail(error => dispatch(receiveBookingErrors(error.responseJSON)))
)

export const deleteBooking = bookingId => dispatch => (
  BookingAPI.deleteBooking(bookingId)
    .then(res => dispatch(removeBooking(res)))
)