class Auth {

  static authenticateToken(token) {
    sessionStorage.setItem('token', token);
  }

  static authenticationStatus() {
    return sessionStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    return sessionStorage.removeItem('token');
  }

  static getToken() {
    return sessionStorage.getItem('token');
  }
}

export default Auth;