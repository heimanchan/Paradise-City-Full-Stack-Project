json.extract! spot, :id, :title, :address, :lat, :lng, :max_guests, :num_beds, :price, :ratings, :description, :heat, :pool, :shampoo, :tv, :wifi, :air_conditioning, :iron, :hair_dryer, :first_aid, :laundry
# json.merge! spot.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at', 'owner_id'])}

json.ownerFirstName spot.owner.first_name
json.ownerLastName spot.owner.last_name
json.cityName spot.city.name