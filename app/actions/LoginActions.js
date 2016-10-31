import LoginService from '../services/LoginService';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/LoginConstants';

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  results: response
});

const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const login = (router, username, password) => {
  return (dispatch, getState) => {
    console.log('called')
    dispatch(loginRequest());
    dispatch(toggleIsLoading(true));
    LoginService.req.loginUser(username, password)
    .then((response) => {
      console.log('response', response)
      dispatch(loginSuccess(response));
      dispatch(toggleIsLoading(false));
    })
    .catch((error) => {
      dispatch(setErrorMessage(error.message));
      dispatch(loginFailure());
      dispatch(toggleIsLoading(false));
    })
  }
}
