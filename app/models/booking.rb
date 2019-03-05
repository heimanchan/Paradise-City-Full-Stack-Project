class Booking < ApplicationRecord
  validates :start_date, :end_date, :num_guests, presence: true

  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

  def valid_dates?
    if self.start_date && self.end_date
      dates = Booking.where(spot_id: self.spot_id).where('start_date < ? OR end_date > ?', self.start_date, self.end_date)
      return true if dates.empty?
    end
    return false
  end
end
