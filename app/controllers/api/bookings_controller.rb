class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest = current_user

  end

  def edit
    
  end

  def destroy
    
  end

  private
  def booking_params
    params.require(:booking).permit(:spot_id, :start_date, :end_date, :num_guests)
  end
end