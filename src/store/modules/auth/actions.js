export function signInRequest(email, user) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, user },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_USER',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
