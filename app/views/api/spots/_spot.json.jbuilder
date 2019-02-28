# json.extract! spot, :id, :title, :price, :max_guests
json.merge! spot.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at'])}