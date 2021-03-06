class User < ApplicationRecord
  validates :username, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :password, length:{ minimum: 6, allow_nil: true }

  after_initialize :ensuure_session_token

  has_many :spots,
    foreign_key: :owner_id,
    class_name: :Spot

  has_many :bookings,
    foreign_key: :guest_id,
    class_name: :Booking

  has_one_attached :photo
  
  attr_reader :password
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensuure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
