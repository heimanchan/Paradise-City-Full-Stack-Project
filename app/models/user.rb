class User < ApplicationRecord
  validates :username, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :password, length:{ minimun: 6, allow_nil: true }

  attr_reader
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  
end
