class AddColumnsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :author_id, :integer
  end
end
