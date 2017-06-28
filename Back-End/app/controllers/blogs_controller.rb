class BlogsController < ApplicationController

	def index
		@blog = HTTParty.get('https://developers.zomato.com/api/v2.1/collections?city_id=283&apikey=4dd53daf684b041ec1d002edd2ccfa3e')
		puts @blog

		respond_to do | format |
			format.html { render :index }
			format.json { render json: @blog}
		end
	end

	def show
		@blog = Blog.find(params[:id])

		respond_to do | format |
			format.html { render :show }
			format.json { render json: @blog }
		end
	end
end
