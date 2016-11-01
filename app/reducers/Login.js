import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/LoginConstants';

const initialState = {
  apikey: null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        apikey: action.key
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
  default:
    return state;
  }
}
