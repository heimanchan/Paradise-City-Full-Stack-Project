@bookings.each do |booking|
  json.set booking.id do 
    json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id
  end

  json.spotPic url_for(booking.spot.photos[0]) if booking.spot.photos.attached?

  json.spotId booking.spot.id
  json.spotTitle booking.spot.title
  json.spotCity booking.spot.city
end