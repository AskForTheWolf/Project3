Rails.application.routes.draw do
	resources :restaurants do
		resources :order
	end

	  root to: redirect('/restaurants')
end
