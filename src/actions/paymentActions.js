import axios from 'axios';

import { requestOptions } from '../lib/axios';
import Toaster from '../lib/toaster';

import { setLoading } from './appActions'
import { fetchUserInfo } from './profileActions';

export const makePayment = (user_id, installment_id, amount) => async dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/pay`;
  const date_paid = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    const body = {
      installment_id,
      amount,
      date_paid
    }
    let response = await axios(requestOptions('post', path, body, `Token token=${user_id}`));
    const { data } = response;
    Toaster.success(data.message, data.status);
    dispatch(setLoading(true));
    await dispatch(fetchUserInfo(user_id))
    dispatch(setLoading(false));
  }
  catch(error) {
    const { data } = error.response
    Toaster.error(data.message, data.status);
  }
  dispatch(setLoading(false));
}
