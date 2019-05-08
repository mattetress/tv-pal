class UsersController < ApiController
  before_action :require_login, except: [:create]

  def create 
    user = User.new(user_params)
    if user.save 
      render json: { token: user.auth_token }
    else 
      render json: { errors: user.errors.full_messages }
    end
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    render json: user
  end 

  private 

  def user_params 
    params.require(:user).permit(:email, :password, :password_confirmation)
  end 
end
