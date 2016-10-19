import {
  CLEAR_MESSAGES,
  SET_SUCCESS_MESSAGE,
  SET_ERROR_MESSAGE
} from '../constants/MessageConstants';

const initialState = {
  successMessage: null,
  errorMessage: null
};

export default function message(state = initialState, action) {
  switch (action.type) {
  case CLEAR_MESSAGES:
    return {
      ...state,
      successMessage: null,
      errorMessage: null
    };
  case SET_SUCCESS_MESSAGE:
    return {
      ...state,
      successMessage: action.message,
      errorMessage: null
    };
  case SET_ERROR_MESSAGE:
    return {
      ...state,
      errorMessage: action.message,
      successMessage: null
    };
  default:
    return state;
  }
}
