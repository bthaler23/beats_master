class RemoveGenreConstraintfromSongs < ActiveRecord::Migration
  def change
    change_column :songs, :genre, :string, :null => true
  end
end
