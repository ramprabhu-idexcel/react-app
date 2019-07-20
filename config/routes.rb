Rails.application.routes.draw do
  root 'pages#index'
  get 'pages', to: 'pages#index'

  namespace :api, format: :json do
    resources :articles
    resources :products
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
