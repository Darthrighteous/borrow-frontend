import { combineReducers } from 'redux';

import appReducer from './appReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  app: appReducer,
  users: usersReducer
});

export default reducers;
