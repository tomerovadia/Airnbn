Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show] do
      resources :spots, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :show, :index]
    resources :availabilities, only: [:create, :destroy]

  end

end
