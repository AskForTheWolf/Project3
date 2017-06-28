Rails.application.routes.draw do
	resources :restaurants, only: [:index, :show] do
		resources :order, only: [:show, :edit, :create, :update]
	end
	resources :blogs, only: [:index, :show]

	resources :order, only: [:index]


	  root to: redirect('/restaurants')
end
