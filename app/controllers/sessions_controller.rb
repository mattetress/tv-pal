class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false

  def create 
    if user = User.validate_login(params[:email], params[:password])
      regenerate_token(user)
      send_token(user)
    else
      render_unauthorized("There was a problem logging you in. Check your email and password.")
    end
  end

  def destroy
    user = User.find_by_auth_token!(request.headers[:token])
    user.invalidate_token
    head :ok
  end 

  private 

  def send_token(user)
    render json: { token: user.auth_token }
  end 

  def regenerate_token(user)
    user.regenerate_auth_token
  end
end
