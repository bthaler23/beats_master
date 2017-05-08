class Api::SongsController < ApplicationController

  def index
    if params[:artist_id]
      @songs = Song.includes(:artist, :comments, :likes).order("created_at DESC").limit(15).where(artist_id: params[:artist_id])
    elsif params[:top_songs]
      @songs = Song.find_by_sql("SELECT songs.* FROM songs JOIN likes ON likes.song_id = songs.id
        GROUP BY songs.id ORDER BY count(*) DESC LIMIT #{params[:top_songs]}");
    else
      @songs = Song.includes(:artist, :comments, :likes).order("created_at DESC").limit(15).all
    end
    render :index
  end

  def search
    @songs = Song.where("lower(title) LIKE lower(?)", "%#{params[:search_term]}%").limit(8)
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
    @song = Song.find(params[:id])
    @song.destroy
  end

  private

  def song_params
    params.require(:song).permit(:title, :genre, :song, :image)
  end

end
