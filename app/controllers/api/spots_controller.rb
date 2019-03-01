class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
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
end

