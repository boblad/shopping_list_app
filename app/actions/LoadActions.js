import {
  TOGGLE_IS_LOADING
} from '../constants/LoadConstants';

// -----------------------------------------------------------------------------
//                          toggle spinner
// -----------------------------------------------------------------------------

const toggle = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading
});

export const toggleIsLoading = (isLoading) => {
  return (dispatch) => {
    dispatch(toggle(isLoading));
  }
}
