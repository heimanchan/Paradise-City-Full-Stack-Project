export const fetchAllSpots = filters => (
  $.ajax({ 
    url: '/api/spots/',
    data: filters,
  })
)

export const fetchSpot = id => (
  $.ajax({ url: `/api/spots/${id}`})
)

