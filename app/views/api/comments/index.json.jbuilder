json.array! @comments do |comment|
  json.comment.id.set! {
    json.partial! "api/comments/comment", comment: comment
  }
end
