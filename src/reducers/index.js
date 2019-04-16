import { combineReducers } from 'redux';

import appReducer from './appReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  app: appReducer,
  users: usersReducer,
  profile: profileReducer
});

export default reducers;
