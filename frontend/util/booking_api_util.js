export const fetchAllBookings = (userId) => (
  $.ajax({
    url: 'api/bookings',
    data: { userId }
  })
)

export const fetchBooking = bookingId => (
  $.ajax({
    url: `api/bookings/${bookingId}`
  })
)

export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { booking },
  })
)

export const updateBooking = booking => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking },
  })
)

export const deleteBooking = bookingId => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${bookingId}`
  })
)