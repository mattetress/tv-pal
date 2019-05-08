
export function authenticateUser(response) {
  return {
    type: "AUTHENTICATE_USER",
    payload: response
  }
}