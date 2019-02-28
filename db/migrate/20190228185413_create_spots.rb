class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.integer :max_guests, null: false
      t.integer :num_beds
      t.integer :num_bedrooms
      t.text :description, null: false
      t.string :address, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.integer :ratings
      t.integer :owner_id, null: false
      t.integer :city_id, null: false
      
      t.timestamps
    end
    add_index :spots, :title
    add_index :spots, :owner_id
    add_index :spots, :city_id
  end
end
