json.extract! spot, :id, :title, :price, :max_guest
# json.merge! notification.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at'])}