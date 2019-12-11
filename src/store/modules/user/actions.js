export function signUpRequest(data) {
  return {
    type: '@user/SIGN_UP_REQUEST',
    payload: data,
  };
}

export function signUpSuccess() {
  return {
    type: '@user/SIGN_UP_SUCCESS',
  };
}

export function signUpFailure() {
  return {
    type: '@user/SIGN_UP_FAILURE',
  };
}
