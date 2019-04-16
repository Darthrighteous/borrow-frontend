import { FETCH_USER_DETAILS } from'../actions/actionTypes';
import defaultState from '../store/defaultState';

const { profile } = defaultState;

const profileReducer = (state = profile, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER_DETAILS:
      return {
        ...state,
        info: {...payload.profileInfo},
        offers: [...payload.loanOffers]
      }
    default:
      return state
  }
};

export default profileReducer;
