class AddPhotoToFighter < ActiveRecord::Migration
  def change
    add_column :fighters, :photo, :string
  end
end
