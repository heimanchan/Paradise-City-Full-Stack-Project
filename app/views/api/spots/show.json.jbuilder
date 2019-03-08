json.spots do
  json.set! @spot.id do
    json.partial! '/api/spots/spot', spot: @spot
  end
end

json.reviews do
  @spot.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

json.users do
  @spot.reviews.each do |review|
    user = review.author
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end
