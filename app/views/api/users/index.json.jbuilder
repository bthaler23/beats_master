json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.image_url asset_path(user.image.url)
end
