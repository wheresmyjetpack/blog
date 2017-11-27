get '/', to: 'home#index', as: :home
get '/posts/new', to: 'posts#new', as: :new_post
post '/posts', to: 'posts#create', as: :create_post
