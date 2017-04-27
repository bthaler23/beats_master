class Api::LikesController < ApplicationController


  def create
    @song = Song.find(params[:song_id])
    @song.likes.create(user_id: current_user.id)
    render 'api/songs/show'
  end

  def destroy
    @song = Song.find(params[:song_id])
    like = @song.likes.find_by_user_id(current_user.id)
    like.destroy
    render 'api/songs/show'
  end

  private


end
