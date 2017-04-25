class AddAttachmentHeaderImageToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :header_image
      t.string :city
      t.string :country
    end
  end

  def self.down
    remove_attachment :users, :header_image
  end
end
