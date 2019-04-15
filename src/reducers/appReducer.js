import { SET_LOADING } from'../actions/actionTypes';
import defaultState from '../store/defaultState';

const { app } = defaultState;

const appReducer = (state = app, action) => {
  const { type } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
};

export default appReducer;
