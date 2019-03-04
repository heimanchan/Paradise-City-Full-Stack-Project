export const fetchAllSpots = filter => (
  $.ajax({ 
    url: '/api/spots/',
    data: filter
  })
)

export const fetchSpot = id => (
  $.ajax({ url: `/api/spots/${id}`})
)

