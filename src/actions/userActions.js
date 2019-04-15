import axios from 'axios';


import { requestOptions } from '../lib/axios';
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
      dispatch(fetchUsersComplete(response.data.users))
    })
    .catch((error) => {

    })
    .then(() => {

    })
}
