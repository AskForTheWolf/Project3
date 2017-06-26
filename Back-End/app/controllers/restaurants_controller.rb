class RestaurantsController < ApplicationController
	before_action :find_restaurant, only: [:show, :index]

	def index
		@restaurants = Restaurant.all

		respond_to do | format |
			format.html { render :index }
			format.json { render json: @restaurants}
		end
	end

	def show
		respond_to do | format |
			format.html { render :show }
			format.json { render json: @restaurant}
		end
	end

	def find_restaurant
		@restaurant = Restaurant.find(params[:id])
	end

end
