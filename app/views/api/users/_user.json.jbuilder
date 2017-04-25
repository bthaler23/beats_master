# json.extract! user, :id, :username, :email, json.image_url user.image.url
json.id user.id
json.username user.username
json.email user.email
json.bio user.bio
json.city user.city
json.country user.country
json.image_url asset_path(user.image.url)
