class Booking < ApplicationRecord
  validates :start_date, :end_date, :num_guests, presence: true

  belongs_to :guest,
    foreign_key: :guest_id,
    className: :User

  belongs_to :spot,
    foreign_key: :spot_id,
    className: :Spot

  def valid_dates?
    if self.start_date && self.end_date
      current_requests
    end
  end
end
