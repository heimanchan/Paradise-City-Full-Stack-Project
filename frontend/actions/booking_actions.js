import * as BookingAPI from '../util/booking_api_util'

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'


const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
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

export const fetchAllBookings = () => dispatch => (
  BookingAPI.fetchAllBookings()
    .then(res => dispatch(receiveAllBookings(res)))
)


export const fetchBooking = bookingId => dispatch => (
  BookingAPI.fetchBooking(bookingId)
    .then(res => dispatch(receiveBooking(res)))
)

export const createBooking = booking => dispatch => (
  BookingAPI.createBooking(booking)
    .then(res => dispatch(receiveBooking(res, "create")))
)

export const updateBooking = booking => dispatch => (
  BookingAPI.updateBooking(booking)
    .then(res => dispatch(receiveBooking(res, "update")))
)

export const deleteBooking = bookingId => dispatch => (
  BookingAPI.deleteBooking(bookingId)
    .then(res => dispatch(removeBooking(res)))
)