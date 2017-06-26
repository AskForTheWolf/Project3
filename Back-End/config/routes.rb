Rails.application.routes.draw do
	resources :restaurants

	  root to: redirect('/restaurants')
end
