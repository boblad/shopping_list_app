import ProductService from '../services/ProductService';
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

import { toggleIsLoading } from './LoadActions';
import { setErrorMessage } from './MessageActions';


const createProductRequest = () => ({
  type: CREATE_PRODUCT_REQUEST
});

const createProductSuccess = (response) => ({
  type: CREATE_PRODUCT_SUCCESS
});

const createProductFailure = () => ({
  type: CREATE_PRODUCT_FAILURE
});

export const createProduct = (apikey, product, router) => {
  return (dispatch, getState) => {
    dispatch(createProductRequest());
    dispatch(toggleIsLoading(true));
    ProductService.req.createProduct(apikey, product)
    .then((response) => {
      dispatch(createProductSuccess());
      dispatch(toggleIsLoading(false));
    })
    .catch((error) => {
      dispatch(setErrorMessage(error.message));
      dispatch(createProductFailure());
      dispatch(toggleIsLoading(false));
    })
  }
}


const listProductRequest = () => ({
  type: LIST_PRODUCT_REQUEST
});

const listProductSuccess = (response) => ({
  type: LIST_PRODUCT_SUCCESS,
  results: response
});

const listProductFailure = () => ({
  type: LIST_PRODUCT_FAILURE
});

export const listProduct = (apikey, router) => {
  return (dispatch, getState) => {
    console.log('called')
    dispatch(listProductRequest());
    dispatch(toggleIsLoading(true));
    ProductService.req.listProduct(apikey)
    .then((response) => {
      console.log('response', response)
      dispatch(listProductSuccess(response));
      dispatch(toggleIsLoading(false));
    })
    .catch((error) => {
      dispatch(setErrorMessage(error.message));
      dispatch(listProductFailure());
      dispatch(toggleIsLoading(false));
    })
  }
}
