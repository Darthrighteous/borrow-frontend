import axios from 'axios';

import { requestOptions } from '../lib/axios';
import Toaster from '../lib/toaster';
import { setLoading } from './appActions'
import { FETCH_USERS } from './actionTypes';

const fetchUsersComplete = users => ({
  type: FETCH_USERS,
  payload: { users }
})

export const fetchUsers = () => dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/users`;
  return axios(requestOptions('get', path))
    .then(response => {
      const { data } = response;
      Toaster.success(data.message, data.status);
      console.log(Toaster)
      dispatch(fetchUsersComplete(data.users))
    })
    .catch((error) => {

    })
    .then(() => {
      dispatch(setLoading(false));
    })
}
