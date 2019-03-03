export const fetchAllSpots = filter => (
  $.ajax({ 
    url: '/api/spots/',
  })
)

export const fetchSpot = id => (
  $.ajax({ url: `/api/spots/${id}`})
)

