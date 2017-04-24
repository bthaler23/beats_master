class Comment < ActiveRecord::Base

  validates :user_id, :song_id, :body, presence: true

  belongs_to :user
  belongs_to :song

end
