class Api::CommentsController < ApplicationController


  def index
    @comments = Comment.includes(:user).where(song_id: params[:song_id])
    render :index
  end


  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    comment_id = @comment.id
    @comment.destroy
    render json: comment_id
  end


  private

  def comment_params
    params.require(:comment).permit(:song_id, :user_id, :body)
  end


end
