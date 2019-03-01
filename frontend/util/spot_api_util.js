export const fetchAllSpots = () => (
  $.ajax({ url: '/api/spots/' })
)

export const fetchSpot = id => (
  $.ajax({ url: `/api/spots/${id}`})
)

