class RestaurantsController < ApplicationController
	before_action : :find_post, only: [:show, :edit, :update, :destroy]

	def index
		@restaurant = Restaurant.all

		respond_to do |order|
			format.html { render :index }
			format.json { render :json @restaurant}
	end

	def show
		respond_to do |order|
			format.html { render :show }
			format.json { render :json @restaurant}
	end

	def new
		@restaurant = Restaurant.new
	end

	def create
		@restaurant = Restaurant.new(restaurant_params)

	      respond_to do |format|
	        if @restaurant.save!
	          format.html { redirect_to @restaurant, notice: 'restaurant was successfully created.' }
	          format.json { render json: @restaurant, status: :created, location: @restaurant }
	        else
	          format.html { render :new }
	          format.json { render json: @restaurant.errors, status: :unprocessable_entity }
	        end
	      end
	    end
	end

	def edit
	end

	def update
		@restaurant.update(restaurant_params)
		redirect_to @restaurant
	end

	def destroy
		@restaurant.destroy
		redirec_to restaurant_path
	end

	private

	def restaurant_params
   	 	params.require(:restaurant).permit(:address, :open, :close, :name, :menu)
  	end

	def find_post
		@restaurant = Restaurant.find(params[:id])
	end

end
