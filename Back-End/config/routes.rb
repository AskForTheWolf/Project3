Rails.application.routes.draw do
	resources :restaurant

	  root to: redirect('/restaurant')
end
