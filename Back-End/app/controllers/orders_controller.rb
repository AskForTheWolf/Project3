class OrdersController < ApplicationController
	# respond_to is unnecessary here in this controller. cf blogs_controller comments

	# in `routes.rb`, `resources :order, only: [:index]` other methods are not being used here.

	before_action :find_restaurant, only: [:show, :new, :create, :edit, :update, :destroy]
	before_action :find_order, only: [:show, :edit, :update, :destroy]
	def index
		@restaurants = Restaurant.find(params[:restaurant_id])
		respond_to do | format |
			format.html { render :index }
			format.json { render json: @orders}
		end
	end

	def show
		respond_to do | format |
			format.html { render :show }
			format.json { render json: @orders}
		end
	end

	def new
		@orders = @restaurant.order.new
	end

	def create
		@order = @restaurant.order.create!(order_params)

		respond_to do | format |
			if @order.save!
				format.html {redirect_to @order, notice: 'Successfully created.'}
				format.json { render json: @order, status: :created, location: @order}
			else
				format.html { render :new }
				format.json { render json: @order.errors, status: :unprocessable_entity}
			end
		end

		redirect_to @restaurant
		# if update is failling, add a path please.

	end

	def edit
	end

	def update
		@order.update!(order_params)
		redirect_to [@restaurant, @order]
		# if update is failling, add a path please.
	end

	def destroy
		@order.destroy
		redirect_to @restaurant
		# if update is failling, add a path please.
	end

	private

	def find_order
		@order = Order.find(params[:id])
	end

	def find_restaurant
		@restaurant = Restaurant.find(params[:restaurant_id])
	end

	def order_params
		params.require(:order).permit(:order_number, :customer_name, :time_estimate, :contact_number, :price, :delivery_address)
	end
end
