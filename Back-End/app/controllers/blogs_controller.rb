class BlogsController < ApplicationController

	def index
		@blog = Blog.all

		respond_to do | format |
			format.html { render :index }
			format.json { render :json }
		end
	end

	def show
		@blog = Blog.find(params[:id])

		respond_to do | format |
			format.html { render :show }
			format.json { render :json @blog }
		end
	end
end
