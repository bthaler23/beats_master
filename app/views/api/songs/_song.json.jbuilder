
json.id song.id
json.title song.title
json.artist song.artist.username
json.likes song.likes.length
if current_user
  json.liked current_user.get_liked_song_ids.include?(song.id)
end
json.num_comments song.comments.length
json.artist_id song.artist.id
json.artist_img_url asset_path(song.artist.image.url)
json.genre song.genre
json.created_at song.created_at
json.song_url asset_path(song.song.url)
json.image_url asset_path(song.image.url)
