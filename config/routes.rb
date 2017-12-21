Rails.application.routes.draw do

  get 'sessions/create'

  get 'sessions/destroy'

  get 'fights/index'

  resources :fights do
    member do
      get 'like'
      get 'unlike'
    end
  end

  root 'fights#index'
  get '/privacypolicy/', to: 'privacypolicys#index'


  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]

end
