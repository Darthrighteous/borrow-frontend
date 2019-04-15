import { FETCH_USERS } from'../actions/actionTypes';
import defaultState from '../store/defaultState';

const { users } = defaultState;

const usersReducer = (state = users, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return [
        ...payload.users
      ]
    default:
      return state
  }
};

export default usersReducer;