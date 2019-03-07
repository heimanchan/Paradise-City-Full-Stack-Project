class Spot < ApplicationRecord
  validates :title, :description, :ratings, :lat, :lng, presence: true
  
  belongs_to :city,
    foreign_key: :city_id,
    class_name: :City
    
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :bookings,
    foreign_key: :spot_id,
    class_name: :Booking

  has_many :reviews,
    foreign_key: :spot_id,
    class_name: :Review
    
  has_many_attached :photos

  def self.in_bounds(bounds)
    result = []
    spots = self.where("lat < ?", bounds[:northEast][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
    spots.each{ |spot| result << spot}
    result
  end

  def average_rating
    reviews.average(:rating)
  end
end
