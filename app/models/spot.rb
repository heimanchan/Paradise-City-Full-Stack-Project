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

  has_one_attached :photo
  
  def self.in_bounds(bounds)
    result = []
    spots = self.where("lat < ?", bounds[:northEast][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
    spots.each{ |spot| result << spot}
    result
  end

  # def average_rating
  #   reviews.average(:ratings)
  # end
end
