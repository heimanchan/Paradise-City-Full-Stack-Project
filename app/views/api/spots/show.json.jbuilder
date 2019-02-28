json.spots do
  json.partial! '/api/spots/spot' spot: @spot
  # json.reviewIds @spot.reviews.pluck(:id)
end

# json.reviews