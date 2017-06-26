Rails.application.routes.draw do
	resources :restaurants, only: [:index, :show]

	  root to: redirect('/restaurants')
end
