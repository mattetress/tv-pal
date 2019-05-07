Rails.application.routes.draw do
  scope :api do 
    resources :users
    
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
  end
end
