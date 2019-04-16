import axios from 'axios';

import { requestOptions } from '../lib/axios';
import Toaster from '../lib/toaster';
import { setLoading } from './appActions'
import { FETCH_USER_DETAILS } from './actionTypes';

const fetchUserComplete = (profile, offers) => ({
  type: FETCH_USER_DETAILS,
  payload: { profileInfo: profile, loanOffers: offers }
})

export const fetchUserInfo = (id) => async dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/my-profile`;
  try {
    let response = await axios(requestOptions('get', path, null, `Token token=${id}`));
    const { data } = response;
    dispatch(fetchUserComplete(data.profile_info, data.loan_offers));
  }
  catch (error) {
    Toaster.error(error.message, 'Failure');
   }
  dispatch(setLoading(false));
}

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

export const requestLoan = (user_id, amount) => async dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/loan?amount=${amount}`;
  try {
    let response = await axios(requestOptions('post', path, null, `Token token=${user_id}`));
    const { data } = response;
    Toaster.success(data.message, data.status);
    dispatch(setLoading(true));
    await dispatch(fetchUserInfo(user_id))
    dispatch(setLoading(false));
  }
  catch (error) {
    const { data } = error.response
    Toaster.error(data.message, data.status);
  }
  dispatch(setLoading(false));
}
