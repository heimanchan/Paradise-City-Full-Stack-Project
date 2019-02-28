class AddColumnsToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :wifi, :boolean, default: false
    add_column :spots, :shampoo, :boolean, default: false
    add_column :spots, :tv, :boolean, default: false
    add_column :spots, :heat, :boolean, default: false
    add_column :spots, :air_conditioning, :boolean, default: false
    add_column :spots, :iron, :boolean, default: false
    add_column :spots, :hair_dryer, :boolean, default: false
    add_column :spots, :first_aid, :boolean, default: false
    add_column :spots, :pool, :boolean, default: false
    add_column :spots, :laundry, :boolean, default: false
  end
end
