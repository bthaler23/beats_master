class Api::SongsController < ApplicationController

  def index
    if params[:artist_id]
      @songs = Song.where(artist_id: params[:artist_id])
    else
      @songs = Song.all
    end
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
