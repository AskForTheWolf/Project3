Rails.application.routes.draw do
	resources :restaurants, only: [:index, :show] do
		resources :order
	end
	resources :blogs, only: [:index, :show]


	  root to: redirect('/restaurants')
end
