import Auth from '../modules/Auth';

const initialState = {
  auth: Auth.authenticationStatus()
}

const userReducer = function (state = initialState, action) {
  switch (action.type) {

    case "AUTHENTICATE_USER":
      Auth.authenticateToken(action.payload.token)

      return {
        ...state,
        auth: Auth.authenticationStatus()
      }

    default:
      return state;
  }

}

export default userReducer;