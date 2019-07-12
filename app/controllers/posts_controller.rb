class PostsController < ApplicationController
    def new
    @post = Post.new    
    end

    def create
    @post = Post.new post_params
    if @post.save
        flash[:notice] = "Post created successfully"
      # if question is saved successfully redirect to question show page
      redirect_to post_path(@post)
    else
      # render views/questions/new.html.erb
      render :new
    end
  end

    def show
    @post = Post.new
    @comment = Comment.new
    @comments = @post.comments.order(created_at: :desc)
    end
    


private

    def post_params 
    params.require(:post).permit(:title, :body)
    end
end