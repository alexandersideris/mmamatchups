class CreateFighters < ActiveRecord::Migration
  def change
    create_table :fighters do |t|
      t.string :name
      t.text :division
      t.text :ranking

      t.timestamps null: false
    end
  end
end
