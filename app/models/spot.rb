class Spot < ApplicationRecord
  validates :title, :description, :ratings, :lat, :lng, presence: true
  
  belongs_to :city,
    foreign_key: :city_id,
    class_name: :City
    
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  # def self.in_bounds(bounds)
  #   self.where("lat < ?", bounds[:northEast][:lat])
  #     .where("lat > ?", bounds[:southWest][:lat])
  #     .where("lng < ?", bounds[:southWest][:lng])
  #     .where("lng > ?", bounds[:northEast][:lng])
  # end

  # def average_rating
  #   reviews.average(:ratings)
  # end
end
