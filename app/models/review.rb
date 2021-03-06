class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :spot

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
