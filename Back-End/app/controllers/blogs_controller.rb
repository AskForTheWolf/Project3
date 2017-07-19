class BlogsController < ApplicationController

	def index
		@blog = HTTParty.get('https://developers.zomato.com/api/v2.1/collections?city_id=283&apikey=4dd53daf684b041ec1d002edd2ccfa3e')
		# It's bad practice to commit your API key, especially within a public repository. Think back to the 12-factor app specification.

		# Using environment variables in Rails:
		# http://blog.honeybadger.io/ruby-guide-environment-variables/
		puts @blog

		# since you don't have a view for this controller method, you don't need
		# respond_to. just `render json: @blog`
		respond_to do | format |
			format.html { render :index }
			format.json { render json: @blog}
		end
	end
end
