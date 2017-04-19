class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def create
    @song = Song.new(song_params)
    @song.artist_id = current_user.id

    if @song.save
      render :show
    else
      render json: @song.errors
    end

  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def destroy

  end

  private

  def song_params
    params.require(:song).permit(:title, :genre, :song, :image)
  end

end
