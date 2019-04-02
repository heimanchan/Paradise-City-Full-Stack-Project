class Booking < ApplicationRecord
  validates :start_date, :end_date, :num_guests, presence: true

  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

    # .where('end_date <= ? OR start_date >= ?', self.start_date, self.end_date)
  def valid_booking?
    if self.start_date && self.end_date
      bookings = Booking
        .where.not(id: self.id)
        .where(spot_id: self.spot_id)
        .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
      return bookings.empty?
    end
    return false
  end
end
