class Api::SpotsController < ApplicationController
  def index
    @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    
    if @spot
      render :show
    else
      render json: ["Not Logged In"], status: 400
    end
  end

  private
  def spot_params
    params.require(:spot).permit(
      :lat,
      :lng,
      :price,
      :max_guests,
      photos: []
    )
  end

  def bounds
    params[:bounds]
  end
end

