get '/', to: 'home#index', as: :home

# Posts
get '/posts/new', to: 'posts#new', as: :new_post
post '/posts', to: 'posts#create', as: :create_post
get '/posts/:id/edit', to: 'posts#edit', as: :edit_post

# Drafts
get '/drafts', to: 'drafts#index', as: :drafts
