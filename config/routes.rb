Rails.application.routes.draw do

  get 'fights/index'
  resources :fights
  root 'fights#index'
  get '/privacypolicy/', to: 'privacypolicys#index'
end
