class City < ApplicationRecord
  validates :name, presence: true

  has_many :spots
end
