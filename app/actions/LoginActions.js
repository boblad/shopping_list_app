import LoginService from '../services/LoginService';
import { toggleIsLoading } from './LoadActions';
import { setErrorMessage } from './MessageActions';
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
  key: response.key
});

const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const login = (router, username, password) => {
  return (dispatch, getState) => {
    console.log('called')
    dispatch(loginRequest());
    dispatch(toggleIsLoading(true));
    console.log('here')
    LoginService.req.loginUser(username, password)
    .then((response) => {
      console.log('response', response)
      dispatch(loginSuccess(response));
      router.toHome()
      dispatch(toggleIsLoading(false));
    })
    .catch((error) => {
      console.log('err', error)
      dispatch(setErrorMessage(error.message));
      dispatch(loginFailure());
      dispatch(toggleIsLoading(false));
    })
  }
}
