Rails.application.routes.draw do
  post 'messages',  to: 'messages#create'
  devise_for :users
  authenticated :user do
    root 'pages#home'
  end
  root 'pages#welcome'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
