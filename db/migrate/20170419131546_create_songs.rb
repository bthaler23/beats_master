class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :genre, null: false
      t.attachment :song, null: false
      t.attachment :image

      t.timestamps null: false
    end
    add_index :songs, :title
    add_index :songs, :artist_id
  end
end
