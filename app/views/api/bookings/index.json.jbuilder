json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id
      json.spotPic url_for(booking.spot.photos[0]) if booking.spot.photos.attached?
    end
  end
end

json.spots do
  @bookings.each do |booking|
    spot = booking.spot
    json.set! spot.id do
      json.extract! spot, :id, :title, :price
      json.cityName spot.city.name
      json.ownerName "#{spot.owner.first_name} #{spot.owner.last_name}"
    end
  end
end 