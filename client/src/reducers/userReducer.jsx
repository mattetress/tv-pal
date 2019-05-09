import Auth from '../modules/Auth';

const initialState = {
  auth: Auth.authenticationStatus(),
  errors: []

}

const userReducer = function (state = initialState, action) {
  switch (action.type) {

    case "AUTHENTICATE_USER":
      Auth.authenticateToken(action.payload.token)

      return {
        ...state,
        auth: Auth.authenticationStatus()
      }

    case "ADD_ERROR":
      console.log(action);

      return {
        ...state,
        errors: action.payload.errors
      }

    case "DISMISS_ERRORS":

      return {
        ...state,
        errors: []
      }

      case "END_SESSION":
        Auth.deauthenticateUser();

        return {
          ...state,
          auth: Auth.authenticationStatus()
        }



    default:
      return state;
  }

}

export default userReducer;