class Api::SongsController < ApplicationController

  def index
    if params[:artist_id]
      @songs = Song.includes(:artist).where(artist_id: params[:artist_id])
    else
      @songs = Song.includes(:artist).all
    end
    render :index
  end

  def search
    @songs = Song.where("title LIKE ?", "#{params[:search_term]}%")
    render :search
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

  def update
    @song = Song.find(params[:id])
    
    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages
    end

  end

  def destroy

  end

  private

  def song_params
    params.require(:song).permit(:title, :genre, :song, :image)
  end

end
