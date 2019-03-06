json.set! booking.id do 
  json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id, :guest_id
end