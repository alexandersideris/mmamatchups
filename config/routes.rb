Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'fights/index'
  resources :fights
  root 'fights#index'

end
