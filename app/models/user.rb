class User < ActiveRecord::Base
  
  validates :email, :username, :password_digest, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

after_initialize :ensure_session_token


attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.email_exists?(email)
    user = User.find_by_email(email)
    user.nil? ? false : true
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
