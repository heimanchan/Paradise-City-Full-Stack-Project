class Api::BookingsController < ApplicationController
  def index
    # @bookings = Booking.all.select{ |booking| booking.guest_id = current_user.id } 
    @bookings = User.find(params[:userId]).bookings
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    @booking.owner_id = Spot.find(params[:booking][:spot_id]).owner.id
    if @booking.save!
      render :show
    else 
      render json: ["This date is not available. Please select another date."], status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else
      render @booking.errors.full_messages, status: 400
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:spot_id, :start_date, :end_date, :num_guests)
  end
end