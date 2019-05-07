class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false

  def create 
    if user = User.validate_login(params[:email], params[:password])
      regenerate_token(user)
      send_token(user)
    else
      render_unauthorized("error with your login or password")
    end
  end

  def destroy
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
