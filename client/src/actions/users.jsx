
export function authenticateUser(response) {
  return {
    type: "AUTHENTICATE_USER",
    payload: response
  }
}

export function displayError(response) {
  return {
    type: "ADD_ERROR",
    payload: response
  }
}

export function dismissErrors() {
  return {
    type: "DISMISS_ERRORS"
  }
}