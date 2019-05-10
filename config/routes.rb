Rails.application.routes.draw do
  scope :api do 
    resources :users
    
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
    get '/favorites' => 'users#favorites'
    post '/favorite/:id' => 'users#toggle_favorite'
  end
end
