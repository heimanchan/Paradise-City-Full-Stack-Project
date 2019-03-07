Rails.application.routes.draw do

  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resources :spots, only: [:index, :show]
    resources :bookings, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
