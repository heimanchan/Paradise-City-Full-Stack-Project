@bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id
    json.spotPic url_for(booking.spot.photos[0]) if booking.spot.photos.attached?
  
    json.spotId booking.spot.id
    json.spotTitle booking.spot.title
    json.spotCity booking.spot.city.name
    json.spotPrice booking.spot.price
    json.spotOwnerName "#{booking.spot.owner.first_name} #{booking.spot.owner.last_name}"
  end

end