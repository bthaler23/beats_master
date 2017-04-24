json.array! @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.user comment.user.username
end
