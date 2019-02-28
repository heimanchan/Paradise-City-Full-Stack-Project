class Api::UsersController < ApplicationController
  def create
    @user = User.new(users_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ["invalid credentials"], state: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  def users_params
    params.require(:user).permit(:username, :first_name, :last_name, :password)
  end
end
