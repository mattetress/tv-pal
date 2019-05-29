Rails.application.routes.draw do
  scope :api do
    resources :users

    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
    get '/favorites' => 'users#favorites'
    post '/favorite/:id' => 'users#toggle_favorite'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
