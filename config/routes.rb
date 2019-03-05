Rails.application.routes.draw do

  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
    end
    resources :spots, only: [:index, :show]
    resources :bookings, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
