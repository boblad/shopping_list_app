import {
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAILURE,
  RETRIEVE_PRODUCT_REQUEST,
  RETRIEVE_PRODUCT_SUCCESS,
  RETRIEVE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DESTROY_PRODUCT_REQUEST,
  DESTROY_PRODUCT_SUCCESS,
  DESTROY_PRODUCT_FAILURE
} from '../constants/ProductConstants';

const initialState = {
};

export default function message(state = initialState, action) {
  switch (action.type) {
  case RETRIEVE_PRODUCT_FAILURE:
    return {
      ...state
    };
  case LIST_PRODUCT_REQUEST:
    return {
      ...state,
      result: null
    };
  case LIST_PRODUCT_SUCCESS:
    return {
      ...state,
      result: action.result
    };
  default:
    return state;
  }
}
