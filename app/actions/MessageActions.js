import {
  SET_SUCCESS_MESSAGE,
  SET_ERROR_MESSAGE,
  CLEAR_MESSAGES
} from '../constants/MessageConstants';


const setSuccess = (message) => {
  return {
    type: SET_SUCCESS_MESSAGE,
    message
  }
}

export const setSuccessMessage = (message) => {
  return (dispatch) => {
    dispatch(clearMessages());
    dispatch(setSuccess(message));
  };
};

const setError = (message) => {
  return {
    type: SET_ERROR_MESSAGE,
    message
  }
}

export const setErrorMessage = (message) => {
  return (dispatch) => {
    dispatch(clearMessages());
    dispatch(setError(message));
  };
};

const deleteMessage = () => {
  return {
    type: CLEAR_MESSAGES
  };
};

export const clearMessages = () => {
  return (dispatch) => {
    dispatch(deleteMessage());
  };
};
