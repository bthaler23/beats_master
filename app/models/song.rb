# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  genre              :string
#  song_file_name     :string           not null
#  song_content_type  :string           not null
#  song_file_size     :integer          not null
#  song_updated_at    :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Song < ActiveRecord::Base

  validates :title, :artist, :song, presence: true
  validates :title, uniqueness: { scope: :artist_id }

  has_many :comments
  has_many :likes

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'User'

  # Update this to validate to true, and no default value
  has_attached_file :song, presence: true
  validates_attachment_content_type :song, content_type: /\Aaudio\/.*\z/

  has_attached_file :image, default_url: "tassos.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/



  def liked_by_user?(user_likes)
    self.likes.pluck(:user_id).include?(current_user.id)
  end

end
