# json.extract! spot, :id, :title, :price, :max_guests
json.merge! spot.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at', 'owner_id'])}

json.ownerName "#{spot.owner.first_name} #{spot.owner.last_name}"