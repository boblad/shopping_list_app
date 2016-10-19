import {
  TOGGLE_IS_LOADING
} from '../constants/LoadConstants';

const initialState = {
  isLoading: false
};

export default function load(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
  default:
    return state;
  }
}
