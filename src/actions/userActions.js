import axios from 'axios';

import { requestOptions } from '../lib/axios';
import Toaster from '../lib/toaster';
import { setLoading } from './appActions'
import { FETCH_USERS } from './actionTypes';

const fetchUsersComplete = users => ({
  type: FETCH_USERS,
  payload: { users }
})

export const fetchUsers = () => async dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/users`;
  try {
    let response = await axios(requestOptions('get', path));
    const { data } = response;
    Toaster.success(data.message, data.status);
    dispatch(fetchUsersComplete(data.users));
  }
  catch (error) {
    Toaster.error(error.message, 'Failure');
   }
  dispatch(setLoading(false));
}
